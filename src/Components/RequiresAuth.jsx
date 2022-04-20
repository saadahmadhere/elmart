import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Helper";

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: navigate }} replace />
  );
};
export { RequiresAuth };
