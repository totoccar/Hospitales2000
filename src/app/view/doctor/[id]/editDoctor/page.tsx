import { fetchSpecialties } from "@/src/lib/modifyUser";
import DoctorEditForm from "@/src/ui/edit/edit_doctor_form";
import { getUbicacionById, getUsuarioById } from "@/src/lib/getMedicoById";

export default async function CreateDoctorPage({ params }: { params: { id: string } }) {
  const id = params.id as string;
  const usuario = await getUsuarioById(id);
  let ubicacionUsuario = null;

  if (usuario.medico) {
    ubicacionUsuario = await getUbicacionById(usuario.medico.ubicacion_id);
  }

 
  const Especialidades = await fetchSpecialties();
  return (
    <main>
      <div className="container mx-auto py-10">
      <DoctorEditForm usuario={usuario} ubicacionUsuario={ubicacionUsuario} Especialidades={Especialidades} />
      </div>
    </main>
  )
}