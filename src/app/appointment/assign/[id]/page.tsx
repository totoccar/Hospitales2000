import DoctorSelection from "../ui/DoctorSelection";


export default async function AppointmentBooking({ params }: { params: { id: string } }) {

  return (
    <div className='text-black'>
      <DoctorSelection searchParams={{ patient_id: params.id }} />
    </div>
  );
}
