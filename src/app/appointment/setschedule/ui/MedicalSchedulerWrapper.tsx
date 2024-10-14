"use client";

import { useEffect, useState } from "react";
import MedicalScheduler from "./MedicalScheduler";
import { getRole } from "../../../lib/actions";

export default function MedicalSchedulerWrapper({
  selectedDoctorId,
}: {
  selectedDoctorId?: string;
}) {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRole() {
      const role = await getRole();
      setUserRole(role);
    }
    fetchRole();
  }, []);

  if (!userRole) {
    return null;
  }

  return (
    <MedicalScheduler userRole={userRole} selectedDoctorId={selectedDoctorId} />
  );
}
