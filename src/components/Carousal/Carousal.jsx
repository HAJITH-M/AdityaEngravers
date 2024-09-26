import React from 'react';
import { Carousel } from 'flowbite-react';

// Define custom theme
const customTheme = {
  indicators: {
    active: {
      off: "bg-white hover:bg-white dark:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-1 group-focus:ring-white sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white sm:h-6 sm:w-6",
  },
};

const CarouselComponent = () => {
  const images = [
    {
      src: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.09_f441e127.jpg",
      alt: "Carousel image 4",
    },
    {
      src: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.04_4ba49182.jpg",
      alt: "Carousel image 2",
    },
    {
      src: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.07_353ac413.jpg",
      alt: "Carousel image 3",
    },
    {
      src: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.09_f441e127.jpg",
      alt: "Carousel image 4",
    },
    {
      src: "https://ik.imagekit.io/k5gvskw6y/Aditya%20Engravers/gal%20new/WhatsApp%20Image%202024-09-26%20at%2013.49.07_2bad4d89.jpg",
      alt: "Carousel image 1",
    },
  ];

  return (
    <section className="mt-10 md:mt-16 w-4/5 mx-auto h-80 md:w-5/6 md:h-[50vh] lg:h-[60vh]" aria-label="Image Carousel">
      <Carousel theme={customTheme}>
        {images.map((image, idx) => (
          <img key={idx} src={image.src} alt={image.alt} loading="lazy" className='object-contain ' />
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
