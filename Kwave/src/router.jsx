import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/admin/admin";
import Login from "./pages/admin/Login/login";
import Dashboard from "./pages/admin/screens/dashboard/dashboard";
import User from "./pages/admin/screens/user/user";
import Test from "./pages/admin/screens/test/test";
import Lesson from "./pages/admin/screens/lesson/lesson";

const router = createBrowserRouter([
  {
    path: "/dashboard/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <AdminPage />,
    children: [
        {
            index: true,
            element: <Dashboard />,
        },
        {
            path: "user",
            element: <User />,
        },
        {
            path: "test",
            element: <Test />,
        },
        {
            path: "lesson",
            element: <Lesson />,
        },
        {
            path: "culture",
            element: <h1>Culture Page</h1>,
        },
        {
            path: "news",
            element: <h1>News Page</h1>,
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

