    import React, { useState } from 'react'
    import { FaImage, FaExpand, FaTimes } from 'react-icons/fa'

    const imageData = [
      {
        id: 1,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Stamping-Wheels.jpg?updatedAt=1727276032172"
      },
      {
        id: 2,
        title: "Rubber Moulds",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Rubber-Moulds.jpg?updatedAt=1727276030285"
      },
      {
        id: 3,
        title: "Plastic Moulds",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Plastic-Moulds.jpg?updatedAt=1727276030098"
      },
      {
        id: 4,
        title: "Punches Metal 1",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Punches-Metal1.jpg?updatedAt=1727276030029"
      },
      {
        id: 5,
        title: "Punches Metal",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Punches-Metal.jpg?updatedAt=1727276029709"
      },
      {
        id: 6,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Metalpunches.jpg?updatedAt=1727276029697"
      },
      {
        id: 7,
        title: "Copper Engraving",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Copper-Engraving.jpg?updatedAt=1727276029669"
      },
      {
        id: 8,
        title: "Graduation Knob",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Graduation-Knob.jpg?updatedAt=1727276029568"
      },
      {
        id: 9,
        title: "Casting Die",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Casting-Die.jpg?updatedAt=1727276029521"
      },
      {
        id: 10,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/Metal-Punches.jpg?updatedAt=1727276029550"
      },
      {
        id: 11,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/Gallery/15-1.jpg?updatedAt=1727276029524"
      },
      // New images
      {
        id: 12,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.10_f2936f20.jpg"
      },
      {
        id: 13,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.10_83df53c3.jpg"
      },
      {
        id: 14,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.09_f441e127.jpg"
      },
      {
        id: 15,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.09_e1aae36d.jpg"
      },
      {
        id: 16,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.08_489141c9.jpg"
      },
      {
        id: 17,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.08_5eefbde5.jpg"
      },
      {
        id: 18,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.08_9e05f250.jpg"
      },
      {
        id: 19,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.09_07f49995.jpg"
      },
      {
        id: 20,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.07_cfaba71f.jpg"
      },
      {
        id: 21,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.07_5ae1ca7a.jpg"
      },
      {
        id: 22,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.07_353ac413.jpg"
      },
      {
        id: 23,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.07_2bad4d89.jpg"
      },
      {
        id: 24,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.05_fbac944b.jpg"
      },
      {
        id: 25,
        title: "Stamping Wheels",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.06_323d6882.jpg"
      },
      {
        id: 26,
        title: "Metal Punches",
        url: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.06_81e1f3ce.jpg"
      }
    ];
    

    const Gallery = () => {
      const [selectedImage, setSelectedImage] = useState(null)

      const openModal = (image) => {
        setSelectedImage(image)
      }

      const closeModal = () => {
        setSelectedImage(null)
      }

      return (
        <div className="container mx-auto px-4 py-8">

          <h1 className="text-4xl font-bold mb-8 text-center  bg-gradient-to-r from-yellow-500 to-black text-transparent bg-clip-text">
            <FaImage className="inline-block mr-3 mb-1 text-yellow-500" />
            Gallery
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
            {imageData.map((image) => (


              <div key={image.id} onClick={() => openModal(image)} className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 group relative">
                <img src={image.url} alt={image.title} className="w-full h-64 object-cover" />
                <div className="p-4">

                  <h2 className="text-xl font-semibold mb-3 text-gray-800">{image.title}</h2>







                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">Click to view in large</p>
                </div>
              </div>
            ))}
          </div>
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="max-w-4xl w-full mx-4">
                <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto rounded-lg shadow-2xl" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-gray-300 transition-colors duration-300"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
        </div>
      )
    }

    export default Gallery
