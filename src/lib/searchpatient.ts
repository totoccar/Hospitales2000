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
        AND: [
          apellido ? {
            usuario: {
              apellido: {
                contains: apellido,
                mode: 'insensitive', 
              },
            },
          } : {}, 
          dni && tipoDocumento ? {
            usuario: {
              tipo_documento: tipoDocumento,
              numero_documento: {
                contains: dni,
                mode: 'insensitive', 
              },
            },
          } : {}, 
        ]
      },
      include: {
        usuario: true, 
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