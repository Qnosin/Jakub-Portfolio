import React from "react";
import Project from "../components/Project";
import { useContext } from "react";
import { MyContext } from "../store/MyContext";

export default function Portfolio() {
  const { isOpen } = useContext(MyContext);

  return (
    <main className={`main mt-20 ${isOpen && "hidden"}`}>
      <h1 className="font-special text-[3rem] mb-10 text-center">Projects</h1>
      <section className="Portfolio lg:grid lg:grid-cols-2 lg:max-w-[1026px] lg:mx-auto ">
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
          link={"https://prusak.net.pl/"}
          linkName={"prusak.net.pl"}
        />

        <Project
          bgimg={"project3"}
          techimg={"tech-stack-3"}
          desc={
            "Website for my client, AJOD – Accounting in real estate, serves as a digital business card to highlight the company professional services"
          }
          link={"https://ajod.pl/"}
          linkName={"ajod.pl"}
        />


        <Project
          bgimg={"project4"}
          techimg={"tech-stack-4"}
          desc={
            "This project is a custom CMS built with PHP, featuring a login and registration system along with full CRUD operations for managing posts"
          }
          link={"https://github.com/Qnosin/Procedural-CMS"}
          linkName={"procedural-cms.com"}
        />
      </section>
    </main>
  );
}
