import { createBrowserRouter } from "react-router-dom";
import "../Assets/Sass/_reset.sass";
import { lazy } from "react";
const HomePage = lazy(() => import("../Views/HomePage/index"));
const ErrorPage = lazy(() => import("../Views/ErrorPage/index"));
const Menu = lazy(() => import("../Views/MenuPage/index"));
const Main = lazy(() => import("../Views/Main/index"));

const App = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

export default App;