import { fetchSpecialties } from '@/lib/actions';
import CreateDoctorForm  from '@/ui/create/create-doctor-form';

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
