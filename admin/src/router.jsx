import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/admin";
import Login from "./pages/Login/login";
import Dashboard from "./pages/screens/dashboard/dashboard";
import User from "./pages/screens/user/user";
import Test from "./pages/screens/test/test";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
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
            element: <h1>Lesson Page</h1>,
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

