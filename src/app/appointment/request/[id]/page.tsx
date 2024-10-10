import { getDni } from "@/src/app/lib/actions";
import RequestAppointmentForm from "../../ui/RequestAppointment-Form";
import { getUsuarioById } from "@/src/lib/getMedicoById";

export default async function AppointmentBooking({ params,}: {params: { id: string };}) {
  
  const user_dni = await getDni();
  const user = await getUsuarioById(user_dni);

  return (
    <>
      <RequestAppointmentForm doctor_id={params.id} patient_id={user.id}/>  
    </>
  );
}
