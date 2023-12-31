// src/components/Modal.js
import React, { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div style={{zIndex:100000000}} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <p className="text-lg text-gray-800">
              নৈপুণের কাজ এখনো শেষ হয়নী। এটার কাজ চলছে। আমরা কিছু দিনের মধ্যেই আবার আপডেট জানাবো। নৈপুণের সাথে থাকার জন্য ধন্যবাদ। 
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closeModal}
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
