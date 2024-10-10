
import { Button } from '@react-email/components';
import { Eye ,NotepadText, SquareX, Trash, Trash2  } from 'lucide-react';
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

export function DeleteAppointment( {id,disabled} : {id: string; disabled?:boolean }){
  return(
    <Link href={`/appointment/cancel/${id}`} 
    className={`rounded-md border p-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-red-100'}`}
    >
      <SquareX style={{ color: '#e85454', width: '32px', height: '32px' }} />
    </Link>
  )
}