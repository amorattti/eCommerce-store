import { Outlet, Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from ".";

const RequireAuth = () => {
  let auth = isAuthenticated();
  let location = useLocation();

  if (auth.user && auth.user.role === 1) {

    return <Outlet />;
  }

  return <Navigate to="/signin" state={{ from: location }} />; 
}

export default RequireAuth