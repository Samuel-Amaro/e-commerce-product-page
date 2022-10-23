import React, { useState } from "react";
import Slide from "./Slide";
import "./LightboxGallery.css";

export default function LightboxGallery(props) {
  let count = 1;
  let slidesLightbox = props.dataSlide.map((data) => {
    return (
      <Slide imageSlide={data.url} descriptionImage={data.descriptionImage} />
    );
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([slidesLightbox[slideIndex]]);

  function setCurrentSlide(index) {
    //vai para primeiro slide
    if (index > slidesLightbox.length) {
      setSlideIndex(0);
      setSlides([slidesLightbox[0]]);
    }
    //vai para o ultimo slide
    if (index < 1) {
      setSlideIndex(slidesLightbox.length - 1);
      setSlides([slidesLightbox[slidesLightbox.length - 1]]);
    }
    //seta slide comun entre inicio e fim
    setSlideIndex(index);
    setSlides([slidesLightbox[index]]);
  }

  return (
    <div className="Product-Images__lightbox-Gallery">
      {/*cada clique em um demo tem que correponder a uma imagem de produto clicado*/}
      <ul className="Product-Images__list-Images-Lightbox">
        {slides.map((slideElem) => {
          count += 1;
          return (
            <li className="Product-Images-item-Lightbox" key={count}>
              {slideElem}
            </li>
          );
        })}
      </ul>
      <ul className="Product-Images__list-Demos">
        {props.dataSlide.map((data) => {
          count += 1;
          return (
            <li
              className="Product-Images__item-Demo"
              key={count}
              tabIndex="0"
              title="Toggle to image"
              onPointerDown={(event) => {
                setCurrentSlide(data.index)
              }}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  setCurrentSlide(data.index);
                }
              }}
            >
              <img src={data.thumbnail} alt="" aria-hidden="true" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
