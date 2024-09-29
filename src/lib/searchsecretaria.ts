import { TipoDocumentoEnum } from "@prisma/client";
import prisma from "./db";

interface SearchParams {
  dni: string;
  apellido: string;
  tipoDocumento: TipoDocumentoEnum;
}

export async function findsecretariasByQuery({ dni, apellido, tipoDocumento }: SearchParams) {
  try {
    const secretarias = await prisma.secretaria.findMany({
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
    
    console.log('secretarias encontradas:', secretarias);
    return secretarias;
  } catch (error) {
    console.error('Error finding secretarias:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}