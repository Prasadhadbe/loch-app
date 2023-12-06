import React, { useRef, useState, useEffect } from "react";
import { tCardsArray } from "./Tcards";

const Testimonials = () => {
  const cardContainerRef = useRef(null);
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = cardContainerRef.current;

    const handleMouseDown = (e) => {
      setDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseLeave = () => {
      setDragging(false);
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // You can adjust the multiplier for a smoother scroll
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="footer-container">
      <div className="footer-label">Testimonials</div>
      <hr className="line"></hr>
      <div className="footer-widgets">
        <div className="widget-row">
          <div className="widget-logo">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="widget-data"
            ref={cardContainerRef}
            style={{
              display: "flex",
              overflowX: "hidden",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              width: "1200px",
              paddingRight: "10px",
            }}
          >
            {tCardsArray.map((card, index) => (
              <>{card()}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
