"use server"
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function cancelAppointmentAsDoctor(appointmentId: string) {
    try {
        await prisma.cita.delete({
        where: {id: appointmentId}});
    } catch (error) {
        console.log(error);
        return {
            message: 'Database Error: Failed to Delete Appointment.',
        }
    }
    revalidatePath(`/appointment/medicalcalendar`);
    redirect('');
}

export async function cancelAppointmentAsSecretary(appointmentId: string,doctorID:string) {
    
    try{
        await prisma.cita.delete({
            where: {id: appointmentId}
        });
    } catch (error) {
        console.log(error);
        return {
            message: 'Database Error: Failed to Delete Appointment.',
        }
    }
    revalidatePath(`/appointment/secretarycalendar/${doctorID}`);
    redirect(`${doctorID}`);
}