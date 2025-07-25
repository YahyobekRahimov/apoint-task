import { useTypedSelector } from "@/store";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "../components/layouts";
import ProtectedRoute from "../components/protected-route";
import { LoginPage, ReportsPage } from "../pages";

export default function Router() {
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navigate
          to={isAuthenticated ? "/reports" : "/login"}
          replace
        />
      ),
    },
    {
      path: "/login",
      element: isAuthenticated ? (
        <Navigate to="/reports" replace />
      ) : (
        <LoginPage />
      ),
    },
    {
      path: "/reports",
      element: (
        <ProtectedRoute>
          <MainLayout>
            <ReportsPage />
          </MainLayout>
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: (
        <Navigate
          to={isAuthenticated ? "/reports" : "/login"}
          replace
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
