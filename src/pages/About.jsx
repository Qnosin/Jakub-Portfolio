import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function About() {
  return (
    <section className="flex flex-col lg:flex-row justify-center align-center p-5 lg:max-w-5xl lg:m-auto relative  ">
      <div className="image mt-20 m-auto">
        <div className="abosulte__image">
          <img
            className="absolute hidden lg:block bottom-[-12rem] right-40 rotate-6"
            src="../public/about-tech.png"
            alt="tech"
          />
        </div>

        <div className="abosulte__image">
          <img
            className="absolute hidden lg:block top-[-5rem] left-0 rotate-12 "
            src="../public/Pillars.png"
            alt="tech"
          />
        </div>
        <LazyLoadImage
          className="w-80 opacity-90  rounded-lg"
          src="../public/me.jpg"
          effect="blur"
        />
      </div>
      <div className="about-me lg:max-w-md mt-5 lg:m-auto max-w-[300px] m-auto lg:flex lg:justify-center lg:align-center lg:flex-col ">
        <p className="text-center font-regular">
          👋 Hello there! I'm{" "}
          <span className="font-special text-xl ">Jakub</span>, a computer
          science student and a front-end developer with a professional
          background as a tech support engineer. In my current role, I thrive on
          helping individuals navigate the intricate landscape of IT
          infrastructure, ensuring that their needs are not just met but truly
          understood.
        </p>
        <p className="text-center font-regular mt-5 lg:mt-10">
          🚀 Always up for a tech thrill, I love diving into the latest and
          greatest in the digital realm. Whether it's tinkering with new
          frameworks, giving my design skills a facelift, or riding the wave of
          emerging trends, I'm all about keeping it fresh.
        </p>
      </div>
    </section>
  );
}
