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
    // Obtener todas las citas del médico
    const citas = await prisma.cita.findMany({
        where: {
            medico_id: medicoId,
        },
        select: {
            fecha_hora: true, // Solo seleccionamos la fecha y hora
        },
    });

    // Extraer las fechas únicas
    const fechasUnicas = Array.from(new Set(citas.map(cita => new Date(cita.fecha_hora).toDateString())));

    return fechasUnicas.map(fecha => new Date(fecha)); // Convertir las fechas de vuelta a objetos Date
}
