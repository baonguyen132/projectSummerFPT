import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonDemo from "./pages/ButtonDemo";
import VocabularyPage from "./components/Vocabulary/VocabularyPage";
import PriceModal from "./components/Price/PriceModal";
import Culture from "./pages/Culture/Culture";
import Update from "./pages/Update/Update";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        index: true   
      },
      {
      path: "/home",
      element: <Home/>,
      index: true   

    },
      {
        path: "/roadmap",
        element: <>
          <Roadmap />
        </>
      },
      {
        path: "/culture",
        element: <Culture/>,
      },
      {
        path: "/update",
        element: <Update/>,
      },
    ]
  },
  
  {
    path: "/culture",
    element: <Culture></Culture>,
  },
    {
    path: "/price",
    element: <PriceModal></PriceModal>,
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

