import { getAppointment, getDoctorDurationById } from "@/src/lib/requestAppointment";
import ModifyRequestAppointmentForm from "../ui/ModifyRequestAppointmentForm";


export default async function ModifyAppointment({ params }: { params: { appointment_id: string } }) {
  const appointment_id = params.appointment_id;
  const appointment = await getAppointment(appointment_id);
  const appointment_duration = appointment ? await getDoctorDurationById(appointment.medico_id) : null;
  return (
    <div>
      {appointment && (
        <ModifyRequestAppointmentForm medico_id={appointment.medico_id} duracion_cita={appointment_duration ?? undefined} appointment={appointment} />
      )}
    </div>
  );
}