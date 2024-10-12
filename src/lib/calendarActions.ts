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