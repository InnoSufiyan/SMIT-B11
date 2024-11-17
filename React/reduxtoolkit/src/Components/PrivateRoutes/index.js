import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggedin = localStorage.getItem("login");

  return isLoggedin == "true" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
