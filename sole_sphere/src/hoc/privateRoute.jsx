import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const privateRoute = (Component) => {
  const Route = (props) => {
    const auth = useSelector((state) => state.auth);
    return auth.token ? <Component {...props} /> : <Navigate to="/login" />;
  };
  return Route;
};
export default privateRoute;
