import prisma from "./db";

export async function getUsuarioById(usuarioId: string) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        medico: true, // Get the data for doctors
      },
    });

    if (!usuario?.medico) {
      throw new Error('El usuario no es un médico o no existe.');
    }

    return usuario;  // Return the doctor data
  } catch (error) {
    console.error('Error al obtener el médico:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getEspecialidadById(especialidadId: string) {
  try {
    const especialidad = await prisma.especialidad.findUnique({
      where: { id: especialidadId },
    });

    if (!especialidad) {
      throw new Error('Especialidad no encontrada');
    }

    return especialidad.nombre;  // Return the specialty if it exists
  } catch (error) {
    console.error('Error al obtener la especialidad:', error);
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


