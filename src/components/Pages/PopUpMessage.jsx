import React from 'react';
import { Link } from 'react-router-dom';

const PopupMessage = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>Item added to cart. <Link to="/cart" className="text-blue-500">View cart here</Link></p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Close</button>
      </div>
    </div>
  );
};

export default PopupMessage;
