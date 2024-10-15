'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./db";

export async function deletePatient(id: string) {
    try {
        //Get user.
        const user = await prisma.usuario.findUnique({
            where: {id: id},
            include: {
                paciente: {
                    include: {
                        ficha_medica: true,
                        ubicacion: true,
                        citas: true,
                    },
                },
            },
        });

        console.log(id);
        console.log(user);
        //Delete all related fields.
        await prisma.cita.deleteMany({
            where: {paciente_id: user?.paciente?.usuario_id}
        });
        await prisma.fichaMedica.delete({
            where: {id: user?.paciente?.ficha_medica_id},
        });
        await prisma.ubicacion.delete({
            where: {id: user?.paciente?.ubicacion.id}
        });
        await prisma.usuario.delete({
            where: {id: id},
        });
        await prisma.paciente.delete({
            where: {usuario_id: user?.paciente?.usuario_id}
        });
        console.log('User deleted succesfully.');
    } catch(error) {
        console.log(error);
        return {
            message: 'Database Error: Failed to Delete Patient.',
        }
    }

    revalidatePath('/search/patient');
    redirect('/search/patient');
}

export async function deleteDoctor(id: string) {
    try {
        //Get user.
        const user = await prisma.usuario.findUnique({
            where: {id: id},
            include: {
                medico: {
                    include: {
                        ubicacion: true,
                        citas: true,
                        intervalos: true,
                    },
                },
            },
        });

        console.log(id);
        console.log(user);
        //Delete all related fields.
        await prisma.intervaloAtencion.deleteMany({
            where: {medico_id: user?.medico?.usuario_id}
        });
        await prisma.cita.deleteMany({
            where: {medico_id: user?.medico?.usuario_id}
        });
        await prisma.ubicacion.delete({
            where: {id: user?.medico?.ubicacion.id}
        });
        await prisma.medico.delete({
            where: {usuario_id: user?.medico?.usuario_id}
        });
        await prisma.usuario.delete({
            where: {id: id},
        });
    } catch(error) {
        console.log(error);
        return {
            message: 'Database Error: Failed to Delete Doctor.',
        }
    }

    revalidatePath('/search/doctor');
    redirect('/search/doctor');
}

export async function deleteSecretary(id: string) {
    try {
        //Get user.
        const user = await prisma.usuario.findUnique({
            where: {id: id},
            include: {
                secretaria: {
                    include: {
                        ubicacion: true,
                    },
                },
            },
        });

        console.log(id);
        console.log(user);
        //Delete all related fields.
        await prisma.secretaria.delete({
            where: {usuario_id: user?.secretaria?.usuario_id}
        })
        await prisma.ubicacion.delete({
            where: {id: user?.secretaria?.ubicacion.id}
        });
        await prisma.usuario.delete({
            where: {id: id},
        });
    } catch(error) {
        console.log(error);
        return {
            message: 'Database Error: Failed to Delete Secretary.',
        }
    }

    revalidatePath('/search/secretary');
    redirect('/search/secretary');
}