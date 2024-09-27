import { TipoDocumentoEnum } from "@prisma/client";
import prisma from "./db";

interface SearchParams {
  dni: string;
  apellido: string;
  tipoDocumento: TipoDocumentoEnum;
}

export async function findPacientesByQuery({ dni, apellido, tipoDocumento }: SearchParams) {
  try {
    const pacientes = await prisma.paciente.findMany({
      where: {
        // Aplica filtro por apellido, tipo de documento y número de documento
        AND: [
          apellido ? {
            usuario: {
              apellido: {
                contains: apellido,
                mode: 'insensitive', // Búsqueda case-insensitive
              },
            },
          } : {}, // Aplica filtro por Apellido si existe
          dni && tipoDocumento ? {
            usuario: {
              tipo_documento: tipoDocumento,
              numero_documento: {
                contains: dni,
                mode: 'insensitive', // Búsqueda case-insensitive
              },
            },
          } : {}, // Aplica filtro por tipo de documento y número de documento si existen
        ]
      },
      include: {
        usuario: true, // Incluye los datos relacionados del usuario
      },
    });
    
    console.log('Pacientes encontrados:', pacientes);
    return pacientes;
  } catch (error) {
    console.error('Error finding pacientes:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}