import { type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./main-layout.module.css";
import { useAppDispatch, useTypedSelector } from "@/store";
import { logout } from "@/store/slices/authSlice";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isAuthenticated = useTypedSelector(
    (state) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className={styles.layout}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.brand}>Apoint Dashboard</h2>

          {/* Navigation Menu */}
          <nav className={styles.nav}>
            <button
              onClick={() => navigate("/reports")}
              className={`${styles.navButton} ${
                location.pathname === "/reports"
                  ? styles.navButtonActive
                  : ""
              }`}
            >
              Reports
            </button>
          </nav>
        </div>

        {/* User Menu */}
        <div className={styles.userMenu}>
          <button
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.main}>
        <div className={styles.contentWrapper}>{children}</div>
      </main>
    </div>
  );
}
