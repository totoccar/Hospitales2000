
import { UserRound, FileText, Search } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import Link from "next/link"
import { getTotalDoctors, getTotalMedicalRecords, getTotalPatients } from "../lib/homePageActiones"

import { getDni, getRole } from "../app/lib/actions"
import NavBarAdmin from "./AdminNav"
import NavBarSecretary from "./SecretaryNav"
import NavBarDoctor from "./DoctorNav"
import NavBarPacient from "./PacientNavBar"

export default async function HomePage() {
  const role = await getRole();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-8 md:pt-20 lg:pt-24 xl:pt-34">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Link href="/password/change" passHref>
                <Button className="bg-primario w-full">Cambiar Contraseña</Button>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hospitales <span className="text-acentos">2000</span>
                </h1>
                <h2 className="text-xl font-bold pt-4 sm:text-xl md:text-xl lg:text-2xl/none text-primario">
                  Gestión Hospitalaria Eficiente
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Administre médicos, pacientes y fichas médicas de manera sencilla y eficaz.
                </p>
              </div>

            </div>
            <div className="grid grid-cols-1 gap-2 mt-8 md:grid-cols-3 md:gap-4">
              <Link href="/admin/create/patient" passHref>
                <Button className="bg-primario w-full">Registrar Paciente</Button>
              </Link>
              <Link href="/admin/create/doctor" passHref>
                <Button className="bg-primario w-full">Registrar Medico</Button>
              </Link>
              <Link href="/admin/create/secretary" passHref>
                <Button className="bg-primario w-full">Registrar Secretaria</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 rounded-xl bg-fondo2">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Médicos</CardTitle>
                  <UserRound className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getTotalDoctors()}</div>
                  <p className="text-xs text-muted-foreground">Esperando para atenderte</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pacientes</CardTitle>
                  <UserRound className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getTotalPatients()}</div>
                  <p className="text-xs text-muted-foreground">Con excelentes resultados</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fichas Médicas</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{getTotalMedicalRecords()}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-primario sm:text-5xl text-center mb-12">Acceso Rápido</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Médicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Administre la información y horarios de los médicos.</p>
                  <Button disabled={true} className="w-full bg-primario">
                    <UserRound className="mr-2 h-4 w-4" /> Ir a Médicos
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gestión de Pacientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Administre los registros y citas de los pacientes.</p>
                  <Button disabled={true} className="w-full bg-primario">
                    <UserRound className="mr-2 h-4 w-4" /> Ir a Pacientes
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fichas Médicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Acceda y gestione las fichas médicas de los pacientes.</p>
                  <Button disabled={true} className="w-full bg-primario">
                    <FileText className="mr-2 h-4 w-4" /> Ver Fichas Médicas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}