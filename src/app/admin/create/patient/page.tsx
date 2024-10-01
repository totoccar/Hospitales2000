import { fetchSocialWorks } from "@/src/lib/createUsers";
import CreatePatientForm from "@/src/ui/create/create-patient-form";


export default async function CreatePatientPage() {
  const socialWorks = await fetchSocialWorks();
  return (
    <main>
      <div className="container mx-auto py-10">
        <CreatePatientForm socialWorks={socialWorks}/>
      </div>
    </main>
  )
}
