import prisma from "./db";

export async function findPacientesByQuery(query: string) {
    try {
      const pacientes = await prisma.paciente.findMany({
        where: {
          OR: [
            {
              usuario: {
                numero_documento: {
                  contains: query,
                  mode: 'insensitive', // Case-insensitive search
                },
              },
            },
            {
              usuario: {
                apellido: {
                  contains: query,
                  mode: 'insensitive', // Case-insensitive search
                },
              },
            },
          ],
        },
        include: {
          usuario: true, // Include related Usuario data
        },
      });

      return pacientes;
    } catch (error) {
      console.error('Error finding pacientes:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }