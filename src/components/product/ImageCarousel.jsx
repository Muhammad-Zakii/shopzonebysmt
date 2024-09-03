import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import the icons

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel relative rounded-lg overflow-hidden mt-10">
      <div className="image-carousel-container w-full h-96 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-carousel-slide absolute inset-0 transition-transform transform ${
              index === activeIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-button prev left-4 top-1/2 transform -translate-y-1/2"
        onClick={handlePrev}
      >
        <FaChevronLeft size={32} color="white" />
      </button>
      <button
        className="carousel-button next right-4 top-1/2 transform -translate-y-1/2"
        onClick={handleNext}
      >
        <FaChevronRight size={32} color="white" />
      </button>
    </div>
  );
};

export default ImageCarousel;
