import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaHome, FaInfoCircle, FaServicestack, FaImages, FaUsers, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { title: "Home", path: "#", icon: <FaHome /> },
        { title: "About us", path: "#", icon: <FaInfoCircle /> },
        { title: "Services", path: "#", icon: <FaServicestack /> },
        { title: "Gallery", path: "#", icon: <FaImages /> },
        { title: "Clients", path: "#", icon: <FaUsers /> },
        { title: "Contact", path: "#", icon: <FaEnvelope /> },
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
                            className="md:hidden text-gray-500 hover:text-gray-800"
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
                    <div
                        className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}
                    >
                        <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="text-gray-700 flex hover:text-indigo-600">
                                    <a href={item.path} className="flex items-center space-x-2 text-base font-sans font-semibold">
                                        <span className="text-xl">{item.icon}</span>
                                        <span>{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
