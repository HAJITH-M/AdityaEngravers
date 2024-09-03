  import React from 'react';
  import { FaCog, FaTools, FaIndustry, FaAward } from 'react-icons/fa';

  const OurService = () => {
    const services = [
      { title: ['CNC Engraving', 'Engraving On Plastic Moulds', 'Manufacturing Of Stamping Wheels', 'Gauges & Barcodes Marking'], icon: <FaCog /> },
      { title: ['Metal Engraving', 'Engraving On Rubber Moulds', 'Name Plates Engraving'], icon: <FaTools /> },
      { title: ['Copper Engraving', 'Casting Dies', 'Brass & Metal Punches'], icon: <FaIndustry /> },
    ];

    const mainServices = [
      {
        title: "Metal Engraving",
        icon: "/images/metal-engraving-icon.png",
        description: "We offer expert Metal Engraving services on aluminum, copper, brass, and other nonferrous metals. Our team of skilled technocrats uses the latest machines to create precise and alluring designs that comply with industrial standards. We cater to both commercial and industrial business units, ensuring reliability and efficiency in every project."
      },
      {
        title: "Copper Engraving",
        icon: "/images/copper-engraving-icon.png",
        description: "Our Copper Engraving services utilize advanced techniques to create finer details and longer-lasting impressions. While more challenging than traditional methods, our expertise allows us to produce high-quality engravings that are perfect for book illustrations and other detailed work."
      },
      {
        title: "Plastic Moulds Engraving",
        icon: "/images/plastic-moulds-icon.png",
        description: "We specialize in cutting services for all types of plastics, including Nylon, Teflon, ABS, Polycarbonate, Cast Nylon, and Delrin. Our expert team follows engineering drawings to create precise cuts in various shapes and dimensions, ideal for plastic components and switches."
      },
      {
        title: "Rubber Moulds Engraving",
        icon: "/images/rubber-moulds-icon.png",
        description: "Our Rubber Moulds Engraving service involves creating cavities as per required samples and injecting heated rubber chemicals into the mould. We can work with multiple colors, injecting each one separately and allowing proper drying time in the oven."
      },
      {
        title: "Casting Dies",
        icon: "/images/casting-dies-icon.png",
        description: "We produce high-quality die castings for various non-ferrous metals, including zinc, copper, aluminum, magnesium, lead, pewter, and tin-based compounds. Our die cavities are crafted from hardened tool steel, machined to near-net shape for optimal results."
      },
      {
        title: "Stamping Wheels",
        icon: "/images/stamping-wheels-icon.png",
        description: "Our Manual Engraving services for Stamping Wheels can reproduce sharp face and flat face stamps with logos, trademarks, true type fonts, and symbols. We work with various steel types and hardnesses to achieve precision results."
      },
      {
        title: "Brass Punches",
        icon: "/images/brass-punches-icon.png",
        description: "We specialize in creating Brass Punches, which are excellent for leather work due to brass's conductive properties and quick heat distribution. Our dies are crafted to attain the required temperature within minutes, depending on thickness and leather base."
      },
      {
        title: "Metal Punches",
        icon: "/images/metal-punches-icon.png",
        description: "Our Metal Punches service includes creating both male (embossed) and female (debossed) dies. We use fixtures to place the dies on the appropriate rams, then press the sheet metal between them with the required pressure and height to achieve the desired result."
      }
    ];

    return (
      <section className="py-20  text-yellow-400">
        <div className=" mx-auto px-4">
          <h1 id="ourservice-title" className="text-4xl text-center pb-4 font-bold text-black dark:text-white mb-6">
            <span className="font-sans bg-gradient-to-r from-yellow-500 to-black text-transparent bg-clip-text">
              Our Services
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <div className="mb-4 text-4xl text-yellow-400">
                  <img src={service.icon} alt={`Service ${index + 1}`} className="w-16 h-16" />
                </div>

                {service.title.map((title, titleIndex) => (
                  <h3 key={titleIndex} className="text-xl font-semibold text-center mb-2 text-yellow-600">{title}</h3>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-16">
            <div className="bg-gray-800 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">High Achievement Always Takes Place in the Framework of Expectation</h3>
              <p className="mb-4 text-gray-300">In everything we do, we shall always work in a customer and objective oriented manner with clearly defined goals in terms of Quality of service. In all our professional areas, and at all levels, we shall carry out our duties skillfully, diligently and efficiently.</p>
              <p className="mb-4 text-gray-300">We are an engraving business alone, with no other sidelines, and therefore we have focused on developing our services to a high standard. We can prescribe you the benefit of Engraving which involves precision, reasonableness, quality, high determination and strength.</p>
              <p className="text-gray-300">Our Marking administrations can put your items with the words or logo you need to imprinting and get the completed item in as pretty much brief time.</p>
            </div>
          </div>
        
          <div className="mt-16 px-1">
            <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Our Main Services Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 flex items-start">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default OurService;