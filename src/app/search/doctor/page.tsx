import React from 'react'
import Search from '../doctor/ui/Search'
import Table from '../doctor/ui/Table'
import Pagination from '../ui/Pagination'
import { TipoDocumentoEnum } from '@prisma/client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { getAmountDoctorsByQuery } from '@/src/lib/searchdoctor';

export default async function SearchDoctor({searchParams,
}: {
  searchParams?: {
    dni?: string;
    apellido?: string;
    numero_matricula?: string;
    tipoDocumento?: TipoDocumentoEnum;
    page?: string;
  };
}) {
  const currentDNI = searchParams?.dni || '';
  const currentApellido = searchParams?.apellido || '';
  const currentMatricula = searchParams?.numero_matricula || '';
  const currentTipoDocumento = searchParams?.tipoDocumento || TipoDocumentoEnum.CEDULA_IDENTIDAD;
  const currentPage = Number(searchParams?.page) || 1;

  const count = await getAmountDoctorsByQuery({ 
    dni: currentDNI, 
    apellido: currentApellido, 
    numero_matricula: currentMatricula, 
    tipoDocumento: currentTipoDocumento,
    currentPage: currentPage 
  });
  return (
    <MaxWidthWrapper>
    <div className="bg-fondo rounded-lg shadow-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-4">Buscar Medicos</h2>
        <h3 className="text-xs">Puedes buscar Medicos por documento, apellido o n de matricula</h3>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search />
        </div>
        <Table dni={currentDNI} apellido={currentApellido} numero_matricula={currentMatricula} tipoDocumento={currentTipoDocumento} currentPage={currentPage}/>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={count} />
      </div>
    </div>
    </MaxWidthWrapper>
  )
}
