
import React from 'react';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2013 Aditya Pantographers All Rights Reserved
          </p>
          <div className="flex items-center">
            <span className="mr-4">Follow us:</span>
            <a href="https://twitter.com/adityapanto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mr-4">
              <FaXTwitter size={20} />
            </a>
            <a href="https://facebook.com/adityapanto" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
