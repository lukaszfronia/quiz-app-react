import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Protected;
