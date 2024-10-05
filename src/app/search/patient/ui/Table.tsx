
import { findPacientesByQuery } from '@/src/lib/searchpatient';
import { obtenerIniciales } from '@/src/lib/utils';
import { ViewMedicalRecord, ViewPatient } from '@/src/ui/Buttons';
import { TipoDocumentoEnum } from '@prisma/client';

export default async function Table({
  dni,
  apellido,
  tipoDocumento,
  currentPage,
}: {
  dni?: string;
  apellido?: string;
  tipoDocumento?: TipoDocumentoEnum;
  currentPage: number;
}) {
  const patients = await findPacientesByQuery({ 
    dni: dni || '', 
    apellido: apellido || '', 
    tipoDocumento: tipoDocumento || TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
    currentPage
  });

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {patients?.map((patient) => (
              <div key={patient.usuario.id} className="mb-2 w-full rounded-md bg-fondo p-4 border-b pb-4">
                <div className="flex justify-between bg-fondo p-2 items-left">
                  <div>
                    <p>{patient.usuario.nombre}</p>
                    <p className="text-xl text-gray-500">{patient.usuario.apellido}</p>
                  </div>
                  <div className="flex flex-col items-right">
                    <p className="text-gray-500">{obtenerIniciales(patient.usuario.tipo_documento)} {patient.usuario.numero_documento}</p>
                    <p className="text-gray-500">{patient.lugar_nacimiento}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex justify-end">
                    <ViewPatient id={patient.usuario.id} />
                  </div>
                  <div className="flex justify-center ">
                    <ViewMedicalRecord disabled={false} id={patient.ficha_medica_id} />
                    </div>
                </div>
              </div>
            ))}
          </div>

          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-xl font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium text-sm sm:pl-6">Nombre</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Apellido</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Tipo De Documento</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">N° de Documento</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">N° de Telefono</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Ver Datos Personales</th>
                <th scope="col" className="px-3 py-5 font-medium text-sm ">Ver Ficha medica</th>
              </tr>
            </thead>
            <tbody className="bg-white">
                {patients?.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-3">
                  No hay pacientes para mostrar con esos filtros
                  </td>
                </tr>
                ) : (
                patients?.map((patient) => (
                  <tr
                  key={patient.usuario.id}
                  className="w-full border-b py-3 text-md last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                    <p>{patient.usuario.nombre}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{patient.usuario.apellido}</td>
                  <td className="whitespace-nowrap px-3 py-3">{obtenerIniciales(patient.usuario.tipo_documento)}</td>
                  <td className="whitespace-nowrap px-3 py-3">{patient.usuario.numero_documento}</td>
                  <td className="whitespace-nowrap px-3 py-3">{patient.numero_telefono}</td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    <div className="flex justify-center ">
                    <ViewPatient id={patient.usuario.id} />
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    <div className="flex justify-center ">
                    <ViewMedicalRecord disabled={false} id={patient.ficha_medica_id} />
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
