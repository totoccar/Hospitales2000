import prisma from "./db";

export async function getUsuarioByFichaMedicaId(fichaMedicaId: string) {
    try {
      const fichaMedica = await prisma.fichaMedica.findUnique({
        where: { id: fichaMedicaId },
        include: {
          paciente: {
            include: {
              usuario: true,  
              obra_social: true, 
            },
          },
        },
      });
  
      if (!fichaMedica || !fichaMedica.paciente) {
        throw new Error('No se encontró la ficha médica o el paciente.');
      }
  
      return {
        usuario: fichaMedica.paciente.usuario, 
        paciente: fichaMedica.paciente, 
      };
    } catch (error) {
      console.error('Error al obtener el usuario por ficha médica ID:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  
export async function getFichaMedicaById(fichaMedicaId: string) {
  try {
    // Busca la ficha médica basada en su id
    const fichaMedica = await prisma.fichaMedica.findUnique({
      where: { id: fichaMedicaId }, // Busca por el ID de la ficha médica
    });

    if (!fichaMedica) {
      throw new Error('Ficha médica no encontrada');
    }

    return fichaMedica; // Retornamos la ficha médica encontrada
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la ficha médica');
  } finally {
    await prisma.$disconnect(); // Cierra la conexión
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

    return obraSocial.nombre; 
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
  
      return fichaMedica.alergias; 
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
  
      return fichaMedica.diagnostico;
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
  
      return fichaMedica.tratamientos; 
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
  
      return fichaMedica.medicamentos_recetados;
    } catch (error) {
      console.error('Error al obtener la ficha médica:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }

  export async function updateFichaMedica(id: string, data: { 
    alergias: string;
    diagnostico: string;
    tratamientos: string;
    medicamentos_recetados: string;
  }) {
    try {
      if (!id) {
        throw new Error("El ID es requerido para actualizar la ficha médica.");
      }
  
      const updatedFichaMedica = await prisma.fichaMedica.update({
        where: { id },
        data: {
          alergias: data.alergias,
          diagnostico: data.diagnostico,
          tratamientos: data.tratamientos,
          medicamentos_recetados: data.medicamentos_recetados,
        },
      });
  
      return updatedFichaMedica;
    } catch (error) {
      console.error("Error al actualizar la ficha médica:", error);
      throw new Error("Error al actualizar la ficha médica");
    }
  }  