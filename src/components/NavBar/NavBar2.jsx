  import { useState, useEffect } from 'react';
  import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
  import { FaHome, FaInfoCircle, FaServicestack, FaImages, FaUsers, FaEnvelope, FaChevronDown } from 'react-icons/fa';

  export default function Navbar2() {
      const [isOpen, setIsOpen] = useState(false);
      const [activeItem, setActiveItem] = useState(null);
      const [isServicesOpen, setIsServicesOpen] = useState(false);

      const toggleServices = (e) => {
          e.preventDefault();
          setIsServicesOpen(!isServicesOpen);
      };

      const handleItemClick = (index) => {
          setActiveItem(index);
          if (index !== 2) { // Assuming Services is at index 2
              setIsServicesOpen(false);
          }
      };

      const navigation = [
          { title: "Home", path: "/home", icon: <FaHome /> },
          { title: "About", path: "/about", icon: <FaInfoCircle /> },
          { 
              title: "Services", 
              path: "#", 
              icon: <FaServicestack />,
              submenu: [
                  { title: "Clients", path: "/client", icon: <FaUsers /> }
              ]
          },
          { title: "Gallery", path: "/gallery", icon: <FaImages /> },
          { title: "Contact", path: "/contact", icon: <FaEnvelope /> },
      ];

      return (
          <>
              <header className="bg-white border-b w-full mt-2 md:static md:text-sm md:border-none shadow-sm rounded-b-md shadow-gray-300">
                  <nav className="items-center px-4 mx-auto md:flex md:px-8 gap-2" role="navigation" aria-label="Main navigation">
                      <div className="flex items-center justify-between  py-3 md:py-5 md:block">
                          <a href="#" aria-label="Homepage">
                              <img
                                  src="https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Logo/logo.png"
                                  width={160}
                                  height={50}
                                  alt="Company Logo"
                              />
                          </a>
                          <button
                              className="md:hidden text-yellow-500 hover:text-[#9d174d]"
                              onClick={() => setIsOpen(!isOpen)}
                              aria-label="Toggle navigation"
                          >
                              {isOpen ? (
                                  <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                              ) : (
                                  <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                              )}
                          </button>
                      </div>
                      <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
                          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                              {navigation.map((item, idx) => (
                                  <li key={idx} className={`text-yellow-500 hover:text-[#9d174d] relative ${activeItem === idx ? 'text-[#9d174d]' : ''}`}>
                                      <a 
                                          href={item.path} 
                                          onClick={(e) => {
                                              if (item.submenu) {
                                                  toggleServices(e);
                                              }
                                              handleItemClick(idx);
                                          }}
                                          className="flex items-center space-x-2 text-base font-sans font-semibold relative group"
                                      >
                                          <span className="text-xl">{item.icon}</span>
                                          <span>{item.title}</span>
                                          {item.submenu && <FaChevronDown className={`ml-1 transition-transform duration-200 ${isServicesOpen ? 'transform rotate-180' : ''}`} />}

                                          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#9d174d] group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                                      </a>
                                      {item.submenu && isServicesOpen && (
                                          <ul className="mt-2 space-y-2 md:absolute md:left-0 md:top-6 md:mt-6 md:w-48 md:bg-white md:border md:border-gray-200 md:rounded md:shadow-lg">
                                              {item.submenu.map((subItem, subIdx) => (
                                                  <li key={subIdx} className="hover:bg-gray-100">
                                                      <a 
                                                          href={subItem.path} 
                                                          className="flex items-center text-base px-4 py-2 text-gray-700 hover:text-[#9d174d] relative group"
                                                          onClick={() => handleItemClick(idx)}
                                                      >
                                                          <span className="mr-2">{subItem.icon}</span>
                                                          {subItem.title}

                                                          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#9d174d] group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
                                                      </a>
                                                  </li>
                                              ))}
                                          </ul>
                                      )}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </nav>
              </header>
          </>
      );
  }