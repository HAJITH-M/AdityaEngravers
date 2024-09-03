
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AboutContent = () => {
  return (
    <div className="container mx-auto w-[95%] py-8 ">
      <div className="flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src="/path-to-your-image.jpg"
            alt="Brighten Industrial Image"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-2/3 lg:pl-8">
          <h2 className="text-3xl font-bold mb-6">Who we are</h2>
          <p className="mb-4">
            We are experts in long-lasting and economic marking of industrial parts to help eliminate forgery. We have been developing and manufacturing high-quality systems for Engraving on Plastic Moulds, Engraving on Rubber Moulds and Indexing Works for over 25 years. We can address our clients' issues exclusively and precisely.
          </p>
          <p className="mb-6">
            Here at Brighten, our work philosophy focuses on Sincerity and Harmoniousness. We believe that to be the key in building healthy and long-lasting business relationships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Experience
              </h3>
              <p>With more than 25 years in the trade, our team is expertise with the often demanding standards and tight deadlines required of us.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Precision
              </h3>
              <p>Our products are often required to fit onto existing jigs or layouts, and our level of accuracy has yet received a single complaint.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Reliability
              </h3>
              <p>Judging from our reject rate (close to none), we have confidence that our offered solutions will best suit your demands and requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" />
                Quality
              </h3>
              <p>We rarely use second-rate products. Our acrylics are from France, tape used are from 3M, and machineries from Europe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
