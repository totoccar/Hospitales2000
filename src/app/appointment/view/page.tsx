import React from 'react'
import { TipoDocumentoEnum } from '@prisma/client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { getAmountDoctorsByQuery } from '@/src/lib/searchdoctor';
import Pagination from '../../search/ui/Pagination';
import { getDni } from '../../lib/actions';
import { getCitasById, getIdByDni } from '@/src/lib/searchappointments';
import Table from './ui/Table';

export default async function AppointmentView({searchParams,
}: {
  searchParams?: {
    page?: string;
}
}){
  const dni= await getDni();
  const id= await getIdByDni(dni);
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <MaxWidthWrapper>
    <div className="bg-fondo rounded-lg shadow-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-4">Citas Asignadas</h2>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        </div>
        <Table pacienteId={id} currentPage={currentPage}/>
        </div>
        <div className="mt-5 flex w-full justify-center">
      </div>
    </MaxWidthWrapper>
  )
}
