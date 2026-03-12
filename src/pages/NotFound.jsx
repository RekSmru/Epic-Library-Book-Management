import { Link, useLocation } from "react-router-dom";

function NotFound(){
    const location = useLocation();
   return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>

      <h1>404 - Page Not Found</h1>

      <p>
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <Link to="/">
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;