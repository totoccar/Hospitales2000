'use client';

import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select";
import { Button } from "src/components/ui/button";
import { Label } from "src/components/ui/label";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { getDoctors, getDoctorSchedule, saveScheduleForDoctor, Doctor } from "src/lib/saveSchedule";

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const duracionesTurno = [5, 10, 15, 20, 30, 60];

interface Intervalo {
  inicio: string;
  fin: string;
}

interface HorariosDia {
  [key: string]: Intervalo[];
}

export default function MedicalScheduler({ userRole }: { userRole: string }) {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [duracionTurno, setDuracionTurno] = useState<number>(15);
  const [horarios, setHorarios] = useState<HorariosDia>({});
  const [guardando, setGuardando] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [respuesta, setRespuesta] = useState<{
    tipo: 'success' | 'error' | null;
    mensaje: string | null;
  }>({ tipo: null, mensaje: null });
  const [guardarHabilitado, setGuardarHabilitado] = useState(false);

  useEffect(() => {
    async function loadInitialData() {
      setCargando(true);
      setError(null);
      try {
        if (userRole === 'Secretaria') {
          const doctorsList = await getDoctors();
          setDoctors(doctorsList);
        } else if (userRole === 'Medico') {
          const { schedules, appointmentDuration } = await getDoctorSchedule();
          setHorarios(schedules);
          setDuracionTurno(appointmentDuration);
        }
      } catch (error) {
        setError('Error al cargar los datos iniciales');
      } finally {
        setCargando(false);
      }
    }

    loadInitialData();
  }, [userRole]);

  useEffect(() => {
    if (selectedDoctorId && userRole === 'Secretaria') {
      const loadDoctorSchedule = async () => {
        setCargando(true);
        setError(null);
        try {
          const { schedules, appointmentDuration } = await getDoctorSchedule(selectedDoctorId);
          setHorarios(schedules);
          setDuracionTurno(appointmentDuration);
        } catch (error) {
          setError('Error al cargar el horario del médico');
        } finally {
          setCargando(false);
        }
      };

      loadDoctorSchedule();
    }
  }, [selectedDoctorId, userRole]);

  useEffect(() => {
    const algunIntervaloIncompleto = Object.values(horarios).some(dia => dia.some(intervalo => !intervalo.fin));
    setGuardarHabilitado(!algunIntervaloIncompleto);
  }, [horarios]);

  const estaHoraOcupada = (hora: string, dia: string, intervalosExistentes: Intervalo[], intervaloActual?: Intervalo): boolean => {
    return intervalosExistentes.some((intervalo) => {
      if (intervalo === intervaloActual) return false;
      
      return hora > intervalo.inicio && hora < intervalo.fin;
    });
  };

  const estaIntervaloDisponible = (horaInicio: string, duracion: number, dia: string, intervalosExistentes: Intervalo[], intervaloActual?: Intervalo): boolean => {
    const inicioDate = new Date(`2000-01-01T${horaInicio}`);
    const finDate = new Date(inicioDate);
    finDate.setMinutes(finDate.getMinutes() + duracion);
    const horaFin = finDate.toTimeString().slice(0, 5);

    return !intervalosExistentes.some((intervalo) => {
      if (intervalo === intervaloActual) return false;
      
      return (horaInicio < intervalo.fin && horaFin > intervalo.inicio);
    });
  };

  const generarOpciones = (dia: string, esFin: boolean = false, intervaloActual?: Intervalo): string[] => {
    const opciones: string[] = [];
    let hora = new Date(`2000-01-01T08:00`);
    const horaFinal = new Date(`2000-01-01T22:00`);
    
    // Si esFin, la hora inicial debería ser la hora de inicio + duración del turno
    if (esFin && intervaloActual) {
      hora = new Date(`2000-01-01T${intervaloActual.inicio}`);
      hora.setMinutes(hora.getMinutes() + (duracionTurno || 30));
    }
  
    // Ajustar el bucle para que se mueva en incrementos de 30 minutos
    const incremento = duracionTurno; // 30 minutos para las opciones de fin
    
    while (hora <= horaFinal) {
      // Convertir la hora actual a un string en formato HH:mm
      const horaString = hora.toTimeString().slice(0, 5);
      
      if (!esFin) {
        if (estaIntervaloDisponible(horaString, duracionTurno, dia, horarios[dia] || [], intervaloActual)) {
          opciones.push(horaString);
        }
      } else {
        if (!estaHoraOcupada(horaString, dia, horarios[dia] || [], intervaloActual)) {
          opciones.push(horaString);
        }
      }
  
      // Incrementar la hora en 30 minutos
      hora.setMinutes(hora.getMinutes() + incremento);
    }
  
    return opciones;
  };
  

  const agregarIntervalo = (dia: string) => {
    const opcionesDisponibles = generarOpciones(dia);
    if (opcionesDisponibles.length > 0) {
      const nuevoInicio = opcionesDisponibles[0];
      const nuevaHoraFin = new Date(`2000-01-01T${nuevoInicio}`);
      nuevaHoraFin.setMinutes(nuevaHoraFin.getMinutes() + duracionTurno);
      const nuevoFin = nuevaHoraFin.toTimeString().slice(0, 5);
      
      setHorarios(prev => ({
        ...prev,
        [dia]: [...(prev[dia] || []), {
          inicio: nuevoInicio,
          fin: nuevoFin
        }].sort((a, b) => a.inicio.localeCompare(b.inicio))
      }));
    }
  };

  const actualizarIntervalo = (dia: string, index: number, campo: "inicio" | "fin", valor: string) => {
    setHorarios(prev => ({
      ...prev,
      [dia]: prev[dia].map((intervalo, i) => {
        if (i === index) {
          if (campo === "inicio") {
            const nuevaHoraFin = new Date(`2000-01-01T${valor}`);
            nuevaHoraFin.setMinutes(nuevaHoraFin.getMinutes() + duracionTurno);
            return {
              inicio: valor,
              fin: nuevaHoraFin.toTimeString().slice(0, 5)
            };
          } else {
            return { ...intervalo, [campo]: valor };
          }
        }
        return intervalo;
      }).sort((a, b) => a.inicio.localeCompare(b.inicio))
    }));
  };

  const eliminarIntervalo = (dia: string, index: number) => {
    setHorarios(prev => ({
      ...prev,
      [dia]: prev[dia].filter((_, i) => i !== index)
    }));
  };

  const esHorarioValido = (inicio: string, fin: string, duracion: number) => {
    const inicioDate = new Date(`2000-01-01T${inicio}`);
    const finDate = new Date(`2000-01-01T${fin}`);
    const diferenciaMinutos = (finDate.getTime() - inicioDate.getTime()) / 60000;
    return diferenciaMinutos % duracion === 0;
  };

  const guardarHorarios = async () => {
    setGuardando(true);
    setRespuesta({ tipo: null, mensaje: null });

    const horariosInvalidos = Object.values(horarios).some(dia =>
      dia.some(intervalo => !esHorarioValido(intervalo.inicio, intervalo.fin, duracionTurno))
    );

    if (horariosInvalidos) {
      setRespuesta({
        tipo: 'error',
        mensaje: 'No se pudieron guardar los horarios porque faltan completar campos o los intervalos no son válidos.',
      });
      setGuardando(false);
      return;
    }

    try {
      const resultado = await saveScheduleForDoctor(horarios, duracionTurno, userRole === 'Secretaria' ? selectedDoctorId : undefined);
      
      setRespuesta({
        tipo: resultado.success ? 'success' : 'error',
        mensaje: resultado.message,
      });
    } catch (error) {
      setRespuesta({
        tipo: 'error',
        mensaje: 'Error al guardar los horarios. Por favor, intente nuevamente.',
      });
    } finally {
      setGuardando(false);
    }
  };

  if (cargando) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="bg-red-50 text-red-800 p-4 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Horario de Atención Ajustable</h1>

      {respuesta.mensaje && (
        <div className={`mb-4 p-4 rounded-md flex items-center ${
          respuesta.tipo === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {respuesta.tipo === 'success' ? (
            <Check className="h-5 w-5 mr-2 text-green-500" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
          )}
          <p>{respuesta.mensaje}</p>
        </div>
      )}

      {userRole === 'Secretaria' && (
        <div className="mb-6">
          <Label htmlFor="doctorSelect">Seleccionar Médico</Label>
          <Select
            value={selectedDoctorId}
            onValueChange={setSelectedDoctorId}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccione un médico" />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((doctor) => (
                <SelectItem key={doctor.id} value={doctor.id}>
                  {doctor.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {(userRole === 'Medico' || selectedDoctorId) && (
        <>
          <div className="mb-6">
            <Label htmlFor="duracionTurno">Duración del turno (minutos)</Label>
            <Select
              value={duracionTurno.toString()}
              onValueChange={(value: any) => setDuracionTurno(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione la duración" />
              </SelectTrigger>
              <SelectContent>
                {duracionesTurno.map((duracion) => (
                  <SelectItem key={duracion} value={duracion.toString()}>
                    {duracion} minutos
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {diasSemana.map((dia) => (
            <div key={dia} className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-2">{dia}</h2>
                <Button onClick={() => agregarIntervalo(dia)}>Agregar Intervalo</Button>
              </div>
              {horarios[dia]?.map((intervalo, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Select
                    value={intervalo.inicio}
                    onValueChange={(value: string) => actualizarIntervalo(dia, index, "inicio", value)}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Inicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {generarOpciones(dia, false, intervalo).map((opcion) => (
                        <SelectItem key={opcion} value={opcion}>
                          {opcion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  -
                  <Select
                    value={intervalo.fin}
                    onValueChange={(value: string) => actualizarIntervalo(dia, index, "fin", value)}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Fin" />
                    </SelectTrigger>
                    <SelectContent>
                      {generarOpciones(dia, true, intervalo).map((opcion) => (
                        <SelectItem key={opcion} value={opcion}>
                          {opcion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    onClick={() => eliminarIntervalo(dia, index)}
                    variant="destructive"
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
            </div>
          ))}

          <Button 
            onClick={guardarHorarios} 
            className="mt-6 w-full"
            disabled={guardando || !guardarHabilitado}
          >
            {guardando ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Guardando...
              </>
            ) : (
              'Guardar Horarios'
            )}
          </Button>
        </>
      )}
    </div>
  );
}