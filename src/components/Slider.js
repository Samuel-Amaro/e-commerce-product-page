import React, { useRef, useState } from "react";
import Slide from "./Slide";
import "./Slider.css";

export default function Slider(props) {
  const slider = useRef(null);
  let count = 0;
  const storageSlidesCarrousel = props.dataSlide.map((data) => {
    count += 1;
    return (
      <li className="Product-Images-item-Image" key={count}>
        <Slide imageSlide={data.url} descriptionImage={data.descriptionImage} />
      </li>
    );
  });
  const [currentIndexCarrousel, setCurrentIndexCarrousel] = useState(0);
  const [slides, setSlides] = useState([storageSlidesCarrousel[currentIndexCarrousel]]);

  function setCurrentSlide(index) {
    //vai para o primeiro slide
    if(index > (storageSlidesCarrousel.length - 1)) {
      setCurrentIndexCarrousel(0);
      setSlides([storageSlidesCarrousel[0]]);
    }else if (index < 0) {
      //vai para o ultimo slide
      setCurrentIndexCarrousel(storageSlidesCarrousel.length - 1);
      setSlides([storageSlidesCarrousel[storageSlidesCarrousel.length - 1]]);
    }else{
      setCurrentIndexCarrousel(index);
      setSlides([storageSlidesCarrousel[index]]);
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
          setCurrentSlide(currentIndexCarrousel - 1);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            setCurrentSlide(currentIndexCarrousel - 1);
          }
        }}
      ></button>
      <ul
        className="Product-Images__list-Images-Product"
        ref={slider}
        aria-label="List All images from products"
      >
        {slides}
      </ul>
      <button
        type="button"
        className="Product-Images__button-Next-Slide"
        aria-label="Button from next Slide Image Products"
        value="Next Slide"
        title="Next Image Product"
        onPointerDown={(event) => {
          setCurrentSlide(currentIndexCarrousel + 1);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            setCurrentSlide(currentIndexCarrousel + 1);
          }
        }}
      ></button>
    </div>
  );
}
