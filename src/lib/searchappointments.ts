import { devNull } from "node:os";
import prisma from "./db";
import { TipoDocumentoEnum } from "./definitions";
import { getEspecialidadById } from "./searchdoctor";



export async function getIdByDni(dni: string): Promise<string | null> {
    try {
      // Consulta en la tabla Usuario buscando por numero_documento
      const usuario = await prisma.usuario.findUnique({
        where: {
          numero_documento: dni,
        },
        select: {
          id: true, // Seleccionamos solo el campo `id`
        },
      });
  
      // Si el usuario fue encontrado, retornamos el `id`
      if (usuario) {
        return usuario.id;
      }
  
      // Si no se encuentra el usuario, retornamos null
      return null;
    } catch (error) {
      console.error('Error al obtener el id del usuario:', error);
      return null; // Opcional: puedes lanzar una excepción en vez de retornar null
    }
  }
  

  export async function getCitasById(pacienteId: string) {
    try {
      // Obtener citas del paciente que son a futuro
      const citas = await prisma.cita.findMany({
        where: {
          paciente_id: pacienteId,
          fecha_hora: {
            gt: new Date(), // Solo citas después del momento actual
          },
        },
        select: {
          fecha_hora: true, // Fecha y hora de la cita
          medico: {
            select: {
              usuario: {
                select: {
                  nombre: true,
                  apellido: true,
                },
              },
              especialidad_id: true, // Obtener el id del médico
            },
          },
        },
      });
  
      // Iterar sobre las citas y añadir la especialidad del médico
      const citasConEspecialidad = await Promise.all(
        citas.map(async (cita) => {
          const especialidad = await getEspecialidadById(cita.medico.especialidad_id); // Obtener la especialidad del médico
          return {
            fecha_hora: cita.fecha_hora,
            nombre: cita.medico.usuario.nombre,
            apellido: cita.medico.usuario.apellido,
            especialidad: especialidad, // Añadir la especialidad a la respuesta
          };
        })
      );
  
      return citasConEspecialidad;
    } catch (error) {
      console.error('Error al obtener citas:', error);
      return [];
    }
  }
  