
import SecretaryEditForm from "@/src/ui/edit/edit_secretary_form";
import { getUbicacionById, getUsuarioById } from "@/src/lib/getSecretariaById";

export default async function CreatePatientPage({ params }: { params: { id: string } }) {
  const id = params.id as string;
  const usuario = await getUsuarioById(id);
  let ubicacionUsuario = null;

  if (usuario.secretaria) {
    ubicacionUsuario = await getUbicacionById(usuario.secretaria.ubicacion_id);
  }

  return (
    <main>
      <div className="container mx-auto py-10">
      <SecretaryEditForm usuario={usuario} ubicacionUsuario={ubicacionUsuario} />
      </div>
    </main>
  )
}
 





