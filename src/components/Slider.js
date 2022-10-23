import React, { useRef } from "react";
import Slide from "./Slide";
import "./Slider.css";

export default function Slider(props) {
  const slider = useRef(null);
  let count = 0;

  function nextSlide(currentSlide) {
    if (
      currentSlide.current.scrollLeft <
      currentSlide.current.scrollWidth - currentSlide.current.offsetWidth
    ) {
      currentSlide.current.scrollLeft += currentSlide.current.offsetWidth;
    } else {
      currentSlide.current.scrollLeft = 0;
    }
  }

  function previosSlide(currentSlide) {
    if (currentSlide.current.scrollLeft > 0) {
      currentSlide.current.scrollLeft -= currentSlide.current.offsetWidth;
    } else {
      currentSlide.current.scrollLeft = currentSlide.current.scrollWidth;
    }
  }

  //mobile buttons slide previous e next
  function handleButtonsSlide(event) {
    //button previous slide
    if (event.target.classList.contains("Product-Images__button-Next-Slide")) {
      nextSlide(slider);
    } else {
      previosSlide(slider);
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
          handleButtonsSlide(event);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            handleButtonsSlide(event);
          }
        }}
      ></button>
      <ul
        className="Product-Images__list-Images-Product"
        ref={slider}
        aria-label="List All images from products"
      >
        {props.dataSlide.map((data) => {
          count += 1;
          return (
            <li className="Product-Images-item-Image" key={count}>
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
          handleButtonsSlide(event);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            handleButtonsSlide(event);
          }
        }}
      ></button>
    </div>
  );
}
