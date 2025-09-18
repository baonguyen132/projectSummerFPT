import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import styles from "./admin.module.scss";
import Layout from "../../layout/Layout";
import Navigation from "../../layout/admin/Navigation/navigation";
import Sidebar from "../../components/admin/Sidebar/sidebar";
import getToken from "../../utils/data";
import { UserContext } from "../../contexts/UserContext";

function AdminPage() {
  const accessToken = getToken();
  if (!accessToken) {
    window.location.href = "/dashboard/login"; // Redirect to login if not authenticated
  }
  const {user , dispatch} = useContext(UserContext);
  return (
    <Layout title={"Dashboard"}>
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
    </Layout>
  );
}
export default AdminPage;
