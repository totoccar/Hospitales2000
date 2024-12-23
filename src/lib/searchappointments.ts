import prisma from "./db";
import { getEspecialidadById } from "./searchdoctor";


const ITEMS_PER_PAGE = 6;
export async function getIdByDni(dni: string): Promise<string | null> {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: {
          numero_documento: dni,
        },
        select: {
          id: true, 
        },
      });
      if (usuario) {
        return usuario.id;
      }

      return null;
    } catch (error) {
      console.error('Error al obtener el id del usuario:', error);
      return null;
    }
  }
  
  export async function getCitasByIdPaginated(pacienteId: string, currentPage: number) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const citas = await prisma.cita.findMany({
        where: {
          paciente_id: pacienteId,
          fecha_hora: {
            gt: new Date(),
          },
        },
        orderBy: {
          fecha_hora: 'asc',
        },
        select: {
          id: true,
          fecha_hora: true,
          medico: {
            select: {
              usuario: {
                select: {
                  nombre: true,
                  apellido: true,
                },
              },
              especialidad_id: true,
            },
          },
        },
        skip: offset,  
        take: ITEMS_PER_PAGE, 
      });
  
      const citasConEspecialidad = await Promise.all(
        citas.map(async (cita) => {
          if (!cita.medico) {
            return {
              id: cita.id,
              fecha_hora: cita.fecha_hora,
              nombre: null,
              apellido: null,
              especialidad: null,
            };
          }
          const especialidad = await getEspecialidadById(cita.medico.especialidad_id);
          return {
            id: cita.id,
            fecha_hora: cita.fecha_hora,
            nombre: cita.medico.usuario.nombre,
            apellido: cita.medico.usuario.apellido,
            especialidad: especialidad,
          };
        })
      );
  
      return citasConEspecialidad;
    } catch (error) {
      console.error('Error al obtener citas:', error);
      return [];
    }
  }

  export async function deleteCitaById(citaId: string) {
    try {
        const deletedCita = await prisma.cita.delete({
            where: { id: citaId },
        });

        return {
            message: 'Cita eliminada exitosamente',
            deletedCita,
        };
    } catch (error) {
        console.error('Error al eliminar cita:', error);
        return {
            message: 'Error al eliminar la cita',
            error,
        };
    }
}

export async function getAmountCitasById(pacienteId: string) {
  try {
      const count = await prisma.cita.count({
          where: {
              paciente_id: pacienteId,
          },
      });
      const totalPages = Math.round(count / ITEMS_PER_PAGE);
      return totalPages;
  } catch (error) {
      console.error('Error al obtener la cantidad de citas:', error);
      return {
          message: 'Error al obtener la cantidad de citas',
          error,
      };
  }
}