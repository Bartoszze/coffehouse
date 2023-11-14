import Loader from "../Loader/";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import "./index.sass";
import "aos/dist/aos.css";
import AOS from "aos";
const Nav = lazy(() => import("../../Components/Nav"));

const Main = () => {
  AOS.init({
    once: true,
  });
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
