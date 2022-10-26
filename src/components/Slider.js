import React, { useRef} from "react";
import Slide from "./Slide";
import "./Slider.css";

export default function Slider(props) {
  const slider = useRef(null);

  function setCurrentSlide(event) {
    if (event.target.classList.contains("Product-Images__button-Next-Slide")) {
      if (
        slider.current.scrollLeft ===
        (slider.current.scrollWidth - slider.current.offsetWidth)
      ) {
        slider.current.scrollLeft = 0;
      } else {
        slider.current.scrollLeft += slider.current.offsetWidth;
      }
    }else{
      if (slider.current.scrollLeft === 0) {
        slider.current.scrollLeft = slider.current.scrollWidth;
      }else{
        slider.current.scrollLeft -= slider.current.offsetWidth;
      } 
    }
  }

  return (
    <div
      className="Product-Images__container-Slides"
      aria-live="assertive"
      aria-atomic="true"
    >
      <button
        type="button"
        className="Product-Images__button-Previous-Slide"
        aria-label="Button from previous Slide Image Products"
        value="Previous Slide"
        title="Previous Image Product"
        onPointerDown={(event) => {
          setCurrentSlide(event);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            setCurrentSlide(event);
          }
        }}
      ></button>
      <ul
        className="Product-Images__list-Images-Product"
        ref={slider}
        aria-label="List All images from products"
      >
        {props.dataSlide.map((data, index) => {
          return (
            <li className="Product-Images-item-Image" key={index}>
              <Slide
                imageSlide={data.url}
                descriptionImage={data.descriptionImage}
              />
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="Product-Images__button-Next-Slide"
        aria-label="Button from next Slide Image Products"
        value="Next Slide"
        title="Next Image Product"
        onPointerDown={(event) => {
          setCurrentSlide(event);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            setCurrentSlide(event);
          }
        }}
      ></button>
    </div>
  );
}
