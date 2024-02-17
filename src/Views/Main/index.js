import Loader from "../Loader/";
import { Suspense, lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.sass";
const Nav = lazy(() => import("../../Components/Nav"));

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <Nav />
        <Outlet />
      </div>
    </Suspense>
  );
};

export default Main;
