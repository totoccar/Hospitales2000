import { Button } from "@/components/ui/button";
import { CircleCheck } from 'lucide-react';

import { getDni } from "@/src/app/lib/actions";
import { getEspecialidadById } from "@/src/lib/getMedicoById";
import { getUsuarioByDNI, getUsuarioMedicoById } from "@/src/lib/getUsuarioById";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { get } from "http";
import Link from "next/link";

export default async function AppointmentSuccess({ params }: { params: { id: string } }) {
  const user_dni = await getDni();
  const user = await getUsuarioByDNI(user_dni);
  const doctor = await getUsuarioMedicoById(params.id);
  const especialidad = doctor.medico ? await getEspecialidadById(doctor.medico.especialidad_id) : null;

  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col m-6 bg-fondo rounded-md p-6 mt-5 text-center items-center justify-center">
      <CircleCheck className="text-acentos w-20 mb-2 h-20 text-center items-center justify-center"/>
      <h1 className="text-primario text-3xl font-bold">¡Genial {user.nombre}!</h1>
        <h1 className="text-primario text-3xl font-sans mb-4">Tu cita ha sido agendada con éxito</h1>
        <h2 className="text-secundario text-xl">El médico {doctor.nombre} {doctor.apellido} especialista en {especialidad?.toLocaleLowerCase()}  te atenderá</h2>
        <div className="bg-primario text-white p-4 rounded-lg m-4 ">
        <p className="m-2">Te hemos enviado un correo de confirmación con los detalles de la cita. <br></br>
        Si necesitas modificar o cancelar la cita, puedes hacerlo desde tu perfil.</p>
        </div>
        <Link href={"/"}>
          <Button className="bg-primario items-center">Volver al inicio</Button>
        </Link>
      </div>
      
    </MaxWidthWrapper>
  );
}