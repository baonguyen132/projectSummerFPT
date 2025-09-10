import { Outlet } from "react-router-dom";
import Layout from "../../layout/layout";

function AdminPage() {
  return (

    <Layout title={"Admin Page"}>
        <div className="navibar">

        </div>
        <div className="main-content">
            <div className="sidebar">

            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    </Layout>

  );
}
export default AdminPage;