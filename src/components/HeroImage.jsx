import React from "react";

function HeroImage() {
  return (
    <section className="hero-image flex justify-end mt-10 lg:mt-0 ">
      <img className="lg:hidden" src="./public/Hero-Image.png" alt="" />
      <img
        className="hidden lg:block 2xl:hidden h-[400px]"
        src="./public/Hero-Image-big.png"
        alt=""
      />

      <img
        className="hidden 2xl:block h-[500px]"
        src="./public/Hero-Image-big.png"
        alt=""
      />
    </section>
  );
}

export default HeroImage;
