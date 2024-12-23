import React from 'react'
import { TipoDocumentoEnum } from '@prisma/client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { getAmountDoctorsByQuery } from '@/src/lib/searchdoctor';
import Pagination from '../../search/ui/Pagination';
import { getDni } from '../../lib/actions';
import { getAmountCitasById, getIdByDni } from '@/src/lib/searchappointments';
import Table from './ui/Table';

export default async function AppointmentView({searchParams,
}: {
  searchParams?: {
    page?: string;

}
}){
  const dni= await getDni();
  const id= await getIdByDni(dni);
  const count = await getAmountCitasById(id || '');
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <MaxWidthWrapper>
    <div className="bg-fondo rounded-lg shadow-md p-6 mt-5 ">
        <h2 className="text-xl font-bold ">Citas Asignadas</h2>
        <Table pacienteId={id} currentPage={currentPage}/>
        </div>
        <div className="flex w-full justify-center">
         <Pagination totalPages={count as number} /> 
      </div>
    </MaxWidthWrapper>
  )
}
