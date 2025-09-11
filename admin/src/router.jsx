import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/Admin/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact Page</h1>,
  },
  {
    path: "/dashboard",
    element: <AdminPage />,
    children: [
        {
            index: true,
            element: <h1>Dashboard Page</h1>,
        },
        {
            path: "manage",
            element: <h1>Manage Page</h1>,
        },
        {
            path: "finance",
            element: <h1>Finance Page</h1>,
        },
        {
            path: "profile",
            element: <h1>Profile Page</h1>,
        },
        {
            path: "logout",
            element: <h1>Logout Page</h1>,
        }
    ]
  },
  {
    path: "*",
    element: (
      <center>
        <h1>404</h1>
        <br />
        <h1>Không tồn tại trang này</h1>
      </center>
    ),
  }
]);

function RouterCustome() {
    return <RouterProvider router={router} />;
}

export default RouterCustome;

