import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Efficiency from "/Efficiency.svg";
import Security from "/Security.svg";
import Simplicity from "/Simplicity.svg";

function Carousel() {
  const [CurrentINdex, SetCurrentIndex] = useState(0);
  const images = [Simplicity, Efficiency, Security];
  const navigate = useNavigate();
  const handleInteraction = () => {
    if (CurrentINdex === images.length - 1) {
      navigate("/Home");
    } else {
      SetCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <main
        className="bg-[#FAF7F2] flex justify-center flex-col  items-center h-screen sm:h-screen  w-[screen] "
        onClick={handleInteraction}
      >
        <div className="bg-white  h-[400px] w-[250px]">
          <img src={images[CurrentINdex]} alt={`slide ${CurrentINdex}`} />
        </div>
        <div className="flex space-x-2 mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === CurrentINdex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Carousel;
