import React from 'react'
import {TipoDocumentoEnum } from '@prisma/client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { getAmountAppointment, getEspecialidades } from '@/src/lib/searchdoctor';
import Pagination from '../../search/ui/Pagination';
import AppointmentTable from '../ui/AppointmentTable';
import AppointmentSearch from '../ui/AppointmentSearch';


export default async function requestAppointment({
  searchParams,
}: {
  searchParams: {
    dni?: string;
    apellido?: string;
    especialidad?: string;
    tipoDocumento?: TipoDocumentoEnum;
    page?: string;
  };
}) {
  const currentDNI = searchParams?.dni || '';
  const currentApellido = searchParams?.apellido || '';
  const currentEspecialidad = searchParams?.especialidad || '';
  const currentTipoDocumento = searchParams?.tipoDocumento || TipoDocumentoEnum.CEDULA_IDENTIDAD;
  const currentPage = Number(searchParams?.page) || 1;

  const count = await getAmountAppointment({ 
    dni: currentDNI, 
    apellido: currentApellido, 
    especialidad : currentEspecialidad,
    tipoDocumento: currentTipoDocumento,
    currentPage: currentPage 
  });

  const especialidades = await getEspecialidades();
  
  return (
    <MaxWidthWrapper>
      <div className="bg-fondo rounded-lg shadow-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-4">Solicitar Nueva Cita</h2>
        <h3 className="text-xs">Puedes buscar Médicos por documento, apellido o Especialidad</h3>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <AppointmentSearch especialidades={especialidades} />
        </div>
        <AppointmentTable
          dni={currentDNI}
          apellido={currentApellido}
          especialidad={currentEspecialidad}
          tipoDocumento={currentTipoDocumento}
          currentPage={currentPage}
        />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={count} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

