import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonDemo from "./pages/ButtonDemo";
import VocabularyPage from "./components/Vocabulary/VocabularyPage";
import PriceModal from "./components/Price/PriceModal";
import Culture from "./pages/Culture/Culture";
import Update from "./pages/Update/Update";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import PracticeExam from "./pages/PracticeExam/PracticeExam";
import RealExam from "./pages/RealExam/RealExam";
import MainLayout from "./layouts/MainLayout";

// Import learner components
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import LearnerMainLayout from "./layouts/learner/MainLayout";
import LearnerHomePage from "./pages/learner/LearnerHomePage";
import LearnerNews from "./pages/learner/LearnerNews";
import LearnerNewsDetails from "./pages/learner/LearnerNewsDetails";

const router = createBrowserRouter([
  // Auth route
  {
    path: "/auth",
    element: <App/>,
  },

  // Main application routes
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
      },
      {
        path: "/roadmap",
        element: <Roadmap />
      },
      {
        path: "/culture",
        element: <Culture/>,
      },
      {
        path: "/update",
        element: <Update/>,
      },
      {
        path: "/practiceExam",
        element: <PracticeExam/>,
      },
      {
        path: "/realExam",
        element: <RealExam/>,
      },
    ]
  },

  // Learner routes
  {
    path: '/learner',
    children: [
      {
        path: '',
        element: <LearnerMainLayout/>,
        children: [
          { index: true, element: <LearnerHomePage/> },
          { path: 'news', element: <LearnerNews/> },
          { path: 'news/:id', element: <LearnerNewsDetails/> },
        ],
      },
    ],
  },

  // 404 route
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

export default router;
