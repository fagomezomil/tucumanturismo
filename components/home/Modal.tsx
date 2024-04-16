import React, { useEffect } from "react";
import { createPortal } from "react-dom";


// Definimos las propiedades que recibirá el componente Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Creamos el componente Modal
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

  if (!isOpen) {
    return null;
  }

  const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
    if (
      event.type === "click" &&
      event.target instanceof Node &&
      !(event.target as Node).isSameNode(modalRef.current)
    ) {
      onClose();
    }

    if (event.type === "keydown" && event.key === "Escape") {
      onClose();
    }
  };

  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, []);

  return createPortal(
    <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 pt-2 rounded-lg shadow-lg w-4/5 lg:w-2/4 xl:w-2/4 grid justify-items-end">
        {/* Botón para cerrar el modal */}
        <button
          className="text-gray-700 font-bold text-xl"
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
