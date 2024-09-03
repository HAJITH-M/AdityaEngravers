  import React from 'react';
  import { FaCheckCircle, FaUsers, FaLightbulb, FaProjectDiagram, FaLeaf, FaShieldAlt, FaChartLine } from 'react-icons/fa';

  const OurMission = () => {
    const missionPoints = [
      { icon: <FaCheckCircle />, text: "Achieve our client's needs for the highest quality and total satisfaction" },
      { icon: <FaUsers />, text: "Develop services which are cost effective and efficient" },
      { icon: <FaLightbulb />, text: "Develop the skills of our employees, enhance teamwork and creativity" },
      { icon: <FaProjectDiagram />, text: "Create effective project planning and following" },
      { icon: <FaLeaf />, text: "Protect the environment" },
      { icon: <FaShieldAlt />, text: "Achieve high standards of occupational health and safety" },
      { icon: <FaChartLine />, text: "Ensure the company's profitable growth" },
    ];

    return (
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="ourservice-title" className="text-4xl text-center pb-4 font-bold text-black dark:text-white mb-6">

            <span className="font-sans bg-gradient-to-r from-yellow-500 to-black text-transparent bg-clip-text">
              Our Mission
            </span>
          </h1>

          <div className="text-center">
            <p className="mt-4 text-xl text-gray-600">Driving excellence in every aspect of our business</p>
          </div>

          <div className="mt-12 relative">

            <div className="absolute h-full w-1 bg-yellow-200 left-1/2 transform -translate-x-1/2"></div>
            {missionPoints.map((point, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="order-1 w-5/12"></div>


                <div className="z-20 flex items-center order-1 bg-yellow-500 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-black">{index + 1}</h1>
                </div>
                <div className={`order-1 bg-white rounded-lg shadow-xl w-5/12 px-4 py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-center">

                    <div className={`flex-shrink-0 text-3xl text-yellow-500 ${index % 2 === 0 ? 'order-2 ml-3' : 'mr-2'}`}>
                      {point.icon}
                    </div>

                    <p className="text-sm font-medium text-gray-800">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default OurMission;