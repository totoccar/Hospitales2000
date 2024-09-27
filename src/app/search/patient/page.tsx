import React from 'react'
import Search from '../ui/Search'
import Table from '../ui/Table'
import Pagination from '../ui/Pagination'
import MaxWidthWrapper from '@/ui/MaxWidthWrapper';

export default async function SearchPatient({searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const count = 2
  return (
    <MaxWidthWrapper>
    <div className="bg-white rounded-lg shadow-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-4">Buscar Pacientes</h2>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Busca los productos..." />
        </div>
        <Table query={query} currentPage={currentPage}/>
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={count} />
      </div>
    </div>
    </MaxWidthWrapper>
  )
}
