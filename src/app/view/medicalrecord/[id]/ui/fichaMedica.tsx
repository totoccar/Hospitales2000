"use client"

import { useState } from "react";
import { Button } from "@/src/components/ui/button";

type FichaMedicaProps = {
  fichaMedica: {
    id: string;
    alergias: string;
    diagnostico: string;
    tratamientos: string;
    medicamentos_recetados: string;
  };
};

const DisplayField = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-800">
      {value}
    </div>
  </div>
);

const EditField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  </div>
);

export default function FichaMedica({ fichaMedica }: FichaMedicaProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [alergias, setAlergias] = useState(fichaMedica.alergias);
  const [diagnostico, setDiagnostico] = useState(fichaMedica.diagnostico);
  const [tratamientos, setTratamientos] = useState(fichaMedica.tratamientos);
  const [medicamentosRecetados, setMedicamentosRecetados] = useState(
    fichaMedica.medicamentos_recetados
  );

  const [originalData, setOriginalData] = useState(fichaMedica);

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/${fichaMedica.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alergias,
          diagnostico,
          tratamientos,
          medicamentos_recetados: medicamentosRecetados,
        }),
      });
  
      if (response.ok) {
        const updatedFicha = await response.json();
        setOriginalData(updatedFicha);
        setAlergias(updatedFicha.alergias);
        setDiagnostico(updatedFicha.diagnostico);
        setTratamientos(updatedFicha.tratamientos);
        setMedicamentosRecetados(updatedFicha.medicamentos_recetados);
        setIsEditing(false);
        console.log("Ficha médica actualizada correctamente");
      } else {
        console.error("Error al actualizar la ficha médica");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const handleCancel = () => {
    setAlergias(originalData.alergias);
    setDiagnostico(originalData.diagnostico);
    setTratamientos(originalData.tratamientos);
    setMedicamentosRecetados(originalData.medicamentos_recetados);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-200 p-4 mt-6 rounded-md shadow-inner">
      <h1 className="text-xl text-primario text-center mb-4">Ficha Médica</h1>
      <div className="grid grid-cols-1 gap-4">
        {isEditing ? (
          <>
            <EditField label="Alergias" value={alergias} onChange={setAlergias} />
            <EditField label="Diagnóstico" value={diagnostico} onChange={setDiagnostico} />
            <EditField label="Tratamientos" value={tratamientos} onChange={setTratamientos} />
            <EditField
              label="Medicamentos recetados"
              value={medicamentosRecetados}
              onChange={setMedicamentosRecetados}
            />
          </>
        ) : (
          <>
            <DisplayField label="Alergias" value={alergias || "No tiene alergias"} />
            <DisplayField label="Diagnóstico" value={diagnostico || "No tiene diagnóstico"} />
            <DisplayField label="Tratamientos" value={tratamientos || "No tiene tratamiento"} />
            <DisplayField
              label="Medicamentos recetados"
              value={medicamentosRecetados || "No tiene medicamentos recetados"}
            />
          </>
        )}
      </div>

      <div className="flex justify-end mt-6 gap-2">
        {isEditing ? (
          <>
            <Button className="bg-red-700" onClick={handleCancel} variant="destructive">
              Cancelar
            </Button>
            <Button className="bg-secundario text-white hover:bg-primario hover:text-white" onClick={handleSave} variant="outline">
              Guardar
            </Button>
          </>
        ) : (
          <Button className="bg-secundario text-white hover:bg-primario hover:text-white" onClick={() => setIsEditing(true)} variant="outline">
            Editar
          </Button>
        )}
      </div>
    </div>
  );
}