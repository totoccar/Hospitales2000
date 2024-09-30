import { obtenerObrasSociales } from '@/lib/actions';
import CreatePatientForm from '@/ui/create/create-patient-form';

export default async function CreatePatientPage() {
  const obrasSociales = await obtenerObrasSociales();
  return (
    <main>
      <div className="container mx-auto py-10">
        <CreatePatientForm obrasSociales={obrasSociales}/>
      </div>
    </main>
  )
}
