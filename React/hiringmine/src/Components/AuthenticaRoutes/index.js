import { Navigate, Outlet } from "react-router-dom";

const AuthenticateRoutes = () => {
  //const [userData, userError] = useFetchUserData()

  return userData?.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AuthenticateRoutes;
