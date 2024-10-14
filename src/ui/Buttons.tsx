
import { Eye ,NotepadText,CalendarPlus,ArrowRight,CalendarDays, CalendarClock,SquareX  } from 'lucide-react';
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

export function AssignAppointment({ id, disabled }: { id: string; disabled?: boolean }) {
  return (
    <Link
      href={`/appointment/assign/${id}`}
      className={`rounded-md border p-2 ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
    >
      <CalendarPlus   className="w-10" />
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
export function SecretaryCalendar ({ id }: { id: string }) {
  return (
    <Link
    href={`/appointment/secretarycalendar/${id}`}
   className="rounded-md border p-2 hover:bg-gray-100"
  >
    <CalendarDays className="w-5 " />
  
  </Link>
  );
}

export function ViewSchedule ({ id }: { id: string }) {
  return (
    <Link
    href={`/appointment/setschedule/${id}`}
   className="rounded-md border p-2 hover:bg-gray-100"
  >
    <CalendarClock className="w-5 " />
  
  </Link>
  );
}
