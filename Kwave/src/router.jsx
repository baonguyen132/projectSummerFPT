import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonDemo from "./pages/ButtonDemo";
import VocabularyPage from "./components/Vocabulary/VocabularyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
  },
  {
    path: "/vocab",
    element: <VocabularyPage>Home Page</VocabularyPage>,
  },
   {
    path: "/buttons",
    element: <ButtonDemo />,
    children:[
      {
        path: "page1",
        element: <h1>Home Page1</h1>,
      },
      {
        path: "page2",
        element: <h1>Home Page2</h1>,
      },
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

