import "./ModalGalleryLightbox.css";
import React, { useState} from "react";
import Slide from "./Slide";

export default function ModalGalleryLightbox(props) {
  const storageSlidesCarrousel = props.dataSlide.map((data) => {
    return (
      <div className="ModalGalleryLightbox__item-Image">
        <Slide imageSlide={data.url} descriptionImage={data.descriptionImage} />
      </div>
    );
  });
  const [currentIndexCarrousel, setCurrentIndexCarrousel] = useState(0);
  const [slides, setSlides] = useState([
    storageSlidesCarrousel[currentIndexCarrousel],
  ]);

  function setCurrentSlide(index) {
    //vai para o primeiro slide
    if (index > storageSlidesCarrousel.length - 1) {
      setCurrentIndexCarrousel(0);
      setSlides([storageSlidesCarrousel[0]]);
    } else if (index < 0) {
      //vai para o ultimo slide
      setCurrentIndexCarrousel(storageSlidesCarrousel.length - 1);
      setSlides([storageSlidesCarrousel[storageSlidesCarrousel.length - 1]]);
    } else {
      setCurrentIndexCarrousel(index);
      setSlides([storageSlidesCarrousel[index]]);
    }
  }

  return (
    <div className="ModalGalleryLightbox">
      <div className="ModalGalleryLightbox__content">
        <button
          className="ModalGalleryLightbox__btn-Close"
          type="button"
          title="Close Modal Gallery Lightbox"
          aria-label="Button Close Modal Gallery Lightbox"
          onPointerDown={(event) => {
            props.setImageIsPressed(false);
          }}
          onKeyDown={(event) => {
            if (event.code === "Enter") {
              props.setImageIsPressed(false);
            }
          }}
        ></button>
        <div
          className="ModalGalleryLightbox__slider"
          aria-label="List All images from products"
          aria-live="assertive"
          aria-atomic="true"
        >
          <button
            type="button"
            className="ModalGalleryLightbox__button-Previous-Slide"
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
          <div
            className="ModalGalleryLightbox__list-Images-Product"
            aria-live="assertive"
            aria-atomic="true"
          >
            {slides}
          </div>
          <button
            type="button"
            className="ModalGalleryLightbox__button-Next-Slide"
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
        <ul className={"ModalGalleryLightbox__list-Demos"}>
          {props.dataSlide.map((data, index) => {
            return (
              <li
                className={
                  currentIndexCarrousel === data.index
                    ? "ModalGalleryLightbox__item-Demo ModalGalleryLightbox__item-Demo_active"
                    : "ModalGalleryLightbox__item-Demo"
                }
                tabIndex="0"
                key={index}
                title="Toggle to image"
                onPointerDown={(event) => {
                  setCurrentSlide(data.index);
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
    </div>
  );
}
