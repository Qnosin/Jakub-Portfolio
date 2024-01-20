import React from "react";
import Project from "../components/Project";
export default function Portfolio() {
  return (
    <main className="main mt-20 ">
      <h1 className="font-special text-[3rem] mb-10 text-center">Projects</h1>
      <section className="Portfolio lg:flex lg:flex-row lg:m-auto lg:justify-center">
        <Project
          bgimg={"project1"}
          techimg={"tech-stack-1"}
          desc={
            "A Blog website design and coded by my. With this project i learn how to make Wordpress theme from scratch and utilize it with a wordpress backend api"
          }
          link={"https://karix.net"}
          linkName={"karix.net"}
        />
        <Project
          bgimg={"project2"}
          techimg={"tech-stack-2"}
          desc={
            "A portfolio website, This project was mainly focus on estatic and design rather then coding and tech stack"
          }
          link={"https://www.dmprusak.pl/"}
          linkName={"dmprusak.pl"}
        />

        <Project
          bgimg={"project3"}
          techimg={"tech-stack-3"}
          desc={
            "A side project website, project to contact potentional customers"
          }
          link={"https://webcord.pl/"}
          linkName={"webcord.pl"}
        />
      </section>
    </main>
  );
}
