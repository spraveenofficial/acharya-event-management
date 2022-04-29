import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const GuestRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const { isAdmin, isSuperUser } = user;
  return isAdmin || isSuperUser ? <Outlet /> : <Navigate to="/events" />;
};
// export default ProtectedRoutes;
