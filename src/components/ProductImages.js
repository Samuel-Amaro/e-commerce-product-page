import React from "react";
import "./ProductImages.css";
import Slider from "./Slider";
import LightboxGallery from "./LightboxGallery";

export default function ProductImages() {

  let dataSlide = [
    {
      index: 0,
      url: "/images/image-product-1.jpg",
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      descriptionImage:
        "Product sneakers, a pair of tennis shoes, the pair of the left foot standing on the tip with the sole being shown, and the pair of the right foot resting on a floor.",
    },
    {
      index: 1,
      url: "/images/image-product-2.jpg",
      thumbnail: "/images/image-product-2-thumbnail.jpg",
      descriptionImage:
        "Product sneakers, a pair of sneakers, the right foot resting horizontally on two stones, the left foot pair semi-inclined, in front branches of a dry tree without leaves.",
    },
    {
      index: 2,
      url: "/images/image-product-3.jpg",
      thumbnail: "/images/image-product-3-thumbnail.jpg",
      descriptionImage:
        "Product sneakers, a pair of sneakers, only the right foot on two horizontal stones, on an orange background",
    },
    {
      index: 3,
      url: "/images/image-product-4.jpg",
      thumbnail: "/images/image-product-4-thumbnail.jpg",
      descriptionImage:
        "Product sneakers, a pair of sneakers, only the left foot on two stones, horizontally, the pair this half on top of two stones the other half hanging out without any support. showing your side",
    },
  ];

  return (
    <div className="Product-Images">
      {/*Mobile view slideShow images*/}
      {<Slider dataSlide={dataSlide} />}
      {/*desktop view lightbox gallery by clicking on the large product image*/}
      {<LightboxGallery dataSlide={dataSlide} />}
    </div>
  );
}
