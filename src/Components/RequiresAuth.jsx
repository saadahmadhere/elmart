import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Helper";

const RequiresAuth = ({ children }) => {
  const { userState } = useAuth();
  const navigate = useLocation();
  return userState.token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: navigate }} replace />
  );
};
export { RequiresAuth };
