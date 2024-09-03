
import React from 'react';
import { FaHandshake, FaIndustry, FaTools, FaUsers } from 'react-icons/fa';

const AdityaSupportHub = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            We Work For You
          </h2>
          <p className="mt-3 text-xl text-gray-700">
            Aditya Engravers is committed to supporting our customers in India
          </p>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className=" bg-white rounded-lg px-6 pb-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 mt-4 bg-yellow-500 rounded-md shadow-lg">
                      <FaHandshake className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-black tracking-tight">Local Support</h3>
                  <p className="mt-5 text-base text-gray-700">
                    We've opened a subsidiary in India to offer ongoing support and training over the life of the machine.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className=" bg-white rounded-lg px-6 pb-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 mt-4 bg-yellow-500 rounded-md shadow-lg">
                      <FaUsers className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-black tracking-tight">Satisfied Customers</h3>
                  <p className="mt-5 text-base text-gray-700">
                    Hundreds of customers in India are already enjoying the benefits of Aditya Pantographers.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className=" bg-white rounded-lg px-6 pb-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 mt-4 bg-yellow-500 rounded-md shadow-lg">
                      <FaIndustry className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-black tracking-tight">Our Mission</h3>
                  <p className="mt-5 text-base text-gray-700">
                    Aditya Pantographers offers the biggest range of Indian, quality Manual cutting & manual engraving machines.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className=" bg-white rounded-lg px-6 pb-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 mt-4 bg-yellow-500 rounded-md shadow-lg">
                      <FaTools className="h-6  w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-black tracking-tight">Quality Products</h3>
                  <p className="mt-5 text-base text-gray-700">
                    We help our customers make more money with our high-quality machines and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdityaSupportHub;
