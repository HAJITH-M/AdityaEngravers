
import React from 'react';
import { FaTrophy, FaAward, FaMedal } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    { year: 2015, title: "High Sherriff Of Merseyside Award", icon: FaTrophy },
    { year: 2014, title: "Spear's Wealth Management Awards", icon: FaAward },
    { year: 2012, title: "HMP Wandsworth Award", icon: FaMedal },
    { year: 2008, title: "Institute of Directors Chair's Special Award", icon: FaTrophy },
    { year: 2008, title: "100 Best Workplaces India", icon: FaAward },
    { year: 2007, title: "Business Times- Service Of The Year", icon: FaMedal },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-black text-3xl font-extrabold sm:text-4xl">
            Our Awards
          </h3>
          <p className="mt-3">
            We're proud of our achievements and recognition in the industry.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg text-black font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-extrabold text-black mb-4">We Work For You!</h2>
          <p className="text-gray-600">

            We offer a <span className="font-semibold">wide choice of engraving administration</span> for all you're etching needs. We give <span className="font-semibold">amazing engraving plastic and rubber moulds, stock, plates, text styles, starter units, and chip evacuation frameworks</span>. However, this is not our complete selection, if you need <span className="font-semibold">anything for your project</span> that you don't see here, <span className="font-semibold">please contact us</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Awards;

