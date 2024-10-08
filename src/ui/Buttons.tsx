
import { Eye ,NotepadText,CalendarPlus,ArrowRight    } from 'lucide-react';
import Link from 'next/link';

export function ViewPatient({ id }: { id: string }) {
  return (
    <Link
      href={`/view/patient/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Eye  className="w-5" />
    </Link>
  );
}

export function ViewDoctor({ id }: { id: string }) {
  return (
    <Link
      href={`/view/doctor/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Eye  className="w-5" />
    </Link>
  );
}

export function RequestAppointment({ id }: { id: string }) {
  return (
    <Link
      href={`/appointment/request/${id}`}
      className="flex rounded-md border p-2 w-20 items-center justify-center hover:bg-gray-100"
    >
      <CalendarPlus   className="w-10" />
      <ArrowRight className="w-10" />
    </Link>
  );
}

export function ViewSecretary({ id }: { id: string }) {
  return (
    <Link
      href={`/view/secretary/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Eye  className="w-5" />
    </Link>
  );
}


export function ViewMedicalRecord({ id, disabled }: { id: string; disabled?: boolean }) {
  return (
    <Link
      href={`/view/medicalrecord/${id}`}
      className={`rounded-md border p-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
    >
      <NotepadText className="w-5" />
    </Link>
  );
}