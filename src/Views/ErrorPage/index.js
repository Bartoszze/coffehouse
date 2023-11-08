import { useRouteError } from "react-router-dom";
import "./index.sass";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>
        <i>{error.data}</i>
        <br />
        <i>{error.status}</i>
      </p>
    </div>
  );
};
export default ErrorPage;
