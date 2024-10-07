import React from 'react'
import Search from '../secretary/ui/Search'
import Table from '../secretary/ui/Table'
import Pagination from '../ui/Pagination'
import { TipoDocumentoEnum } from '@prisma/client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { getAmountSecretariesByQuery } from '@/src/lib/searchsecretaria';

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
  const currentTipoDocumento = searchParams?.tipoDocumento || TipoDocumentoEnum.CEDULA_IDENTIDAD;
  const currentPage = Number(searchParams?.page) || 1;

  const count = await getAmountSecretariesByQuery({
    dni: currentDNI,
    apellido: currentApellido,
    tipoDocumento: currentTipoDocumento,
    currentPage: currentPage
  });
  return (
    <MaxWidthWrapper>
    <div className="bg-fondo rounded-lg shadow-md p-6 mt-5">
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
