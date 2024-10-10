import { getCitasById } from '@/src/lib/searchappointments';
import DeleteAppointment from './DeleteAppointment';

export default async function Table({
  pacienteId,
  currentPage,
}: {
  pacienteId: string | null;
  currentPage: number;
}) {
  // Mantiene el componente como "async" para obtener los datos desde el servidor
  const citas = await getCitasById(pacienteId ?? "");

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* Para pantallas pequeñas */}
          <div className="md:hidden">
            {citas?.map((cita, index) => (
              <div key={index} className="mb-2 w-full rounded-md bg-fondo p-4 border-b pb-4">
                <div className="flex justify-between bg-fondo p-2 items-left">
                  <div>
                    <p className="text-xl text-gray-500">Dia: {new Date(cita.fecha_hora).toLocaleDateString()}</p>
                    <p className="text-xl text-gray-500">Hora: {new Date(cita.fecha_hora).toLocaleTimeString()}</p>
                    <p className="text-xl text-gray-500">
                      Medico: {cita.nombre} {cita.apellido} ({cita.especialidad})
                    </p>
                  </div>
                  <div className="flex flex-col items-right">
                    
                    <DeleteAppointment params={{ id: cita.id }}/>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabla para pantallas grandes */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-lg font-semibold text-gray-700">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium sm:pl-4 text-center">Día</th>
                <th scope="col" className="px-3 py-3 font-medium text-center">Horario</th>
                <th scope="col" className="px-3 py-3 font-medium text-center">Médico</th>
                <th scope="col" className="px-3 py-3 font-medium text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white text-sm">
              {citas?.map((cita, index) => (
                <tr
                  key={index}
                  className="w-full border-b border-gray-300 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  {/* Día */}
                  <td className="whitespace-nowrap py-3 pl-4 pr-3 text-center">
                    <div className="flex items-center justify-center">
                      <p>{new Date(cita.fecha_hora).toLocaleDateString()}</p>
                    </div>
                  </td>

                  {/* Horario */}
                  <td className="whitespace-nowrap px-3 py-3 text-center">
                    {new Date(cita.fecha_hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>

                  {/* Médico */}
                  <td className="whitespace-nowrap px-3 py-3 text-center">
                    {cita.nombre} {cita.apellido} <span className="text-gray-500">({cita.especialidad})</span>
                  </td>

                  {/* Acciones */}
                  <td className="py-3 px-3 text-center">
                    <DeleteAppointment params={{ id: cita.id }}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
