import { fetchSpecialties } from "@/src/lib/createUsers";
import CreateDoctorForm from "@/src/ui/create/create-doctor-form";


export default async function CreatePatientPage() {
  const specialties = await fetchSpecialties();
  return (
    <main>
      <div className="container mx-auto py-10">
        <CreateDoctorForm specialties={specialties} />
      </div>
    </main>
  )
}
