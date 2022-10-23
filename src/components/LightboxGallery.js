import React, {useRef} from "react";
import Slide from "./Slide";
import "./LightboxGallery.css";

export default function LightboxGallery(props) {
  let count = 0;
  const lightbox = useRef(null);

  function nextSlide() {
    console.log("ScrollLeft: " + lightbox.current.scrollLeft);
    console.log("ScrollWidth: " + lightbox.current.scrollWidth);
    console.log("offsetWidth: " + lightbox.current.offsetWidth);
    //ideia, para evitar varios cliques, e fazer algotimo para descobrir quando clico duas vezes seguida se preciso andar ou não
    //onde estou atualmente, em qual slide estou e se tem muitos a frente ou atras
    //posição atual do slide
    let currentSlide = lightbox.current.scrollLeft;
    /*if (
      currentSlide.current.scrollLeft <
      currentSlide.current.scrollWidth - currentSlide.current.offsetWidth
    ) {
      currentSlide.current.scrollLeft += currentSlide.current.offsetWidth;
    } else {
      currentSlide.current.scrollLeft = 0;
    }
    */
  }

  function previosSlide(currentSlide) {
    if (currentSlide.current.scrollLeft > 0) {
      currentSlide.current.scrollLeft -= currentSlide.current.offsetWidth;
    } else {
      currentSlide.current.scrollLeft = currentSlide.current.scrollWidth;
    }
  }

  let previosTargetElem = null;

  //demos slide desktop
  function handleDemosSlide(event) {
    /*if(previosTargetElem !== event.target && previosTargetElem !== null) {
        nextSlide(lightbox);
    }
    previosTargetElem = event.target;
    */
   nextSlide(lightbox);
  }

  return (
    <div className="Product-Images__lightbox-Gallery">
      {/*cada clique em um demo tem que correponder a uma imagem de produto clicado*/}
      <ul className="Product-Images__list-Images-Lightbox" ref={lightbox}>
        {props.dataSlide.map((data) => {
          count += 1;
          return (
            <li className="Product-Images-item-Lightbox" key={count}>
              <Slide
                imageSlide={data.url}
                descriptionImage={data.descriptionImage}
              />
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
              onPointerDown={(event) => {
                handleDemosSlide(event);
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
