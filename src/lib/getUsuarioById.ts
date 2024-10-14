

import prisma from "./db";

export async function getUsuarioById(usuarioId: string) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        paciente: true, 
      },
    });

    if (!usuario?.paciente) {
      throw new Error('El usuario no es un paciente o no existe.');
    }

    return usuario; 
  } catch (error) {
    console.error('Error al obtener el paciente:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUsuarioMedicoById(usuarioId: string) {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
      include: {
        medico: true, 
      },
    });

    if (!usuario?.medico) {
      throw new Error('El usuario no es un medico o no existe.');
    }

    return usuario; 
  } catch (error) {
    console.error('Error al obtener el medico:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUsuarioByDNI(DNI: string) {
  try{
    const usuario = await prisma.usuario.findUnique({
      where: { numero_documento: DNI },
      include: {
        paciente: true,
      },
    });

    if (!usuario?.paciente) {
      throw new Error('El usuario no es un paciente o no existe.');
    }

    return usuario;
  }
  catch (error){
    console.error('Error al obtener el medico:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getMedicoByDNI(DNI: string) {
  try{
    const usuario = await prisma.usuario.findUnique({
      where: { numero_documento: DNI },
      include: {
        medico: true,
      },
    });

    if (!usuario?.medico) {
      throw new Error('El usuario no es un medico o no existe.');
    }

    return usuario;
  }
  catch (error){
    console.error('Error al obtener el medico:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserNameByDNI(numero_documento: string) {
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { numero_documento },
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    return usuario.nombre + ' ' + usuario.apellido;  // Retorna el nombre completo del usuario
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
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

    return ubicacion; 
  } catch (error) {
    console.error('Error al obtener la ubicación:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserNameById(id: string) {
  try {
    const usuario = await prisma.usuario.findFirst({
      where: { id: id },
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    return usuario.nombre + ' ' + usuario.apellido;  
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}