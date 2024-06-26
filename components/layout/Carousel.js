
"use client"
// components/CardSlider.js
// components/CardSlider.js
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="card-slider">
      <div className="cards-container" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`card`}>
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={goToPrev}><IoIosArrowBack /></button>
        <button onClick={goToNext}><IoIosArrowForward /></button>
      </div>
    </div>
  );
};

export default Carousel;

