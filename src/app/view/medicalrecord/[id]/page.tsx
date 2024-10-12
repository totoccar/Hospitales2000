import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { getFichaMedicaById, getUsuarioByFichaMedicaId } from "@/src/lib/fichaMedicaService";
import FichaMedica from "./ui/fichaMedica";
import DatosPaciente from "./ui/datosPaciente";

export default async function Component({ params }: { params: { id: string } }) {
  const id = params.id as string;

  const { usuario, paciente } = await getUsuarioByFichaMedicaId(id);
  const fichaMedica = await getFichaMedicaById(id);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-fondo mt-6 rounded-lg shadow-md">
      <MaxWidthWrapper>
      <h2 className="text-2xl font-bold mb-6 text-center">Vista de ficha médica del paciente</h2>
      
      <DatosPaciente usuario={usuario} paciente={paciente} />
      
      <FichaMedica fichaMedica={fichaMedica} />
      </MaxWidthWrapper>
      
    </div>
  );
}
