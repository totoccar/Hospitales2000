

import prisma from "./db";

export async function getUsuarioById(usuarioId: string) {
  console.log("usuario: ", usuarioId);
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        paciente: true,  // Solo traer los datos del paciente si existen
      },
    });

    if (!usuario?.paciente) {
      throw new Error('El usuario no es un paciente o no existe.');
    }

    return usuario;  // Retorna los datos del paciente
  } catch (error) {
    console.error('Error al obtener el paciente:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
export async function getObraSocialById(obraSocialId: string) {
  try {
    const obraSocial = await prisma.obraSocial.findUnique({
      where: { id: obraSocialId },
    });

    if (!obraSocial) {
      throw new Error('Obra social no encontrada');
    }

    return obraSocial.nombre;  // Retorna la obra social si existe
  } catch (error) {
    console.error('Error al obtener la obra social:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
export async function getUbicacionById(ubicacionId: string) {
  try {
    const ubicacion = await prisma.ubicacion.findUnique({
      where: { id: ubicacionId },
    });

    if (!ubicacion) {
      throw new Error('Ubicación no encontrada');
    }

    return ubicacion; // Retorna la ubicación si existe
  } catch (error) {
    console.error('Error al obtener la ubicación:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
