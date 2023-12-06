// Your InfoCarousel component
import React from "react";
import { cardsArray } from "./Infocards";
import "./info.css";

const InfoCarousel = () => {
  //   const [index, setIndex] = useState(0);
  //   const delay = 3000;

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setIndex((prevIndex) => (prevIndex + 1) % cardsArray.length);
  //     }, delay);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

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

    // <div className="carousel-container">
    //   <div className="carousel-cards" style={{ "--index": index }}>
    //     {cardsArray.map((Card, cardIndex) => (
    //       <div
    //         key={cardIndex}
    //         className={`slide ${cardIndex === index ? "active" : ""}`}
    //       >
    //         {Card()}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default InfoCarousel;
