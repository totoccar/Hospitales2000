import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { date } from "zod";
import prisma from "./db";

export type AppointmentState = {
    errors?: {
        date?: string[];
        time?: string[];
        isFirstTime?: boolean;
    };
    message?: string | null;
};

const AppointmentFormScheme = z.object({
    fecha_hora: z.string(),
    patient_id: z.string(),
    doctor_id: z.string(),
});

const CreateAppointment = AppointmentFormScheme;

export async function createAppointment(prevState: AppointmentState, formData: FormData) {
    const validatedFields = CreateAppointment.safeParse({
        typeId: formData.get('tipo_documento'),
        numberId: formData.get('numero_documento'),
        regType: formData.get('tipo_matricula'),
        regNumber: formData.get('numero_matricula'),
        doctorName: formData.get('nombre'),
        doctorLastName: formData.get('apellido'),
        phoneNumber: formData.get('numero_telefono'),
        city: formData.get('ciudad'),
        streetName: formData.get('calle'),
        streetNumber: formData.get('numero'),
        postalCode: formData.get('codigo_postal'),
        cityState: formData.get('provincia'),
        email: formData.get('correo_electronico'),
        specialty: formData.get('especialidad'),
        description: formData.get('descripcion'),
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