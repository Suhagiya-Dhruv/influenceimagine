import React, { useRef, useState } from "react";

// Import all 33 logos
import logo1 from "../../logos/01.png";
import logo2 from "../../logos/02.png";
import logo3 from "../../logos/03.png";
import logo4 from "../../logos/04.png";
import logo5 from "../../logos/05.png";
import logo6 from "../../logos/06.png";
import logo7 from "../../logos/07.png";
import logo9 from "../../logos/09.png";
import logo10 from "../../logos/10.png";
import logo11 from "../../logos/11.png";
import logo12 from "../../logos/12.png";
import logo13 from "../../logos/13.png";
import logo14 from "../../logos/14.png";
import logo15 from "../../logos/15.png";
import logo16 from "../../logos/16.png";
import logo17 from "../../logos/17.png";
import logo18 from "../../logos/18.png";
import logo19 from "../../logos/19.png";
import logo20 from "../../logos/20.png";
import logo21 from "../../logos/21.png";
import logo22 from "../../logos/22.png";
import logo23 from "../../logos/23.png";
import logo24 from "../../logos/24.png";
import logo25 from "../../logos/25.png";
import logo26 from "../../logos/26.png";
import logo27 from "../../logos/27.png";
import logo28 from "../../logos/28.png";
import logo29 from "../../logos/29.png";
import logo30 from "../../logos/30.png";
import logo31 from "../../logos/31.png";
import logo32 from "../../logos/32.png";
import logo33 from "../../logos/33.png";
import logo34 from "../../logos/34.png";
import logo35 from "../../logos/35.png";
import logo36 from "../../logos/36.png";
import logo37 from "../../logos/37.png";
import logo38 from "../../logos/38.png";
import logo39 from "../../logos/39.png";
import logo40 from "../../logos/40.png";
import logo41 from "../../logos/41.png";
import logo42 from "../../logos/42.png";
import logo43 from "../../logos/43.png";
import logo44 from "../../logos/44.png";
import logo45 from "../../logos/45.png";
import logo46 from "../../logos/46.png";
import logo47 from "../../logos/47.png";
import logo48 from "../../logos/48.png";
import logo49 from "../../logos/49.png";
import logo50 from "../../logos/50.png";
import logo51 from "../../logos/51.png";
import logo52 from "../../logos/52.png";

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo9, logo10, logo11,
    logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29,
    logo30, logo31, logo32, logo33,logo34, logo35, logo36, logo37, logo38, logo39, logo40,
  logo41, logo42, logo43, logo44, logo45, logo46, logo47, logo48, logo49, logo50,
  logo51, logo52,
  ];

  // Drag + Swipe logic
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <style>{`
        .logo-slider {
          overflow: hidden;
          background: #fff;
          display: flex;
          align-items: center;
          height: 150px;
          cursor: grab;
        }

        .logo-slider:active {
          cursor: grabbing;
        }

        .slide-track {
          display: flex;
          gap: 0; /* removes spacing between slides */
          animation: scroll 200s linear infinite;
        }

        .slide {
          flex: 0 0 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          user-select: none;
        }

        .slide img {
          width: 180px;
          height: auto;
          filter: grayscale(100%);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .slide img:hover {
          filter: grayscale(0);
          transform: scale(1.05);
        }

        /* Infinite seamless scroll animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .slide {
            flex: 0 0 180px;
            padding: 0 20px;
          }
          .slide img {
            width: 120px;
          }
        }

        @media (max-width: 480px) {
          .logo-slider {
            height: 80px;
          }
          .slide {
            flex: 0 0 140px;
            padding: 0 10px;
          }
          .slide img {
            width: 90px;
          }
        }
      `}</style>

      <div
        className="logo-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <div className="slide-track">
          {/* 2 copies back-to-back to make infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
