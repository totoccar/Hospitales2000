import React from 'react'
import { Especialidad, TipoDocumentoEnum } from '@prisma/client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { getAmountAppointment, getEspecialidades } from '@/src/lib/searchdoctor';
import Pagination from '../../search/ui/Pagination';
import AppointmentTable from '../ui/AppointmentTable';
import AppointmentSearch from '../ui/AppointmentSearch';

export default async function requestAppointment({searchParamsAppointment,
}: {
  searchParamsAppointment?: {
    dni?: string;
    apellido?: string;
    especialidad?: string;
    tipoDocumento?: TipoDocumentoEnum;
    page?: string;
  };
}) {
  const currentDNI = searchParamsAppointment?.dni || '';
  const currentApellido = searchParamsAppointment?.apellido || '';
  const especialidad = searchParamsAppointment?.especialidad || '';
  const currentTipoDocumento = searchParamsAppointment?.tipoDocumento || TipoDocumentoEnum.CEDULA_IDENTIDAD;
  const currentPage = Number(searchParamsAppointment?.page) || 1;

  const count = await getAmountAppointment({ 
    dni: currentDNI, 
    apellido: currentApellido, 
    especialidad : especialidad,
    tipoDocumento: currentTipoDocumento,
    currentPage: currentPage 
  });
  const especialidades = await getEspecialidades();
  return (
    <MaxWidthWrapper>
    <div className="bg-fondo rounded-lg shadow-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-4">Solicitar Nueva Cita</h2>
        <h3 className="text-xs">Puedes buscar Medicos por documento, apellido o Especialidad</h3>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <AppointmentSearch especialidades={especialidades.map(e => e.nombre)} />
        </div>
        <AppointmentTable dni={currentDNI} apellido={currentApellido} especialidad={especialidad} tipoDocumento={currentTipoDocumento} currentPage={currentPage}/>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={count} />
      </div>
    </div>
    </MaxWidthWrapper>
  )
}
