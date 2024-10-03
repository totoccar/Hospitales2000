import { TipoDocumentoEnum } from "@prisma/client";
import prisma from "./db";

interface SearchParams {
  dni: string;
  apellido: string;
  tipoDocumento: TipoDocumentoEnum;
  currentPage: number;
}
const ITEMS_PER_PAGE = 6;

export async function findPacientesByQuery({ dni, apellido, tipoDocumento,currentPage }: SearchParams) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
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
      skip: offset,
      take: ITEMS_PER_PAGE,
    });
    

    return pacientes;
  } catch (error) {
    console.error('Error finding pacientes:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAmountPacientesByQuery({ dni, apellido, tipoDocumento,currentPage }: SearchParams) {
  try {
    const count = await prisma.paciente.count({
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
    });
      const totalPages = Math.round(count / ITEMS_PER_PAGE);
      return totalPages;
  } catch (error) {
    console.error('Error finding pacientes:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}