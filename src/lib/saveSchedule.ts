'use server';

import prisma from "./db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { DiaSemanaEnum } from "@prisma/client";
import { getDni } from "../app/lib/actions";

const IntervaloSchema = z.object({
  inicio: z.string(),
  fin: z.string(),
});

const HorariosSchema = z.record(z.array(IntervaloSchema));

export interface Doctor {
  id: string;
  name: string;
}

export interface SaveScheduleResponse {
  success: boolean;
  message: string;
}

export async function getDoctors(): Promise<Doctor[]> {
  try {
    const doctors = await prisma.usuario.findMany({
      where: {
        medico: {
          isNot: null
        }
      },
      select: {
        id: true,
        nombre: true,
        apellido: true
      }
    });

    return doctors.map(doctor => ({
      id: doctor.id,
      name: `${doctor.nombre} ${doctor.apellido}`
    }));
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw new Error('Failed to fetch doctors');
  }
}

function adjustTimeToUTC(timeStr: string): Date {
  // Crear una fecha UTC usando la hora local
  const [hours, minutes] = timeStr.split(':').map(Number);
  const date = new Date(Date.UTC(1970, 0, 1, hours, minutes));
  return date;
}

export async function getDoctorSchedule(doctorId?: string): Promise<{
  schedules: z.infer<typeof HorariosSchema>;
  appointmentDuration: number;
}> {
  try {
    let userId = doctorId;
    
    if (!userId) {
      const userDni = await getDni();
      const user = await prisma.usuario.findUnique({
        where: { numero_documento: userDni },
        select: { id: true }
      });
      
      if (!user) {
        throw new Error('User not found');
      }
      
      userId = user.id;
    }

    const doctor = await prisma.medico.findUnique({
      where: { usuario_id: userId },
      include: {
        intervalos: true
      }
    });

    if (!doctor) {
      throw new Error('Doctor not found');
    }

    const schedules: z.infer<typeof HorariosSchema> = {};
    const daysMap: { [key: string]: string } = {
      'LUNES': 'Lunes',
      'MARTES': 'Martes',
      'MIERCOLES': 'Miércoles',
      'JUEVES': 'Jueves',
      'VIERNES': 'Viernes'
    };

    doctor.intervalos.forEach(interval => {
      const day = daysMap[interval.diaSemana];
      if (!schedules[day]) {
        schedules[day] = [];
      }
      
      // Convertir las horas de la base de datos a formato local
      const startTime = interval.horaInicio.toISOString().slice(11, 16);
      const endTime = interval.horaFin.toISOString().slice(11, 16);
      
      schedules[day].push({
        inicio: startTime,
        fin: endTime
      });
    });

    return {
      schedules,
      appointmentDuration: doctor.duracion_cita || 15
    };
  } catch (error) {
    console.error('Error fetching doctor schedule:', error);
    throw error;
  }
}

export async function saveScheduleForDoctor(
  horarios: z.infer<typeof HorariosSchema>,
  duracionTurno: number,
  doctorId?: string
): Promise<SaveScheduleResponse> {
  try {
    let userId = doctorId;
    
    if (!userId) {
      const userDni = await getDni();
      const user = await prisma.usuario.findUnique({
        where: { numero_documento: userDni },
        include: { medico: true },
      });

      if (!user || !user.medico) {
        return {
          success: false,
          message: 'No se encontró el médico en la sesión actual',
        };
      }
      
      userId = user.id;
    }

    const reverseMap: { [key: string]: DiaSemanaEnum } = {
      'Lunes': DiaSemanaEnum.LUNES,
      'Martes': DiaSemanaEnum.MARTES,
      'Miércoles': DiaSemanaEnum.MIERCOLES,
      'Jueves': DiaSemanaEnum.JUEVES,
      'Viernes': DiaSemanaEnum.VIERNES
    };

    await prisma.$transaction(async (prisma) => {
      // 1. Eliminar todos los intervalos existentes para este médico
      await prisma.intervaloAtencion.deleteMany({
        where: { medico_id: userId },
      });

      // 2. Actualizar la duración de la cita del médico
      await prisma.medico.update({
        where: { usuario_id: userId },
        data: { duracion_cita: duracionTurno },
      });

      // 3. Crear los nuevos intervalos
      const intervalosToCreate = Object.entries(horarios).flatMap(
        ([dia, intervalos]) =>
          intervalos.map((intervalo) => ({
            diaSemana: reverseMap[dia],
            horaInicio: adjustTimeToUTC(intervalo.inicio),
            horaFin: adjustTimeToUTC(intervalo.fin),
            medico_id: userId,
          }))
      );

      if (intervalosToCreate.length > 0) {
        await prisma.intervaloAtencion.createMany({
          data: intervalosToCreate,
        });
      }
    });

    revalidatePath('/appointment/setschedule');
    
    return {
      success: true,
      message: 'Horarios guardados exitosamente',
    };
  } catch (error) {
    console.error('Error al guardar los horarios:', error);
    return {
      success: false,
      message: 'Error al guardar los horarios. Por favor, intente nuevamente.',
    };
  }
}