import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
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

  const Root = () => {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/data">Data</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
