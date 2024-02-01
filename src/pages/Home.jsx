import Links from "../components/Links";
import Heading from "../components/Heading";
import HeroImage from "../components/HeroImage";


export default function Home() {
  return (
    <>
      <main className="relative flex justify-center align-center w-full h-screen lg:h-[calc(100vh-135px)]  m-auto lg:block overflow-hidden z-[0]">
        <div className="container p-4 lg:pr-10 lg:pl-10    max-w-[425px] lg:w-full lg:max-w-5xl  2xl:max-w-7xl flex justify-center align-center flex-col m-auto  ">
          <div className="svg-image lg:hidden">
            <img
              src="../public/line.png"
              className="absolute left-0 top-0 w-52 z-[-1]"
              alt="svg-line"
            />
          </div>
          <section className="main-content mt-20 ">
            <Heading />
            <Links />
            <HeroImage />
          </section>
          <div className="svg-image">
            <img
              src="../public/line3.png"
              className="absolute left-0 bottom-0 w-40 lg:w-60 z-[-1]"
              alt="svg-line"
            />
          </div>
        </div>
      </main>
    </>
  );
}
