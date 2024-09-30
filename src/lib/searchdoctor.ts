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
          // Filtro por apellido, si se proporciona
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
          // Filtro por dni y tipo de documento, si se proporcionan ambos
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
          // Filtro por número de matrícula, si se proporciona
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
      // Incluir datos de la relación con Usuario
      include: {
        usuario: true, // Asegúrate de que `usuario` esté bien relacionado en el esquema
      },
    });
    console.log("Apellido: ", apellido);
    console.log("DNI: ", dni);
    console.log("Tipo de documento: ", tipoDocumento);
    console.log("Número de matrícula: ", numero_matricula);
    return medicos;
  } catch (error) {
    console.error("Error al buscar médicos:", error);
    throw new Error("No se pudo buscar los médicos");
  } finally {
    await prisma.$disconnect();
  }
}
