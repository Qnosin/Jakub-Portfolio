import React from "react";

function Links() {
  return (
    <section className="links flex mt-2 align-center">
      <div className="link  lg:z-0 mr-5 text-center relative ">
        <a
          className="font-regular text-[0.8rem] lg:text-[1.25rem]"
          href="https://github.com/Qnosin"
          target="_blank"
        >
          Github
        </a>
        <div className="line ">
          <img src="./public/line1.png" alt="svg-effect" />
        </div>
      </div>
      <div className="link  lg:z-0 mr-5 text-center relative cursor-pointer ">
        <a
          className="font-regular cursor-pointer text-[0.8rem] lg:text-[1.25rem]"
          href="https://www.linkedin.com/in/jakubputaj/"
          target="_blank"
        >
          Linkedin
        </a>
        <div className="line">
          <img src="./public/line1.png" alt="svg-effect" />
        </div>
      </div>
      <div className="btn btn-contact z-1 text-[1rem] 2xl:text-[1.5rem] font-special pt-2 pb-2 pr-2 pl-2 bg-[#D9D9D9] text-center rounded-md shadow cursor-pointer tracking-wide ">
        <a href="mailto:putaj.jakub@gmail.com">Contact Me.</a>
      </div>
    </section>
  );
}

export default Links;
