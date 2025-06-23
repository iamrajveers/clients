'use client';
import React from "react";

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">

      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Order Form</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
          <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border rounded-md" />
          <textarea placeholder="Order Details" rows={6} className="w-full px-4 py-2 border rounded-md" />
          <button type="submit" className="w-full bg-[#FB5704] text-white px-4 py-2 rounded-md hover:bg-[#e24d00]">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
