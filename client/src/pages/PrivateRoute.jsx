import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const isLogin = localStorage.getItem("isLogin");
  const location = useLocation();

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace={true} />
  );
};

export default PrivateRoute;
