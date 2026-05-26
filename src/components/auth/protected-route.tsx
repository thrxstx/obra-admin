import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();

  if (loading) return null;
  if (!session) return <Navigate to="/" />;

  return <>{children}</>;
}

export default ProtectedRoute;
