import DoctorSelection from "../ui/DoctorSelection";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div>
        <DoctorSelection searchParams={{ patient_id: params.id }} />
         </div>
  );
}