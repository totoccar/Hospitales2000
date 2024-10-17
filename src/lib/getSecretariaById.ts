import prisma from "./db";


export async function getUsuarioById(usuarioId: string) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        secretaria: true,  // Fetch the secretary's location data
      },
    });

    if (!usuario?.secretaria) {
      throw new Error('El usuario no existe.');
    }

    return usuario;
  } catch (error) {
    console.error('Error al obtener la secretaria:', error);
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
  
      return ubicacion;  // Return the location if it exists
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }