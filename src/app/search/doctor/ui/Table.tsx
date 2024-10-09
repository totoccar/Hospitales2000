import { getEspecialidadById } from '@/src/lib/getMedicoById';
import { findDoctorsByQuery } from '@/src/lib/searchdoctor';
import { obtenerIniciales } from '@/src/lib/utils';
import { SecretaryCalendar, ViewDoctor } from '@/src/ui/Buttons';
import { TipoDocumentoEnum } from '@prisma/client';

export default async function Table({
  dni,
  apellido,
  numero_matricula,
  tipoDocumento,
  currentPage,
}: {
  dni?: string;
  apellido?: string;
  numero_matricula?: string;
  tipoDocumento?: TipoDocumentoEnum;
  currentPage: number;
}) {
  const doctors = await findDoctorsByQuery({
    dni: dni || '',
    apellido: apellido || '',
    tipoDocumento: tipoDocumento || TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
    numero_matricula: numero_matricula || '',
    currentPage,
  });

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {doctors?.map((doctor) => (
              <div key={doctor.usuario.id} className="mb-2 w-full rounded-md bg-fondo p-4 border-b pb-4">
                <div className="flex justify-between bg-fondo p-2 items-left">
                  <div>
                    <p>{doctor.usuario.nombre}</p>
                    <p className="text-xl text-gray-500">{doctor.usuario.apellido}</p>
                  </div>
                  <div className="flex flex-col items-right">
                    <p className="text-gray-500">{obtenerIniciales(doctor.usuario.tipo_documento)} {doctor.usuario.numero_documento}</p>
                    <p className="text-gray-500 text-xs">{getEspecialidadById(doctor.especialidad_id)}</p>
                  </div>
                </div>
                <div className="flex w-full">
                  <ViewDoctor id={doctor.usuario.id} />
                  <SecretaryCalendar id={doctor.usuario.id} />
                </div>
              </div>
            ))}
          </div>

          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-xl font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium text-sm sm:pl-6">Nombre</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Apellido</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Numero de Matricula</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Tipo De Documento</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Numero de Documento</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm justify-center text-center ">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {doctors?.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-3">
                    No hay doctores para mostrar con esos filtros
                  </td>
                </tr>
              ) : (
                doctors?.map((doctor) => (
                  <tr
                    key={doctor.usuario.id}
                    className="w-full border-b py-3 text-md last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p>{doctor.usuario.nombre}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{doctor.usuario.apellido}</td>
                    <td className="whitespace-nowrap px-3 py-3">{doctor.numero_matricula}</td>
                    <td className="whitespace-nowrap px-3 py-3">{obtenerIniciales(doctor.usuario.tipo_documento)}</td>
                    <td className="whitespace-nowrap px-3 py-3">{doctor.usuario.numero_documento}</td>
                    <td className="whitespace-nowrap py-3 pr-3">
                      <div className="flex justify-center gap-3">
                        <ViewDoctor id={doctor.usuario.id} />
                        <SecretaryCalendar id={doctor.usuario.id} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
