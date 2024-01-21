import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { Turn as Hamburger } from "hamburger-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { MyContext } from "./store/MyContext";
import { useContext } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <section className="content animate-fade">
        <MyContext.Provider value={{ isOpen, setOpen }}>
          <RouterProvider router={router} />
        </MyContext.Provider>
      </section>
    </>
  );
}

//Hamburger Menu styles and logic
const Root = () => {
  const { isOpen, setOpen } = useContext(MyContext);
  return (
    <>
      <div className="hamburger absolute right-5 top-5 flex justify-end z-10 lg:hidden">
        <Hamburger color="#494B4D" toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="nav-lg lg:flex hidden justify-end mr-5 mt-10  ">
        <Link className="text-[2.25rem] font-special m-5" to="/">
          Home
        </Link>
        <Link className="text-[2.25rem] font-special m-5" to="/portfolio">
          Portfolio
        </Link>
        <Link className="text-[2.25rem] font-special m-5" to="/about">
          About
        </Link>
      </div>
      {isOpen && (
        <div className="nav absolute w-full lg:hidden top-0 right-0 h-screen flex flex-col justify-center  items-center z-10 bg-[#D9D9D9] ">
          <div className="hamburger absolute right-5 top-5 flex justify-end z-10 lg:hidden">
            <Hamburger color="#494B4D" toggled={isOpen} toggle={setOpen} />
          </div>
          <Link
            onClick={() => setOpen(!isOpen)}
            className="text-[3rem] font-special m-5"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(!isOpen)}
            className="text-[3rem] font-special m-5"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => setOpen(!isOpen)}
            className="text-[3rem] font-special m-5"
            to="/about"
          >
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
