import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { LoginPage, ReportsPage } from "../pages";
import ProtectedRoute from "../components/protected-route";
import { MainLayout } from "../components/layouts";
import { useTypedSelector } from "@/store";

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
      element: <LoginPage />,
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
