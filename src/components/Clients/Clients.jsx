  import React from 'react';
  import { FaCheckCircle, FaBuilding, FaGlobeAsia, FaClock, FaHandshake } from 'react-icons/fa';

  const Clients = () => {
    const clientList = [
      "List Pre Machines (India) Pvt. Ltd",
      "Brakes India Private Limited",
      "BBL Daido Private Ltd",
      "Bimetal Bearings Limited",
      "Sai Industries Ltd",
      "Madras Radiators And Pressings Ltd",
      "Amity Polymers",
      "Sharda Motor Industries Limited",
      "Aston Shoes Pvt. Ltd",
      "Farida Shoes Ltd",
      "SNT Industries"
    ];

    return (
      <div className="bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <img src="https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/clients/be-our-client.jpg" alt="Our Commitment" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
              <ul className="space-y-4 md:w-2/3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-4" />
                  <p className="text-gray-700">Our capacity to fathom different necessities of customers empowers us in assembling our scope of checking, Engraving and stamping devices as per the details of our customers.</p>
                </li>
                <li className="flex items-start">
                  <FaGlobeAsia className="text-blue-500 mt-1 mr-4" />
                  <p className="text-gray-700">Our moral business approaches and straightforward arrangements have made us a dependable association.</p>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-yellow-500 mt-1 mr-4" />
                  <p className="text-gray-700">We esteem the valuable time of clients and guarantee that our items range to customers' site inside stipulated time span.</p>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-purple-500 mt-1 mr-4" />
                  <p className="text-gray-700">Our client situated methodology has empowered us to effectively take into account local and also worldwide customers. As a customer driven association.</p>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 text-center pt-12 pb-6">Our Clients</h2>

        
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {clientList.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center">
                <FaBuilding className="text-blue-500 mr-4 text-xl" />
                <span className="text-gray-800">{client}</span>
              </div>
            ))}
            <div className="bg-blue-500 rounded-lg shadow-md p-6 text-white flex flex-col items-center justify-center">
              <span className="text-xl font-bold mb-2">Be Our Client!</span>
              <FaHandshake className="text-4xl" />
            </div>
          </div>
        
        </div>
      </div>
    );
  };

  export default Clients;
