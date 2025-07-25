import { useTypedSelector } from "@/store";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated
  );

  console.log("isAuthenticated:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
