import React from "react";
import { createPortal } from "react-dom";

// Definimos las propiedades que recibirá el componente Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Creamos el componente Modal
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-2/5">
        {/* Botón para cerrar el modal */}
        <button
          className="absolute top-2 right-2 text-gray-700 font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {/* Contenido del modal */}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;