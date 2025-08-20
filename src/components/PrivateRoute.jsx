import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = !!localStorage.getItem("usuario");
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;