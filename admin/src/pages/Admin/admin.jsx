import { Outlet } from "react-router-dom";
import React from "react";
import styles from "./admin.module.scss";
import Layout from "../../layout/layout";
import Navigation from "../../layout/Navigation/navigation";
import Sidebar from "../../components/Admin/Sidebar/sidebar";

function AdminPage() {
  return (
    <Layout title={"Admin Page"}>
      <div className={styles.adminContainer}>
        <div className={styles.navbar}>
            <Navigation />
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
