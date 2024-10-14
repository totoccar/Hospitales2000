// src/components/DatosPaciente.tsx
import { getObraSocialById } from "@/src/lib/fichaMedicaService";

type UsuarioProps = {
  usuario: {
    numero_documento: string;
    tipo_documento: string;
    nombre: string;
    apellido: string;
  };
  paciente: {
    obra_social_id: string | null;
  };
};

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-800">
      {value}
    </div>
  </div>
);

export default async function DatosPaciente({ usuario, paciente }: UsuarioProps) {
  const obraSocial = paciente.obra_social_id
    ? await getObraSocialById(paciente.obra_social_id) || ""
    : "No tiene obra social";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DisplayField label="DNI" value={usuario.numero_documento} />
      <DisplayField label="Tipo de documento" value={usuario.tipo_documento} />
      <DisplayField label="Nombre" value={usuario.nombre} />
      <DisplayField label="Obra social" value={obraSocial} />
      <DisplayField label="Apellido" value={usuario.apellido} />
    </div>
  );
}
