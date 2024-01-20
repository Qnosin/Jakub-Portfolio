import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Turn as Hamburger } from "hamburger-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Links from "./components/links";
import Heading from "./components/Heading";
import HeroImage from "./components/HeroImage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <main className="relative flex justify-center align-center w-full h-screen m-auto lg:block overflow-hidden  ">
        <RouterProvider router={router} />
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
              className="absolute left-0 bottom-0 w-40 z-[-1]"
              alt="svg-line"
            />
          </div>
        </div>
      </main>
    </>
  );
}

//Hamburger Menu styles and logic
const Root = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="hamburger absolute right-5 top-5 flex justify-end z-10  lg:hidden">
        <Hamburger color="#494B4D" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="nav-lg lg:flex hidden justify-end mr-5 mt-10">
        <Link className="text-[2.25rem] font-special m-5" to="/">
          Home
        </Link>
        <Link className="text-[2.25rem] font-special m-5" to="/portfolio">
          Portfolio
        </Link>
        <Link className="text-[2.25rem] font-special m-5" to="/contact">
          Contact
        </Link>
        <Link className="text-[2.25rem] font-special m-5" to="/about">
          About
        </Link>
      </div>
      {isOpen && (
        <div className="nav absolute w-full top-0 right-0 h-screen flex flex-col justify-center  items-center z-0 bg-[#D9D9D9] ">
          <Link className="text-[3rem] font-special m-5" to="/">
            Home
          </Link>
          <Link className="text-[3rem] font-special m-5" to="/portfolio">
            Portfolio
          </Link>
          <Link className="text-[3rem] font-special m-5" to="/contact">
            Contact
          </Link>
          <Link className="text-[3rem] font-special m-5" to="/about">
            About
          </Link>
          <div className="svg-image">
            <img
              src="../public/line2.png"
              className="absolute left-0 bottom-0 "
              alt="svg-line"
            />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default App;
