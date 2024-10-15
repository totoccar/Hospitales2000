import { Button } from "@/src/components/ui/button";
import { getUbicacionById, getUsuarioById } from "@/src/lib/getSecretariaById";
import ClientButtons from "@/src/components/temp/deleteSecretaryButton";
import { getRole } from "@/src/app/lib/actions";

export default async function Component({ params }: { params: { id: string } }) {

  let disabled;

  //Get user role.
  const role = await getRole();
  const mapRoles = {
    'Paciente': 'Paciente',
    'Medico': 'Medico',
    'Secretaria': 'Secretaria',
    'Administrador': 'Administrador',
  }
  if (role != mapRoles.Administrador) {
    disabled = true;
  } else {
    disabled = false;
  }

  const id = params.id as string;
  const usuario = await getUsuarioById(id);
  let ubicacionUsuario = null;
  if (usuario.secretaria) {
    ubicacionUsuario = await getUbicacionById(usuario.secretaria.ubicacion_id);
  }

  const DisplayField = ({ label, value }: { label: string; value: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-800">
        {value}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-6 mt-5 bg-fondo rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Vista de datos personales de la secretaria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DisplayField label="Tipo de documento" value={usuario.tipo_documento} />
        <DisplayField label="DNI" value={usuario.numero_documento} />
        <DisplayField label="Nombre" value={usuario.nombre} />
        <DisplayField label="Apellido" value={usuario.apellido} />
        <DisplayField label="Número de teléfono" value={usuario.secretaria?.numero_telefono || ""} />
        <DisplayField label="Calle" value={ubicacionUsuario?.calle || ""} />
        <DisplayField label="Número" value={ubicacionUsuario?.numero || ""} />
        <DisplayField label="Código postal" value={ubicacionUsuario?.codigo_postal || ""} />
        <DisplayField label="Ciudad" value={ubicacionUsuario?.ciudad || ""} />
        <DisplayField label="Provincia" value={ubicacionUsuario?.provincia || ""} />
        <DisplayField label="Correo electrónico" value={usuario.correo_electronico} />
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <ClientButtons id={id} disabled={disabled} />
      </div>
      <p className="text-sm text-gray-500 mt-4">Solo disponible para rol de administrador</p>
    </div>
  );
}

