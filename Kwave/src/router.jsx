import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
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

