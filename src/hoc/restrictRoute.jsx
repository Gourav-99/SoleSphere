import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const restrictedRoute = (Component) => {
  const Route = (props) => {
    const auth = useSelector((state) => state.auth);
    return auth.token && auth.user && auth.user.role === 1 ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" />
    );
  };
  return Route;
};
export default restrictedRoute;
