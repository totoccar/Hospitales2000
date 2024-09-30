import { Button } from "@/components/ui/button";
import { getUsuarioByFichaMedicaId, getObraSocialById, getFichaMedicaByPacienteIdAlergia,getFichaMedicaByPacienteIdDiagnostico ,
  getFichaMedicaByPacienteIdTratamiento, getFichaMedicaByPacienteIdMedicamentos
} from "@/lib/fichaMedicaService";

export default async function Component({ params }: { params: { id: string } }) {
 /*const id = params.id as string;

  const usuario = await getUsuarioByFichaMedicaId(id);
  */
  const id = params.id as string;

  // Obtenemos el usuario y el paciente
  const { usuario, paciente } = await getUsuarioByFichaMedicaId(id);
  
  const DisplayField = ({ label, value }: { label: string; value: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-800">
        {value}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Vista de ficha médica del paciente</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DisplayField label="DNI" value={usuario.numero_documento} />
        <DisplayField label="Tipo de documento" value={usuario.tipo_documento} />
        <DisplayField label="Nombre" value={usuario.nombre} />
        <DisplayField label="Apellido" value={usuario.apellido} />
        <DisplayField label="Obra social" value={ paciente?.obra_social_id ? await getObraSocialById(paciente.obra_social_id) || "": "No tiene obra social"}/>
        <DisplayField label="Alergias" value={ paciente?.ficha_medica_id ? await getFichaMedicaByPacienteIdAlergia(paciente.ficha_medica_id) || "": "no tiene alergias"} />
        <DisplayField label="Diagnóstico" value={paciente?.ficha_medica_id ? await getFichaMedicaByPacienteIdDiagnostico(paciente.ficha_medica_id) || "": "no tiene diagnostico"} />
        <DisplayField label="Tratamientos" value={paciente?.ficha_medica_id ? await getFichaMedicaByPacienteIdTratamiento(paciente.ficha_medica_id) || "": "no tiene tratamiento"} />
        <DisplayField label="Medicamentos recetados" value={paciente?.ficha_medica_id ? await getFichaMedicaByPacienteIdMedicamentos(paciente.ficha_medica_id) || "": "no tiene medicamento recetados"} />
        
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
