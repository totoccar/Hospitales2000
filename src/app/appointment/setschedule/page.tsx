'use client';

import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import MedicalScheduler from "./ui/MedicalScheduler"; // Keep this imported component

export default function AppointmentPage() {
  return (
    <MaxWidthWrapper>
      <MedicalScheduler />
    </MaxWidthWrapper>
  );
}
