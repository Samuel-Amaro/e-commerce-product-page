import React, { useState } from "react";
import Slide from "./Slide";
import "./LightboxGallery.css";
import DemoThumbnail from "./DemoThumbnail";
import ModalGalleryLightbox from "./ModalGalleryLightbox";

export default function LightboxGallery(props) {
  let slidesLightbox = props.dataSlide.map((data) => {
    return (
      <Slide imageSlide={data.url} descriptionImage={data.descriptionImage} />
    );
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([slidesLightbox[slideIndex]]);
  const [imageIsPressed, setImageIsPressed] = useState(false);

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
      <div className="Product-Images__list-Images-Lightbox">
        {slides.map((slideElem) => {
          return (
            <div
              className="Product-Images-item-Lightbox"
              title="Open Lightbox Gallery Images"
              aria-label="Open Lightbox Gallery Images"
              aria-live="assertive"
              aria-atomic="true"
              aria-expanded="true"
              onPointerDown={(event) => {
                setImageIsPressed(true);
              }}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  setImageIsPressed(true);
                }
              }}
            >
              {slideElem}
            </div>
          );
        })}
      </div>
      <ul className={"Product-Images__list-Demos"}>
        {props.dataSlide.map((data, index) => {
          return (
            <DemoThumbnail
              setCurrentSlide={setCurrentSlide}
              index={data.index}
              thumbnail={data.thumbnail}
              key={index}
              slideIndex={slideIndex}
            />
          );
        })}
      </ul>
      {imageIsPressed ? (
        <ModalGalleryLightbox
          setImageIsPressed={setImageIsPressed}
          dataSlide={props.dataSlide}
        />
      ) : (
        ""
      )}
    </div>
  );
}
