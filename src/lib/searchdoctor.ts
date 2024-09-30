import { TipoDocumentoEnum } from "@prisma/client";
import prisma from "./db";

interface SearchParams {
  dni?: string;
  apellido?: string;
  tipoDocumento?: TipoDocumentoEnum;
  numero_matricula?: string;
}

export async function findDoctorsByQuery({
  dni,
  apellido,
  tipoDocumento,
  numero_matricula,
}: SearchParams) {
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
    });
    return medicos;
  } catch (error) {
    console.error("Error al buscar médicos:", error);
    throw new Error("No se pudo buscar los médicos");
  } finally {
    await prisma.$disconnect();
  }
}
