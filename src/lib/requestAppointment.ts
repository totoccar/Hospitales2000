"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "./db";
import { DiaSemanaEnum } from "@prisma/client";

export type AppointmentState = {
    errors?: {
        fecha_hora?: string[];
        patient_id?: string[]; 
        doctor_id?: string[];  
        isFirstTime?: boolean[];
    };
    message?: string | null;
};

const AppointmentFormScheme = z.object({
    fecha_hora: z.string().datetime(),
    patient_id: z.string(),
    doctor_id: z.string(),
});

const CreateAppointment = AppointmentFormScheme;

export async function createAppointment(prevState: AppointmentState, formData: FormData) {
    const validatedFields = CreateAppointment.safeParse({
        fecha_hora: formData.get('fecha_hora') as string,
        patient_id: formData.get('patient_id') as string,
        doctor_id: formData.get('doctor_id') as string,
        description: formData.get('descripcion') as string,
    });

    console.log(formData);

    if (!validatedFields.success) {
        console.log("error on validatedFields.");
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Campos incompletos. Error al crear un doctor nuevo.',
        };
    }

    console.log('validatedFields: ', validatedFields);

    const { fecha_hora,patient_id,doctor_id  } = validatedFields.data; 

    try {
    const newAppointment = await prisma.cita.create({
        data: {
            fecha_hora: fecha_hora,
            paciente_id: patient_id,
            medico_id: doctor_id,
        },
    });
        
    } catch (error) {
        console.error('Error al crear un doctor:', error);
        throw error;
    }
    revalidatePath('/search/doctor'); 
    redirect('/search/doctor'); 
}

export async function getDoctorIntervalsForIdAndDay(doctorId: string, date: Date) {

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

function convertDayToDiaSemanaEnum(day: number) {
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
    }
}