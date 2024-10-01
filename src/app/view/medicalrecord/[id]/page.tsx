import { Button } from "@/components/ui/button";
import { getUsuarioByFichaMedicaId, getObraSocialById,getFichaMedicaById} from "@/lib/fichaMedicaService";

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
        <DisplayField label="Apellido" value={usuario.apellido} />
        <DisplayField label="Obra social" value={ paciente.obra_social_id ? await getObraSocialById(paciente.obra_social_id) || "": "No tiene obra social"}/>
      </div>
       <div className="bg-gray-200 p-2 rounded-sm">
       <h1 className="text-xl text-primario text-center m-2 mb-4">Ficha Medica</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DisplayField label="Alergias" value={ fichaMedica.alergias|| "no tiene alergias"} />
          <DisplayField label="Diagnóstico" value={fichaMedica.diagnostico || "no tiene diagnostico"} />
          <DisplayField label="Tratamientos" value={fichaMedica.tratamientos|| "no tiene tratamiento"} />
          <DisplayField label="Medicamentos recetados" value={fichaMedica.medicamentos_recetados|| "no tiene medicamento recetados"} />
        </div>
       </div>
        
      
      <div className="flex justify-between space-x-4 mt-6">
        <div className="flex-grow">
          <Button variant="outline">Editar</Button>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">Guardar </Button>
          <Button variant="destructive">Cancelar</Button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">Solo disponible para rol de Medico</p>
    </div>
  );
}
