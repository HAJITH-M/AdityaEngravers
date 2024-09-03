
import React from 'react';
import { FaPhone, FaMobile, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">Contact Us</h1>
        <div className="mt-8 space-y-6">
          <div className="flex items-start">
            <FaMapMarkerAlt className="flex-shrink-0 h-6 w-6 text-gray-600" />
            <div className="ml-3 text-gray-700">
              <p className="font-semibold">Aditya Pantographers</p>
              <p>No - 67, Tiny Sector, Ambattur Industrial Estate,</p>
              <p>Chennai - 600 058</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhone className="flex-shrink-0 h-6 w-6 text-gray-600" />
            <p className="ml-3 text-gray-700">
              <span className="font-semibold">Telephone:</span> +91 44 26253561
            </p>
          </div>
          <div className="flex items-center">
            <FaMobile className="flex-shrink-0 h-6 w-6 text-gray-600" />
            <p className="ml-3 text-gray-700">
              <span className="font-semibold">Mobile:</span> 9444312981 / 9444652765
            </p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="flex-shrink-0 h-6 w-6 text-gray-600" />
            <p className="ml-3 text-gray-700">
              <span className="font-semibold">E-mail:</span> adityaengravers@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
