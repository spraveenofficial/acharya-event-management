import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ isLoggedIn }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  console.log(loading);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
