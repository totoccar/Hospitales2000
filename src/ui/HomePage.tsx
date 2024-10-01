import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { UserRound, FileText, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-8 md:py-20 lg:py-28 xl:py-38">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
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
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 border-primario" placeholder="Buscar paciente, médico o ficha" type="text" />
                  <Button type="submit" className="bg-primario">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </form>
              </div>
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
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">+4% desde el último mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pacientes</CardTitle>
                  <UserRound className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15,234</div>
                  <p className="text-xs text-muted-foreground">+12% desde el último mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fichas Médicas</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32,845</div>
                  <p className="text-xs text-muted-foreground">+18% desde el último mes</p>
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
                  <Button className="w-full bg-primario">
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
                  <Button className="w-full bg-primario">
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
                  <Button className="w-full bg-primario">
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