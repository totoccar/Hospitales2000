import { Button } from "@/components/ui/button";
import { getUsuarioById, getUsuarioMedicoById } from "@/src/lib/getUsuarioById";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

interface Props {
    params: {
      patient_id: string;
      medico_id: string;
    };
  }

export default async function SuccesAppointmentSet({ params }: Props) {
    const { patient_id, medico_id } = params;
    const paciente = await getUsuarioById(patient_id);
    const medico = await getUsuarioMedicoById(medico_id);
    return (
        <MaxWidthWrapper>
        <div className=" flex flex-col m-6 bg-fondo rounded-md p-6 mt-5 text-center items-center justify-center">
        <CircleCheck className="text-acentos w-20 mb-2 h-20 text-center items-center justify-center"/>
        <h1 className="text-primario text-3xl font-bold">¡Genial! El paciente {paciente.nombre},</h1>
          <h1 className="text-primario text-3xl font-sans mb-4">Tiene una nueva cita agendanda con éxito</h1>
          <h2 className="text-secundario text-xl">El médico {medico.nombre} {medico.apellido} lo atenderá</h2>
          <div className="bg-primario text-white p-4 rounded-lg m-4 ">
          <p className="m-2">Recuerda agendar esta fecha en tu calendario para no perderla. <br></br>
          Si necesitas modificar o cancelar la cita, puedes hacerlo desde tu perfil.</p>
          </div>
          <Link href={"/"}>
            <Button className="bg-primario items-center">Volver al inicio</Button>
          </Link>
        </div>
        
      </MaxWidthWrapper>
    );
}