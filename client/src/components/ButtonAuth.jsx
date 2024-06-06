import React from "react";
import { Link, useLocation } from "react-router-dom";

const ButtonAuth = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="account flex gap-2 justify-center">
        <Link
          to={"/login"}
          className="text-secondary px-4 py-1 text-smd font-bold bg-light rounded-full border-2 border-transparent"
          state={{ from: location }}
        >
          Sign in
        </Link>
        <Link
          to={"/register"}
          className="text-light px-4 py-1 text-smd font-bold bg-transparent rounded-full border-2 border-light"
        >
          Sign up
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ButtonAuth;
