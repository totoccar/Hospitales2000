"use client";

import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select";
import { Button } from "src/components/ui/button";
import { Label } from "src/components/ui/label";

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const duracionesTurno = [5, 10, 15, 20, 30, 60];

interface Intervalo {
  inicio: string;
  fin: string;
}

interface HorariosDia {
  [key: string]: Intervalo[];
}

export default function MedicalScheduler() {
  const [duracionTurno, setDuracionTurno] = useState<number>(15);
  const [horarios, setHorarios] = useState<HorariosDia>({});

  const estaHoraOcupada = (hora: Date, dia: string, intervalosExistentes: Intervalo[], intervaloActual?: Intervalo): boolean => {
    return intervalosExistentes.some((intervalo) => {
      if (intervalo === intervaloActual) return false;
      
      const inicioIntervalo = new Date(`2000-01-01T${intervalo.inicio}`);
      const finIntervalo = new Date(`2000-01-01T${intervalo.fin}`);
      
      // Cambiamos la lógica para permitir que la hora coincida con el fin de otro intervalo
      return hora > inicioIntervalo && hora < finIntervalo;
    });
  };

  const estaIntervaloDisponible = (horaInicio: Date, duracion: number, dia: string, intervalosExistentes: Intervalo[], intervaloActual?: Intervalo): boolean => {
    const horaFin = new Date(horaInicio);
    horaFin.setMinutes(horaFin.getMinutes() + duracion);

    // Verificar superposición con otros intervalos
    return !intervalosExistentes.some((intervalo) => {
      if (intervalo === intervaloActual) return false;
      
      const inicioExistente = new Date(`2000-01-01T${intervalo.inicio}`);
      const finExistente = new Date(`2000-01-01T${intervalo.fin}`);
      
      // Verifica si hay superposición entre los intervalos
      return (horaInicio < finExistente && horaFin > inicioExistente);
    });
  };

  const generarOpciones = (dia: string, esFin: boolean = false, intervaloActual?: Intervalo): string[] => {
    const opciones: string[] = [];
    let hora = new Date(`2000-01-01T08:00`);
    const horaFinal = new Date(`2000-01-01T22:00`);
    
    if (esFin && intervaloActual) {
      hora = new Date(`2000-01-01T${intervaloActual.inicio}`);
      hora.setMinutes(hora.getMinutes() + duracionTurno);
    }

    while (hora <= horaFinal) {
      const horaString = hora.toTimeString().slice(0, 5);
      
      if (!esFin) {
        // Para hora de inicio, verificar que el intervalo completo esté disponible
        if (estaIntervaloDisponible(hora, duracionTurno, dia, horarios[dia] || [], intervaloActual)) {
          opciones.push(horaString);
        }
      } else {
        // Para hora de fin, solo verificar que la hora no esté dentro de otro intervalo
        if (!estaHoraOcupada(hora, dia, horarios[dia] || [], intervaloActual)) {
          opciones.push(horaString);
        }
      }
      
      hora.setMinutes(hora.getMinutes() + 5);
    }

    return opciones;
  };

  const agregarIntervalo = (dia: string) => {
    const opcionesDisponibles = generarOpciones(dia);
    if (opcionesDisponibles.length > 0) {
      const nuevoInicio = opcionesDisponibles[0];
      const nuevoFin = new Date(`2000-01-01T${nuevoInicio}`);
      nuevoFin.setMinutes(nuevoFin.getMinutes() + duracionTurno);
      
      setHorarios(prev => ({
        ...prev,
        [dia]: [...(prev[dia] || []).sort((a, b) => a.inicio.localeCompare(b.inicio)), {
          inicio: nuevoInicio,
          fin: nuevoFin.toTimeString().slice(0, 5)
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Horario de Atención Ajustable</h1>

      <div className="mb-6">
        <Label htmlFor="duracionTurno">Duración del turno (minutos)</Label>
        <Select
          value={duracionTurno.toString()}
          onValueChange={(value) => setDuracionTurno(Number(value))}
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
            <div key={index} className="flex items-center space-x-2 mb-2 w-full">
              <div className="flex items-center space-x-2 w-full">
                <Select
                  value={intervalo.inicio}
                  onValueChange={(value) => actualizarIntervalo(dia, index, "inicio", value)}
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
                  onValueChange={(value) => actualizarIntervalo(dia, index, "fin", value)}
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
                <Button onClick={() => eliminarIntervalo(dia, index)}>Eliminar</Button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}