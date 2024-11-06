import { Button } from "@/components/ui/button";
import { Bold, CircleCheck } from 'lucide-react';

import { getDni } from "@/src/app/lib/actions";
import { getEspecialidadById } from "@/src/lib/getMedicoById";
import { getUsuarioByDNI, getUsuarioById, getUsuarioMedicoById } from "@/src/lib/getUsuarioById";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import Link from "next/link";
import { getAppointment } from "@/src/lib/requestAppointment";

export default async function AppointmentSuccess({ params }: { params: { id: string } }) {
  const appointment = await getAppointment(params.id);
  const user = appointment ? await getUsuarioById(appointment.paciente_id) : null;
  const doctor = appointment?.medico_id ? await getUsuarioMedicoById(appointment.medico_id) : null;
  const especialidad = doctor?.medico ? await getEspecialidadById(doctor.medico.especialidad_id) : null;
  const doctorName = doctor ? `${doctor.nombre} ${doctor.apellido}` : '';

  async function sendEmail(){
    return await fetch("api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user?.correo_electronico, doctorName: doctorName, especialidad: especialidad, fecha: appointment?.fecha_hora }),
    });
  }

  const response = sendEmail();

  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col m-6 bg-fondo rounded-md p-6 mt-5 text-center items-center justify-center">
      <CircleCheck className="text-acentos w-20 mb-2 h-20 text-center items-center justify-center"/>
      <h1 className="text-primario text-3xl font-bold">¡Genial!</h1>
        <h1 className="text-primario text-3xl font-sans mb-4">La cita ha sido modificada con éxito</h1>
        <div className="bg-primario text-white p-4 rounded-lg m-4 ">
        <p className="m-2">La fecha y hora de la cita es:</p>
        <h2 className="text-white font-bold text-xl">
          {appointment?.fecha_hora ? `Dia: ${appointment.fecha_hora.toLocaleDateString()} y Hora: ${new Date(appointment.fecha_hora.getTime() + 3 * 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} hs` : ''}
        </h2>
        if(response.ok) {
          <p className="m-2">Se ha enviado un correo a {user?.correo_electronico} con los detalles de la cita</p>
        }
        else{
          <p className="m-2">Hubo un error al enviar el correo a {user?.correo_electronico}</p>
        }
        </div>
        <Link href={"/"}>
          <Button className="bg-primario items-center">Volver al inicio</Button>
        </Link>
      </div>
      
    </MaxWidthWrapper>
  );
}