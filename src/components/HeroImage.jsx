import React from "react";

function HeroImage() {
  return (
    <section className="hero-image flex justify-between items-center mt-10 lg:mt-0 ">
      <img
        className="hidden lg:block h-[250px] "
        src="./public/myskilss.png"
        alt=""
      />

      <img className="lg:hidden" src="./public/Hero-Image.png" alt="" />
      <img
        className="hidden lg:block 2xl:hidden h-[400px]"
        src="./public/Hero-Image-big.png"
        alt=""
      />

      <img
        className="hidden 2xl:block h-[550px]"
        src="./public/Hero-Image-big.png"
        alt=""
      />
    </section>
  );
}

export default HeroImage;
