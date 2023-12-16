// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-4 rounded shadow-lg z-10">
          <button className="absolute top-0 right-0 m-2 p-2" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
