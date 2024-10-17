
import { getObraSocialById, getUbicacionById, getUsuarioById } from "@/src/lib/getUsuarioById";
//import ClientButtons from "@/src/components/temp/deletePatientButton";
import ClientButtons from "@/src/components/temp/modifyPatientButton";
import { getRole } from "@/src/app/lib/actions";
import Link from "next/link";

export default async function Component({ params }: { params: { id: string } }) {

  let disabled;
  let disabledEdit;
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
  if (role != mapRoles.Secretaria) {
    disabledEdit = true;
  } else {
    disabledEdit = false;
  }
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0'); // Asegura dos dígitos para el día
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses en JavaScript son de 0 a 11, así que sumamos 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const id = params.id as string;
  const usuario = await getUsuarioById(id);
  let ubicacionUsuario = null;
  if (usuario.paciente) {
    ubicacionUsuario = await getUbicacionById(usuario.paciente.ubicacion_id);
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
      <h2 className="text-2xl font-bold mb-6 text-center">Vista de datos personales de paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DisplayField label="Tipo de documento" value={usuario.tipo_documento} />
        <DisplayField label="Número de documento" value={usuario.numero_documento} />
        <DisplayField label="Nombre" value={usuario.nombre} />
        <DisplayField label="Apellido" value={usuario.apellido} />
        <DisplayField label="Fecha de nacimiento" value={usuario.paciente?.fecha_nacimiento ? formatDate(usuario.paciente.fecha_nacimiento) : ""} />
        <DisplayField label="Número de teléfono" value={usuario.paciente?.numero_telefono || ""} />
        <DisplayField label="Lugar de nacimiento" value={usuario.paciente?.lugar_nacimiento || ""} />
        <DisplayField label="Contacto de emergencia" value={usuario.paciente?.contacto_emergencia || ""} />
        <DisplayField label="Calle" value={ubicacionUsuario?.calle || ""} />
        <DisplayField label="Número" value={ubicacionUsuario?.numero || ""} />
        <DisplayField label="Código postal" value={ubicacionUsuario?.codigo_postal || ""} />
        <DisplayField label="Ciudad" value={ubicacionUsuario?.ciudad || ""} />
        <DisplayField label="Provincia" value={ubicacionUsuario?.provincia || ""} />
        <DisplayField label="Correo electrónico" value={usuario.correo_electronico} />
        <DisplayField label="Obra social" value={usuario.paciente?.obra_social_id ? await getObraSocialById(usuario.paciente.obra_social_id) || "" : "No tiene obra social"} />
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <Link href={`/view/patient/${id}/editPatient`}>
          <ClientButtons id={id} disabledEdit={disabledEdit} />
        </Link>
      </div>
    </div>
  );
}