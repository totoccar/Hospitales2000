
import { getAppointmentDuration } from '@/src/lib/requestAppointment';
import RequestAppointmentForm from '../../../ui/RequestAppointment-Form';
import { getUsuarioById, getUsuarioMedicoById } from '@/src/lib/getUsuarioById';
import AssignAppointmentForm from '../../../assign/ui/AssignAppointment-Form';

interface Props {
  params: {
    patient_id: string;
    medico_id: string;
  };
}

export default async function PatientDoctorPage ({ params }: Props)  {
  const { patient_id, medico_id } = params;
  const duracion_cita = (await getAppointmentDuration(params.medico_id)) ?? undefined;
  const paciente = await getUsuarioById(patient_id);
  const medico = await getUsuarioMedicoById(medico_id);
  return (
    <div className='m-2 p-2 text-center'>
      <div className=''>
        <h1>Estas agendando una cita medica para el paciente: {paciente.nombre} {paciente.apellido}</h1>
        <h1>Con el medico: {medico.nombre} {medico.apellido}</h1>
      </div>
      <AssignAppointmentForm medico_id={params.medico_id} paciente_id={params.patient_id} duracion_cita={duracion_cita}/>  
    </div>
  );
};


