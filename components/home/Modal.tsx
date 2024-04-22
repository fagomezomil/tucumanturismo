"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";


// Definimos las propiedades que recibirá el componente Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Creamos el componente Modal
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent | KeyboardEvent) => {
    if (event instanceof KeyboardEvent && event.key === "Escape") {
      onClose();
    }

    if (
      event instanceof MouseEvent &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleClick = handleClickOutside;
    const handleKeyDown = handleClickOutside;

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClickOutside]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div ref={modalRef} className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50  overflow-y-auto">
      <div className="bg-white p-6 pt-2 rounded-lg shadow-lg w-4/5 lg:w-2/4 xl:w-2/4 grid justify-items-end  my-3 ">
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

