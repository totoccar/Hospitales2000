"use client"

import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { getTurnosByMedicoId } from "@/src/lib/getMedicoById";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default async  function SecCalendar({ params }: { params: { id: string } }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [turnos, setTurnos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null); 
  
  // const handleDateSelect = async (date: Date) => {
  //   setSelectedDate(date);
  //   setLoading(true); 
  //   setError(null); 

  //   try {
  //     const fetchedTurnos = await getTurnosByMedicoId(params.id, date);
  //     setTurnos(fetchedTurnos);
  //   } catch (err) {
  //     setError("Error al cargar los turnos.");
  //   } finally {
  //     setLoading(false); 
  //   }
  // };

  
 
  // return (
  //   <MaxWidthWrapper>
  //   <div className="m-6 bg-fondo rounded-md p-6 mt-5">
  //     <h2 className="text-xl font-bold mb-2">Selecciona el día y el horario que desees</h2>
  //     <div className="md:flex flex-row gap-4">
  //       <div className="flex-1">
  //         <Calendar 
  //           selected={selectedDate}
  //           onSelect={handleDateSelect} 
  //         />
  //       </div>
  //       <div className="flex-1">
  //         {loading ? (
  //           <p>Cargando turnos...</p>
  //         ) : error ? (
  //           <p className="text-red-500">{error}</p>
  //         ) : turnos.length > 0 ? (
  //           <ul>
  //             {turnos.map((turno) => (
  //               <li key={turno.id} className="p-2 bg-neutral-100 mb-2 rounded-md">
  //                 <p><strong>Hora:</strong> {turno.hora}</p>
  //                 <p><strong>Paciente:</strong> {turno.paciente}</p>
  //               </li>
  //             ))}
  //           </ul>
  //         ) : selectedDate ? (
  //           <p>No hay turnos disponibles para este día.</p>
  //         ) : (
  //           <p>Selecciona un día para ver los turnos disponibles.</p>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // </MaxWidthWrapper>
);
  
}
