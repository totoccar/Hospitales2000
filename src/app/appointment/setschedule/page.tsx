import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import MedicalScheduler from "./ui/MedicalScheduler"; // Keep this imported component
import { getRole } from "../../lib/actions";

export default async function AppointmentPage() {
  const userRole = await getRole();
  return (
    <MaxWidthWrapper>
      <MedicalScheduler userRole={userRole} />
    </MaxWidthWrapper>
  );
}
  