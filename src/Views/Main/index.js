import Loader from "../Loader/";
import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
const Nav = lazy(() => import("../../Components/Nav"));

const Main = () => {
  return (
    <div className="container">
      <Nav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Main;
