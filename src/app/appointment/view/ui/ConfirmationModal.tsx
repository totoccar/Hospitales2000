// src/ui/ConfirmationModal.tsx

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmationModal({ isOpen, onClose, onConfirm }: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">¿Estás seguro?</h2>
        <p className="mb-4">¿Realmente deseas eliminar esta cita? Esta acción no se puede deshacer.</p>
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 rounded">Cancelar</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Confirmar</button>
        </div>
      </div>
    </div>
  );
}
