  import React from 'react';
  import { FaPhone, FaMobile, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

  const ContactComponent = () => {
    return (
      <div className="max-w-screen-xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 py-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-yellow-500 to-black text-transparent bg-clip-text">Contact Us</h1>
          <div className="mt-8 space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="flex-shrink-0 h-6 w-6 text-yellow-400" />
              <div className="ml-3 text-gray-900">
                <p className="font-semibold text-black">Aditya Pantographers</p>
                <p>No - 67, Tiny Sector, Ambattur Industrial Estate,</p>
                <p>Chennai - 600 058</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhone className="flex-shrink-0 h-6 w-6 text-yellow-400" />
              <p className="ml-3 text-gray-900">
                <span className="font-semibold text-black">Telephone:</span> +91 44 26253561
              </p>
            </div>
            <div className="flex items-center">
              <FaMobile className="flex-shrink-0 h-6 w-6 text-yellow-400" />
              <p className="ml-3 text-gray-900">
                <span className="font-semibold text-black">Mobile:</span> 9444312981 / 9444652765
              </p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="flex-shrink-0 h-6 w-6 text-yellow-400" />
              <p className="ml-3 text-gray-900">
                <span className="font-semibold text-black">E-mail:</span> adityaengravers@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default ContactComponent;
