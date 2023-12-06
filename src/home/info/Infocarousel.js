// Your InfoCarousel component
import React from "react";
import { cardsArray } from "./Infocards";
import "./info.css";

const InfoCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {cardsArray.map((Card, cardIndex) => (
          <div key={`first-${cardIndex}`}>{Card()}</div>
        ))}
        {cardsArray.map((Card, cardIndex) => (
          <div key={`second-${cardIndex}`}>{Card()}</div>
        ))}
      </div>
    </div>
  );
};

export default InfoCarousel;
