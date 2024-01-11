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
      <main className="relative flex justify-center align-center ">
        <div className="container p-4  ">
          <div className="svg-image">
            <img
              src="../public/line.png"
              className="absolute left-0 top-0"
              alt="svg-line"
            />
          </div>
          <RouterProvider router={router} />
        </div>
      </main>
    </>
  );
}
const Root = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="hamburger flex justify-end z-10 relative">
        <Hamburger color="#494B4D" toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="nav absolute w-full top-0 right-0 h-screen flex flex-col justify-center items-center z-0 bg-[#D9D9D9] ">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <div className="svg-image">
            <img
              src="../public/line2.png"
              className="absolute left-0 bottom-0"
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
