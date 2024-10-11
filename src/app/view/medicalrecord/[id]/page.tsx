import { Button } from "@/src/components/ui/button";
import { getFichaMedicaById, getObraSocialById, getUsuarioByFichaMedicaId } from "@/src/lib/fichaMedicaService";

export default async function Component({ params }: { params: { id: string } }) {
  const id = params.id as string;

  const { usuario, paciente } = await getUsuarioByFichaMedicaId(id);
  const fichaMedica = await getFichaMedicaById(id);

  const DisplayField = ({ label, value }: { label: string; value: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-800">
        {value}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-fondo mt-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Vista de ficha médica del paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DisplayField label="DNI" value={usuario.numero_documento} />
        <DisplayField label="Tipo de documento" value={usuario.tipo_documento} />
        <DisplayField label="Nombre" value={usuario.nombre} />
        <DisplayField label="Obra social" value={ paciente.obra_social_id ? await getObraSocialById(paciente.obra_social_id) || "": "No tiene obra social"}/>
        <DisplayField label="Apellido" value={usuario.apellido} />
      </div>
      <div className="bg-gray-200 p-4 mt-6 rounded-md shadow-inner">
        <h1 className="text-xl text-primario text-center mb-4">Ficha Médica</h1>
        <div className="grid grid-cols-1 gap-4">
          <DisplayField label="Alergias" value={ fichaMedica.alergias || "No tiene alergias"} />
          <DisplayField label="Diagnóstico" value={fichaMedica.diagnostico || "No tiene diagnóstico"} />
          <DisplayField label="Tratamientos" value={fichaMedica.tratamientos || "No tiene tratamiento"} />
          <DisplayField label="Medicamentos recetados" value={fichaMedica.medicamentos_recetados || "No tiene medicamentos recetados"} />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button variant="outline">Editar</Button>
      </div>
    </div>
  );
}

// Component for editing the medical record
type EditFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const EditField = ({ label, value, onChange }: EditFieldProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  </div>
);

export function EditComponent({ params, onSave, onCancel }: { params: { id: string }, onSave: () => void, onCancel: () => void }) {
  // State hooks and event handlers can be added to handle editing logic.
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-fondo mt-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Editar ficha médica del paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Add EditField components for each editable field */}
      </div>
      <div className="flex justify-end space-x-4 mt-6">
        <Button onClick={onSave} variant="outline">Guardar</Button>
        <Button onClick={onCancel} variant="destructive">Cancelar</Button>
      </div>
    </div>
  );
}