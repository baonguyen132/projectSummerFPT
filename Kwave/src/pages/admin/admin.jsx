import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import styles from "./admin.module.scss";
import Navigation from "../../layouts/admin/Navigation/navigation";
import Sidebar from "../../components/admin/Sidebar/sidebar";
import getToken from "../../utils/data";
import { UserContext } from "../../contexts/UserContext";
import AdminLayout from "../../layouts/AdminLayout";
import UserProvider from "../../contexts/admin/UserContext";
import { HelmetProvider } from "react-helmet-async";
function AdminPage() {
  const accessToken = getToken();
  if (!accessToken) {
    window.location.href = "/dashboard/login"; // Redirect to login if not authenticated
  }

  const {user , dispatch} = useContext(UserContext);
  return (
    <UserProvider>
      <HelmetProvider>
        <AdminLayout title={"Dashboard"}>
      <div className={styles.adminContainer}>
        <div className={styles.navbar}>
            <Navigation user={user} />
        </div>
        <div className={styles.mainContent}>
          <Sidebar />
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </AdminLayout>
      </HelmetProvider>
    </UserProvider>
  );
}
export default AdminPage;
