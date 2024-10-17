import MedicalSchedulerWrapper from "../ui/MedicalSchedulerWrapper";

export default function AppointmentPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <MedicalSchedulerWrapper selectedDoctorId={id} />
  );
}
