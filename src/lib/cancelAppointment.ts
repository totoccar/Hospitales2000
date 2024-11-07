"use server"
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getDni } from "../app/lib/actions";
import { getMedicoIdByDNI } from "./calendarActions";

export async function cancelAppointmentAsDoctor(appointmentId: string) {
    
    const doctorDNI = await getDni();
    const doctorID = await getMedicoIdByDNI(doctorDNI);
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
    redirect(`/appointment/medicalcalendar`);
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