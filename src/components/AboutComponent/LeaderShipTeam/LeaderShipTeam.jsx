  import React from 'react';
  import { FaLinkedin, FaTwitter } from 'react-icons/fa';

  const LeadershipTeam = () => {
    const leaders = [
      {
        name: 'John Doe',
        role: 'CEO',
        image: '/path/to/john-doe-image.jpg',
        linkedin: 'https://www.linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
      {
        name: 'Jane Smith',
        role: 'CTO',
        image: '/path/to/jane-smith-image.jpg',
        linkedin: 'https://www.linkedin.com/in/janesmith',
        twitter: 'https://twitter.com/janesmith',
      },
    ];

    return (
      <section className="py-14 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600">
              Meet the visionaries behind our success
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
              {leaders.map((leader, index) => (
                <li key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="flex flex-col items-center p-6">
                    <img
                      src={leader.image}
                      className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                      alt={leader.name}
                    />
                    <h4 className="text-xl font-semibold">{leader.name}</h4>
                    <p className="text-gray-600 mb-4">{leader.role}</p>
                    <div className="flex gap-4">
                      <a href={leader.linkedin} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                        <FaLinkedin size={24} />
                      </a>
                      <a href={leader.twitter} className="text-blue-400 hover:text-blue-600 transition-colors duration-300">
                        <FaTwitter size={24} />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };

  export default LeadershipTeam;
