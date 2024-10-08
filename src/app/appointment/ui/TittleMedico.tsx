import { getEspecialidadById, getUsuarioById } from "@/src/lib/getMedicoById"

export default async function TituloMedico({ id }: { id: string }) {
    const name = await getDoctorNameAndSpecialty(id)
    return(    
    <>
        <p className="text-sm">
            Estás viendo los días disponibles del profesional: {name.name}
        </p>
        <p className="text-sm">
            Especialidad: {name.specialty}
        </p>
      </>
      )

}

async function getDoctorNameAndSpecialty(id: string) {
    try {
      const doctor = await getUsuarioById(id)
      return {
        name: `${doctor.nombre} ${doctor.apellido}`,
        specialty: doctor.medico ? await getEspecialidadById(doctor.medico.especialidad_id) : "N/A",
      }
    } catch (error) {
      console.error("Error al obtener el médico:", error)
      throw error
    }
  }
  