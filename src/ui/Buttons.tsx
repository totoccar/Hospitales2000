
import { Eye ,NotepadText  } from 'lucide-react';
import Link from 'next/link';

export function ViewUser({ id }: { id: string }) {
  return (
    <Link
      href={`/view/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Eye  className="w-5" />
    </Link>
  );
}

export function ViewMedicalRecord({ id, disabled }: { id: string; disabled?: boolean }) {
  return (
    <Link
      href={disabled ? '#' : `/view/${id}`}
      className={`rounded-md border p-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
    >
      <NotepadText className="w-5" />
    </Link>
  );
}