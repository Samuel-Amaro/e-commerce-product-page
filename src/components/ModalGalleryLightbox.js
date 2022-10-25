import "./ModalGalleryLightbox.css";
import DemoThumbnail from "./DemoThumbnail";
import imageTeste from "../images/image-product-1.jpg";
import React, {useState} from "react";
import Slide from "./Slide";

export default function ModalGalleryLightbox(props) {
  let count = 0;
  const storageSlidesCarrousel = props.dataSlide.map((data) => {
    count += 1;
    let image = new Image();
    image.src = data.url;
    image.alt = data.descriptionImage;

    return (
      <div className="ModalGalleryLightbox__item-Image" key={count}>
        <Slide imageSlide={image.src} descriptionImage={image.alt} />
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
          className="ModalGalleryLightbox__list-Images-Product"
          //ref={slider}
          aria-label="List All images from products"
          aria-live="assertive"
          aria-atomic="true"
        >
          {slides}
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
        <ul className={"Product-Images__list-Demos"}>
          {props.dataSlide.map((data, index) => {
            return (
              <DemoThumbnail
                //setCurrentSlide={setCurrentSlide}
                index={data.index}
                thumbnail={data.thumbnail}
                key={index}
                //slideIndex={slideIndex}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
