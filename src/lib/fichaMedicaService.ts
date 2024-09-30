import prisma from "./db";

// Función para obtener al usuario y paciente por ficha médica ID
export async function getUsuarioByFichaMedicaId(fichaMedicaId: string) {
    try {
      const fichaMedica = await prisma.fichaMedica.findUnique({
        where: { id: fichaMedicaId },
        include: {
          paciente: {
            include: {
              usuario: true,  // Incluir datos del usuario relacionado
              obra_social: true,  // Incluir la obra social del paciente
            },
          },
        },
      });
  
      if (!fichaMedica || !fichaMedica.paciente) {
        throw new Error('No se encontró la ficha médica o el paciente.');
      }
  
      return {
        usuario: fichaMedica.paciente.usuario,  // Retornamos el usuario
        paciente: fichaMedica.paciente,  // Retornamos el paciente
      };
    } catch (error) {
      console.error('Error al obtener el usuario por ficha médica ID:', error);
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

export async function getFichaMedicaByPacienteIdAlergia(pacienteId: string) {
    try {
      const fichaMedica = await prisma.fichaMedica.findUnique({
        where: { 
            id: pacienteId 
        },
      });
  
      if (!fichaMedica) {
        throw new Error('Ficha médica no encontrada');
      }
  
      return fichaMedica.alergias;  // Retorna la ficha médica si existe
    } catch (error) {
      console.error('Error al obtener la ficha médica:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
  export async function getFichaMedicaByPacienteIdDiagnostico(pacienteId: string) {
    try {
      const fichaMedica = await prisma.fichaMedica.findUnique({
        where: { 
            id: pacienteId 
        },
      });
  
      if (!fichaMedica) {
        throw new Error('Ficha médica no encontrada');
      }
  
      return fichaMedica.diagnostico;  // Retorna la ficha médica si existe
    } catch (error) {
      console.error('Error al obtener la ficha médica:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  export async function getFichaMedicaByPacienteIdTratamiento(pacienteId: string) {
    try {
      const fichaMedica = await prisma.fichaMedica.findUnique({
        where: { 
            id: pacienteId 
        },
      });
  
      if (!fichaMedica) {
        throw new Error('Ficha médica no encontrada');
      }
  
      return fichaMedica.tratamientos;  // Retorna la ficha médica si existe
    } catch (error) {
      console.error('Error al obtener la ficha médica:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  export async function getFichaMedicaByPacienteIdMedicamentos(pacienteId: string) {
    try {
      const fichaMedica = await prisma.fichaMedica.findUnique({
        where: { 
            id: pacienteId 
        },
      });
  
      if (!fichaMedica) {
        throw new Error('Ficha médica no encontrada');
      }
  
      return fichaMedica.medicamentos_recetados;  // Retorna la ficha médica si existe
    } catch (error) {
      console.error('Error al obtener la ficha médica:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }