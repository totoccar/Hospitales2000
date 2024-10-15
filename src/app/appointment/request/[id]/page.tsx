import { getDni } from "@/src/app/lib/actions";
import RequestAppointmentForm from "../../ui/RequestAppointment-Form";
import { getUsuarioByDNI } from "@/src/lib/getUsuarioById";
import { getAppointmentDuration } from "@/src/lib/requestAppointment";


export default async function AppointmentBooking({ params,}: {params: { id: string };}) {
  
  const user_dni = await getDni();
  let user;
  try{
    user = await getUsuarioByDNI(user_dni);
  }
  catch (error){
    console.error('Error al obtener el usuario:', error);
    throw error;
  }

  const duracion_cita = (await getAppointmentDuration(params.id)) ?? undefined;

  return (
    <>
      <RequestAppointmentForm medico_id={params.id} paciente_id={user.id} duracion_cita={duracion_cita}/>  
    </>
  );
}
