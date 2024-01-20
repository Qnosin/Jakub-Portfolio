import React from "react";

function Project({ bgimg, techimg, desc, link, linkName }) {
  return (
    <div className="project p-6 mb-10 flex flex-col text-center justify-evenly items-center">
      <img
        src={`./public/${bgimg}.png`}
        className="w-[300px] h-[200px]"
        alt={`${bgimg}-png-photo`}
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
