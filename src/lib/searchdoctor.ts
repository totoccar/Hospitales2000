import { TipoDocumentoEnum } from "@prisma/client";
import prisma from "./db";

interface SearchParams {
  dni?: string;
  apellido?: string;
  tipoDocumento?: TipoDocumentoEnum;
  numero_matricula?: string;
  currentPage: number;
}
const ITEMS_PER_PAGE = 6;

export async function findDoctorsByQuery({
  dni,
  apellido,
  tipoDocumento,
  numero_matricula,
  currentPage,
}: SearchParams) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const medicos = await prisma.medico.findMany({
      where: {
        AND: [
          apellido
            ? {
                usuario: {
                  apellido: {
                    contains: apellido,
                    mode: 'insensitive',
                  },
                },
              }
            : {},
          dni && tipoDocumento
            ? {
                usuario: {
                  tipo_documento: tipoDocumento,
                  numero_documento: {
                    contains: dni,
                    mode: 'insensitive',
                  },
                },
              }
            : {},
          numero_matricula
            ? {
                numero_matricula: {
                  contains: numero_matricula,
                  mode: 'insensitive',
                },
              }
            : {},
        ],
      },
      include: {
        usuario: true,
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });
    return medicos;
  } catch (error) {
    console.error("Error al buscar médicos:", error);
    throw new Error("No se pudo buscar los médicos");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAmountDoctorsByQuery({
  dni,
  apellido,
  tipoDocumento,
  numero_matricula,
  currentPage,
}: SearchParams) {
  try {
    const count = await prisma.medico.count({
      where: {
        AND: [
          apellido
            ? {
                usuario: {
                  apellido: {
                    contains: apellido,
                    mode: 'insensitive',
                  },
                },
              }
            : {},
          dni && tipoDocumento
            ? {
                usuario: {
                  tipo_documento: tipoDocumento,
                  numero_documento: {
                    contains: dni,
                    mode: 'insensitive',
                  },
                },
              }
            : {},
          numero_matricula
            ? {
                numero_matricula: {
                  contains: numero_matricula,
                  mode: 'insensitive',
                },
              }
            : {},
        ],
      },
    });
    console.log(count);
    const totalPages = Math.round(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error al buscar médicos:", error);
    throw new Error("No se pudo buscar los médicos");
  } finally {
    await prisma.$disconnect();
  }
}
