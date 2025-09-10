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
    path: "/admin",
    element: <AdminPage />,
    children: [
        {
            index: true,
            element: <h1>Dashboard Page</h1>,
        },
        {
            path: "users",
            element: <h1>Users Page</h1>,
        },
        {
            path: "settings",
            element: <h1>Settings Page</h1>,
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

