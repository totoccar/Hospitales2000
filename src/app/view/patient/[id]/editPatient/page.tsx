import { fetchSocialWorks } from "@/src/lib/modifyUser";
import PatientEditForm from "@/src/ui/edit/edit_patient_form";
import { getUbicacionById, getUsuarioById } from "@/src/lib/getUsuarioById";

export default async function CreatePatientPage({ params }: { params: { id: string } }) {
  const id = params.id as string;
  const usuario = await getUsuarioById(id);
  let ubicacionUsuario = null;

  if (usuario.paciente) {
    ubicacionUsuario = await getUbicacionById(usuario.paciente.ubicacion_id);
  }

  // Obtener las obras sociales desde la base de datos
  const obrasSociales = await fetchSocialWorks();
  return (
    <main>
      <div className="container mx-auto py-10">
      <PatientEditForm usuario={usuario} ubicacionUsuario={ubicacionUsuario} obrasSociales={obrasSociales} />
      </div>
    </main>
  )
}






