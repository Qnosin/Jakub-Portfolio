import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HeroImage() {
  return (
    <section className="hero-image flex justify-between items-center mt-10 lg:mt-0 ">
      <img
        className="hidden lg:block h-[250px] "
        src="./public/myskilss.png"
        alt=""
      />

      <LazyLoadImage
        className="lg:hidden"
        src="./public/Hero-Image.png"
        PlaceholderSrc="./public/Hero-Image-blur.jxl"
        effect="blur"
      />

      <LazyLoadImage
        className="hidden lg:block 2xl:hidden h-[400px]"
        src="./public/Hero-Image.png"
        PlaceholderSrc="./public/Hero-Image-blur.jxl"
        effect="blur"
      />

      <LazyLoadImage
        className="hidden 2xl:block h-[550px]"
        src="./public/Hero-Image-big.png"
        PlaceholderSrc="./public/Hero-Image-big-blur.jxl"
        effect="blur"
      />
    </section>
  );
}

export default HeroImage;
