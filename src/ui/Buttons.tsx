
import { PencilIcon } from 'lucide-react';
import Link from 'next/link';

export function ViewPatient({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}