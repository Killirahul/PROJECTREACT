import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

function Frontpage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/image3.webp",
    "/image2.jpg",
    "image5.jpg",
    "/image1.webp",
    "/image6.avif",
    "/image4.jpg",
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 3000); 
   
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="main" style={{ position: "relative" }}>
      <div className="custom-carousel">
        <img
          src={slides[currentSlide]}
          style={{ width: "1500px", height: "800px" }}
          alt={`slide-${currentSlide + 1}`}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 1,
          }}
        >
          <h2 style={{ color: "white", marginBottom: "10px" }}>
           <i> ELEGANZO <FontAwesomeIcon icon={faHandPeace} style={{ marginRight: '5px' }} /></i>
          </h2>
          <Link to="home">
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;

