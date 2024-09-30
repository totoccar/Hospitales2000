import { findPacientesByQuery } from '@/lib/searchpatient';
import { ViewUser,ViewMedicalRecord } from '@/ui/Buttons';
import { TipoDocumentoEnum } from '@prisma/client';

export default async function Table({
  dni,
  apellido,
  tipoDocumento,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    tipoDocumento: tipoDocumento || TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD 
  });

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {patients?.map((patient) => (
              <div key={patient.usuario.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{patient.usuario.nombre}</p>
                    </div>
                    <p className="text-xl text-gray-500">{patient.usuario.apellido}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <ViewUser id={patient.usuario.id} />
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
              {patients?.map((patient) => (
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
                  <td className="whitespace-nowrap px-3 py-3">{patient.usuario.tipo_documento}</td>
                  <td className="whitespace-nowrap px-3 py-3">{patient.usuario.numero_documento}</td>
                  <td className="whitespace-nowrap px-3 py-3">{patient.numero_telefono}</td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    <div className="flex justify-center ">
                      <ViewUser id={patient.usuario.id} />
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pr-3">
                    <div className="flex justify-center ">
                      <ViewMedicalRecord disabled={true} id={patient.usuario.id} />
                    </div>
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
