import React from 'react';
import { FaStar, FaGoogle } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="w-[85%] mx-auto px-6 py-16 text-center ">
        <section className="flex flex-col md:flex-row items-center justify-between" aria-labelledby="hero-title">
          <div className="md:w-1/2 md:pr-10 ">
            <h1 id="hero-title" className="text-4xl font-bold text-black dark:text-white mb-6">
              <span className="font-sans  bg-gradient-to-r from-yellow-500 to-black text-transparent bg-clip-text">
                Welcome to Aditya Pantographers
              </span>
            </h1>
            <p className="text-lg font-sans text-gray-600 dark:text-gray-300 mb-8">
              We offer a wide range of engraving services. At Aditya Pantographers, we pride ourselves on our quality work. With many years of experience, our aim is to achieve 100% customer satisfaction.
            </p>
            <p className="text-lg font-sans text-gray-600 dark:text-gray-300 mb-8">
              Specializing in{' '}
              <span className="font-bold text-yellow-600 dark:text-yellow-400">
                Plastic and Rubber Moulds Engraving, Manufacturing of Stamping Wheels, Casting Dies, Brass and Metal Punches
              </span>{' '}
              since 1990.
            </p>
            <div className="flex items-center justify-center md:justify-start mb-8">
              <FaStar className="text-yellow-400 mr-1" aria-hidden="true" />
              <span className="text-xl font-semibold text-black dark:text-white">4.9 / 5</span>
              <span className="ml-2 gap-1 text-gray-600 dark:text-gray-300 flex items-center">
                from 19 <FaGoogle className="ml-1" aria-hidden="true" /> Reviews
              </span>
            </div>
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              aria-label="Learn more about Aditya Pantographers"
            >
              Learn More
            </button>
          </div>
          <div className=" mt-10 md:mt-0 md:mr-20">
            <img
              src="https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.05_c8a8956e.jpg"
              alt="Detailed view of engraving work by Aditya Pantographers"
              className="rounded-lg shadow-xl w-96 h-96 object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
