import prisma from "./db";

export async function getTotalDoctors() {
    try {
        const amount_doctors = await prisma.usuario.count({
            where: {
                medico: {
                    isNot: null
                }
            }
        });

        return amount_doctors;
    } catch (error) {
        console.error('Error al obtener el número de médicos:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getTotalPatients() {
    try {
        const amount_patients = await prisma.usuario.count({
            where: {
                paciente: {
                    isNot: null
                }
            }
        });

        return amount_patients;
    } catch (error) {
        console.error('Error al obtener el número de pacientes:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getTotalMedicalRecords() {
    try {
        const amount_medical_records = await prisma.fichaMedica.count();

        return amount_medical_records;
    } catch (error) {
        console.error('Error al obtener el número de historiales clínicos:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
