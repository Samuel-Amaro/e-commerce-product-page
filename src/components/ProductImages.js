import Slide from "./Slide";
/*import image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../images/image-product-4-thumbnail.jpg";
*/
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
import React, { useState, useRef } from "react";
import "./ProductImages.css";

export default function ProductImages() {
  const slider = useRef(null);
  let count = 0;
  let dataSlide = [
    {
      url: "../images/image-product-1.jpg",
      descriptionImage:
        "Product sneakers, a pair of tennis shoes, the pair of the left foot standing on the tip with the sole being shown, and the pair of the right foot resting on a floor.",
    },
    {
      url: "../images/image-product-2.jpg",
      descriptionImage:
        "Product sneakers, a pair of sneakers, the right foot resting horizontally on two stones, the left foot pair semi-inclined, in front branches of a dry tree without leaves.",
    },
    {
      url: "../images/image-product-3.jpg",
      descriptionImage:
        "Product sneakers, a pair of sneakers, only the right foot on two horizontal stones, on an orange background",
    },
    {
      url: "../images/image-product-4.jpg",
      descriptionImage:
        "Product sneakers, a pair of sneakers, only the left foot on two stones, horizontally, the pair this half on top of two stones the other half hanging out without any support. showing your side",
    },
  ];

  function nextSlide(n) {
    
  }

  function handleButtonsSlide(event) {
    //button previous slide
    if (event.target.classList.contains("Product-Images__button-Next-Slide")) {
      slider.current.scrollLeft += slider.current.offsetWidth;
    } else {
      slider.current.scrollLeft -= slider.current.offsetWidth;
    }
  }

  return (
    <div className="Product-Images">
      {/*Mobile view slideShow images*/}
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
          onPointerDown={(event) => {
            handleButtonsSlide(event);
          }}
        >
          {/*<img src={iconPrevious} alt="" aria-hidden="true" />*/}
        </button>
        <ul className="Product-Images__list-Images-Product" ref={slider}>
          {dataSlide.map((data) => {
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
          onPointerDown={(event) => {
            handleButtonsSlide(event);
          }}
        >
          {/*<img src={iconNext} alt="" aria-hidden="true" />*/}
        </button>
      </div>
      {/*desktop view lightbox gallery by clicking on the large product image*/}
    </div>
  );
}
