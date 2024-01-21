import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Project({ bgimg, techimg, desc, link, linkName }) {
  return (
    <div className="project p-6 mb-10 flex flex-col text-center justify-evenly items-center">
      <LazyLoadImage
        src={`./public/${bgimg}.png`}
        className="w-[300px] h-[200px]"
        alt={`${bgimg}-png-photo`}
        PlaceholderSrc={`./public/${bgimg}.jpg`}
        effect="blur"
      />

      <h2 className="heading font-regular m-2 underline">
        <a href={`${link}`} target="_blank">
          {linkName}
        </a>
      </h2>
      <p className="desc max-w-[425px] font-regular">{desc}</p>
      <p className="tech-stack">
        <img src={`./public/${techimg}.png`} alt="technology used to build" />
      </p>
    </div>
  );
}

export default Project;
