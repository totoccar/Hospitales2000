"use server";

import prisma from "./db";

export async function getTurnosByMedicoId(medicoId: string, fecha: Date | undefined) {
    const citas = await prisma.cita.findMany({
        where: {
            medico_id: medicoId,
            fecha_hora: {
                gte: new Date(fecha!.setHours(0, 0, 0, 0)),
                lt: new Date(fecha!.setHours(23, 59, 59, 999)),
            },
        },
        include: {
            paciente: {
                include: {
                    usuario: {
                        select: {
                            nombre: true,
                            apellido: true,
                        },
                    },
                    obra_social: {
                        select: {
                            nombre: true,
                        },
                    },
                },
            },
        },
    });

    return citas;
}

export async function getFechasTurnosByMedicoId(medicoId: string) {
    const citas = await prisma.cita.findMany({
        where: {
            medico_id: medicoId,
        },
        select: {
            fecha_hora: true, // Esto retorna un array de objetos con la propiedad fecha_hora
        },
    });

    // Extraer fechas únicas sin convertir a ISO
    const fechasDisponibles = Array.from(
        new Set(citas.map(cita => new Date(cita.fecha_hora).toDateString())) // Asegúrate de que cita.fecha_hora sea un Date
    ).map(fecha => new Date(fecha)); // Convertir de nuevo a Date

    return fechasDisponibles;
}


export async function getMedicoIdByDNI(DNI: string) {
    try {
        const usuario = await prisma.usuario.findUnique({
            where: { numero_documento: DNI },
            include: {
                medico: true,
            },
        });

        if (!usuario?.medico) {
            throw new Error('El usuario no es un paciente o no existe.');
        }

        return usuario.id;
    }
    catch (error) {
        console.error('Error al obtener el medico:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}




