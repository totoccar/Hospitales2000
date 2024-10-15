import { getUsuarioById } from "@/src/lib/getUsuarioById";
import { getAmountAppointment, getEspecialidades } from "@/src/lib/searchdoctor";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { TipoDocumentoEnum } from "@prisma/client";
import AppointmentAssigmentSearch from "./ui/AppointmentAssigmentSearch";
import AssigmentTable from "./ui/AssigmentTable";
import Pagination from "../../search/ui/Pagination";



export default async function AppointmentBooking({
    searchParams,
  }: {
    searchParams: {
      dni?: string;
      apellido?: string;
      especialidad?: string;
      tipoDocumento?: TipoDocumentoEnum;
      page?: string;
      patient_id?: string;
    };
  }) {
  
    const currentDNI = searchParams?.dni || "";
    const currentApellido = searchParams?.apellido || "";
    const currentEspecialidad = searchParams?.especialidad || "";
    const currentTipoDocumento =
      searchParams?.tipoDocumento || TipoDocumentoEnum.CEDULA_IDENTIDAD;
    const currentPage = Number(searchParams?.page) || 1;
  
    const count = await getAmountAppointment({
      dni: currentDNI,
      apellido: currentApellido,
      especialidad: currentEspecialidad,
      tipoDocumento: currentTipoDocumento,
      currentPage: currentPage,
    });
  
    const especialidades = await getEspecialidades();
    const user = searchParams.patient_id ? await getUsuarioById(searchParams.patient_id) : null;
    return (
      <MaxWidthWrapper>
        <div className="bg-fondo rounded-lg shadow-md p-6 mt-5">
          <h2 className="text-xl font-bold mb-2">Asignar Cita a Paciente</h2>
          <h2 className="text-lg font-semibold ">Paciente: {user?.nombre} {user?.apellido}, DNI:{user?.numero_documento}</h2>
          <h3 className="text-xs">
            Busca un medico para que atienda a {user?.nombre} {user?.apellido}: Puedes buscar Médicos por documento, apellido o Especialidad
          </h3>
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <AppointmentAssigmentSearch especialidades={especialidades} patient_id={searchParams.patient_id || ""}  />
          </div>
          <AssigmentTable
            dni={currentDNI}
            apellido={currentApellido}
            especialidad={currentEspecialidad}
            tipoDocumento={currentTipoDocumento}
            currentPage={currentPage}
            patient_id={searchParams.patient_id || ""}
          />
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={count} />
          </div>
        </div>
      </MaxWidthWrapper>
    );
  }
  