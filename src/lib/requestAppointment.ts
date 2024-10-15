"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "./db";
import { DiaSemanaEnum } from "@prisma/client";
import { lastDayOfMonth } from "date-fns";

export type AppointmentState = {
  errors?: {
    fecha_hora?: string[];
    paciente_id?: string[];
    medico_id?: string[];
    description?: string[];
  };
  message?: string | null;
};

const AppointmentFormScheme = z.object({
  id: z.string(),
  fecha_hora: z
    .string()
    .datetime({
      message: "Fecha y hora inválida. Debe estar en formato ISO 8601.",
    }),
  paciente_id: z
    .string()
    .min(1, { message: "El ID del paciente es obligatorio." }),
  medico_id: z.string().min(1, { message: "El ID del doctor es obligatorio." }),
  description: z.string().optional(),
});

const CreateAppointment = AppointmentFormScheme.omit({ id: true });

export async function createAppointment(
  prevState: AppointmentState,
  formData: FormData
) {
  const validatedFields = CreateAppointment.safeParse({
    fecha_hora: formData.get("fecha_hora"),
    paciente_id: formData.get("paciente_id"),
    medico_id: formData.get("medico_id"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    console.log("error on validatedFields.");
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos incompletos. Error al crear una nueva cita medica.",
    };
  }

  const { fecha_hora, paciente_id, medico_id, description } =
    validatedFields.data;

  try {
    const newAppointment = await prisma.cita.create({
      data: {
        fecha_hora: fecha_hora,
        paciente_id: paciente_id,
        medico_id: medico_id,
        description: description,
      },
    });
    console.log("Cita creada:", newAppointment);
  } catch (error) {
    console.error("Error al crear una cita:", error);
    throw error;
  }
  revalidatePath("appointment/request/[id]");
  redirect(`/appointment/request/success/${medico_id}`);
}

export async function getDoctorIntervalsForIdAndDay(
  doctorId: string,
  date: Date
) {
  const doctor = await prisma.medico.findUnique({
    where: { usuario_id: doctorId },
    include: {
      intervalos: {
        where: {
          diaSemana: convertDayToDiaSemanaEnum(date.getDay()),
        },
      },
    },
  });

  if (!doctor) {
    return [];
  }
  return doctor.intervalos;
}

function convertDayToDiaSemanaEnum(day: number): DiaSemanaEnum | undefined {
  switch (day) {
    case 1:
      return DiaSemanaEnum.LUNES;
    case 2:
      return DiaSemanaEnum.MARTES;
    case 3:
      return DiaSemanaEnum.MIERCOLES;
    case 4:
      return DiaSemanaEnum.JUEVES;
    case 5:
      return DiaSemanaEnum.VIERNES;
    default:
      return undefined;
  }
}

export async function getAppointmentDuration(doctorId: string) {
  const doctor = await prisma.medico.findUnique({
    where: { usuario_id: doctorId },
  });

  if (!doctor) {
    return 0;
  }
  return doctor.duracion_cita;
}

export async function getAllAvalailableAppointmentsForDoctor(doctorId: string) {
  const doctor = await prisma.medico.findUnique({
    where: { usuario_id: doctorId },
    include: {
      citas: true,
    },
  });

  if (!doctor) {
    return [];
  }

  const duration = (await getAppointmentDuration(doctorId)) ?? 0;

  const appointments = doctor.citas.map((cita) => {
    const date = new Date(cita.fecha_hora);
    const end = new Date(date.getTime() + (duration ?? 0) * 60000);
    return { start: date, end };
  });

  return appointments;
}

export async function getAllAppointmentsByDoctorIDByDate(
  doctorId: string,
  date: Date
) {
  const adjustToLocalTime = (date: Date) => {
    const timezoneOffset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() - timezoneOffset);
    return date;
  };

  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const adjustedStartOfDay = adjustToLocalTime(startOfDay);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  const adjustedEndOfDay = adjustToLocalTime(endOfDay);


  const doctor = await prisma.medico.findUnique({
    where: { usuario_id: doctorId },
    include: {
      citas: {
        where: {
          fecha_hora: {
            gte: adjustedStartOfDay,
            lte: adjustedEndOfDay,
          },
        },
      },
    },
  });

  return doctor?.citas || []; 
}

export async function computeAvailableTimeslots(doctor_id: string, date: Date, duracion_cita: number) {
    const intervals = await getDoctorIntervalsForIdAndDay(doctor_id, date);
    
    const appointments = await getAllAppointmentsByDoctorIDByDate(doctor_id, date);

    const availableTimeslots: { start: Date; end: Date }[] = [];

    intervals.forEach(interval => {
        let start = new Date(date);
        start.setHours(interval.horaInicio.getHours(), interval.horaInicio.getMinutes(), 0, 0);

        let end = new Date(date);
        end.setHours(interval.horaFin.getHours(), interval.horaFin.getMinutes(), 0, 0);

        while (start < end) {
            const slotEnd = new Date(start.getTime() + duracion_cita * 60000);

            if (slotEnd > end) break;

            const isOverlapping = appointments.some(appointment => {
                const appointmentStart = new Date(appointment.fecha_hora);
                const appointmentEnd = new Date(appointmentStart.getTime() + duracion_cita * 60000);
                return (start >= appointmentStart && start < appointmentEnd) || (slotEnd > appointmentStart && slotEnd <= appointmentEnd);
            });

            if (!isOverlapping) {
                availableTimeslots.push({ start: new Date(start), end: new Date(slotEnd) });
            }

            start = new Date(slotEnd);
        }
    });
    return availableTimeslots;
}

export async function getDoctorWeekActiveDays(doctorId: string) {
  const doctor = await prisma.medico.findUnique({
    where: { usuario_id: doctorId },
    include: {
      intervalos: true,
    },
  });

  if (!doctor) {
    return [];
  }

  const activeDays = doctor.intervalos.map((intervalo) => {
    return intervalo.diaSemana;
  });

  return activeDays;
}

export async function getNonActiveDays(doctorId: string) {
  const activeDays = await getDoctorWeekActiveDays(doctorId);
  const allDays = [
    DiaSemanaEnum.LUNES,
    DiaSemanaEnum.MARTES,
    DiaSemanaEnum.MIERCOLES,
    DiaSemanaEnum.JUEVES,
    DiaSemanaEnum.VIERNES,
  ];
  return allDays.filter((day) => !activeDays.includes(day));
}

export async function isActiveDay(doctorId: string, date: Date): Promise<boolean> {
  const day = date.getDay();
  const activeDays = await getDoctorWeekActiveDays(doctorId);

  if (activeDays.length === 0) {
    return false;
  }

  const diaSemana = convertDayToDiaSemanaEnum(day);
  if (!diaSemana) {
    return false; 
  }

  return activeDays.includes(diaSemana);
}

export async function fetchDoctorUnavailableDates(medicoId: string, month: number, year: number) {

  const doctor = await prisma.medico.findUnique({
    where: { usuario_id: medicoId },
    include: {
      intervalos: true,
    },
  });

  if (!doctor) {
    return [];
  }

  const activeDays = doctor.intervalos.map((intervalo) => {
    return intervalo.diaSemana;
  });

  const unavailableDates: Date[] = [];

  for (let day = 1; day <= lastDayOfMonth(new Date(year, month - 1)).getDate(); day++) {
    const date = new Date();
    date.setMonth(month);
    date.setDate(day);
    const diaSemana = convertDayToDiaSemanaEnum(date.getDay());
    if (diaSemana && !activeDays.includes(diaSemana)) {
      unavailableDates.push(date);
    }
  }
  return unavailableDates;
   
}