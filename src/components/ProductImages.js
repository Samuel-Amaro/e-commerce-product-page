import Slide from "./Slide";
import image1Thumbnail from "../images/image-product-1-thumbnail.jpg"; 
import image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import image4Thumbnail from "../images/image-product-4-thumbnail.jpg";
import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";

export default function ProductImages() {
    return (
      <div className="Product-Images">
        {/*Mobile view slideShow images*/}
        <div className="Product-Images__slide-Show" aria-live="assertive" aria-atomic="true">
          <button
            type="button"
            className="Product-Images__button-Previous-Slide"
            aria-label="Button from previous Slide Image Products"
          >
            <img src={iconPrevious} alt="" aria-hidden="true" />
          </button>
          <Slide
            imageSlide={image1Thumbnail}
            descriptionImage="Product sneakers, a pair of tennis shoes, the pair of the left foot standing on the tip with the sole being shown, and the pair of the right foot resting on a floor."
          />
          <Slide
            imageSlide={image2Thumbnail}
            descriptionImage="Product sneakers, a pair of sneakers, the right foot resting horizontally on two stones, the left foot pair semi-inclined, in front branches of a dry tree without leaves."
          />
          <Slide
            imageSlide={image3Thumbnail}
            descriptionImage="Product sneakers, a pair of sneakers, only the right foot on two horizontal stones, on an orange background"
          />
          <Slide
            imageSlide={image4Thumbnail}
            descriptionImage="Product sneakers, a pair of sneakers, only the left foot on two stones, horizontally, the pair this half on top of two stones the other half hanging out without any support. showing your side"
          />
          <button
            type="button"
            className="Product-Images__button-Next-Slide"
            aria-label="Button from next Slide Image Products"
          >
            <img src={iconNext} alt="" aria-hidden="true" />
          </button>
        </div>
        {/*desktop view lightbox gallery by clicking on the large product image*/}
      </div>
    );
}