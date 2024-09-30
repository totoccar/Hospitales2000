import React from 'react'
import Search from '../secretary/ui/Search'
import Table from '../secretary/ui/Table'
import Pagination from '../ui/Pagination'
import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import { TipoDocumentoEnum } from '@prisma/client';

export default async function SearchSecretary({searchParams,
}: {
  searchParams?: {
    dni?: string;
    apellido?: string;
    tipoDocumento?: TipoDocumentoEnum;
    page?: string;
  };
}) {
  const currentDNI = searchParams?.dni || '';
  const currentApellido = searchParams?.apellido || '';
  const currentTipoDocumento = searchParams?.tipoDocumento || TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD;
  const currentPage = Number(searchParams?.page) || 1;

  const count = 2
  return (
    <MaxWidthWrapper>
    <div className="bg-gray-200 rounded-lg shadow-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-4">Buscar Secretarias</h2>
        <h3 className="text-xs">Puedes buscar Secretarias por documento o por apellido</h3>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search />
        </div>
        <Table dni={currentDNI} apellido={currentApellido} tipoDocumento={currentTipoDocumento} currentPage={currentPage}/>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={count} />
      </div>
    </div>
    </MaxWidthWrapper>
  )
}
