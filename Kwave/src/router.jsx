import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/admin/admin";
import Login from "./pages/admin/Login/login";
import Dashboard from "./pages/admin/screens/dashboard/dashboard";
import User from "./pages/admin/screens/user/user";
import Test from "./pages/admin/screens/test/test";
import Lesson from "./pages/admin/screens/lesson/lesson";
import ButtonDemo from "./pages/ButtonDemo";
import VocabularyPage from "./components/Vocabulary/VocabularyPage";
import PriceModal from "./components/Price/PriceModal";
import Exam from "./components/Exam/Exam";
import ExamType from "./components/ExamType/ExamType";
import Result from "./components/Result/Result";
import Culture from "./pages/Culture/Culture";
import Update from "./pages/Update/Update";
import Home from "./pages/Home/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import PracticeExam from "./pages/PracticeExam/PracticeExam";
import RealExam from "./pages/RealExam/RealExam";
import MainLayout from "./layouts/MainLayout";

// Import learner components
import NotFoundPage from "./pages/NotFoundPage";
import LearnerMainLayout from "./layouts/learner/MainLayout";
import LearnerHomePage from "./pages/learner/LearnerHomePage";
import LearnerNews from "./pages/learner/LearnerNews";
import LearnerNewsDetails from "./pages/learner/LearnerNewsDetails";
import LearnerVideo from "./pages/learner/LearnerVideo";
import LearnerVideoDetails from "./pages/learner/LearnerVideoDetails";
import UserProfile from "./pages/UserProfile/UserProfile";

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
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/home",
        element: <Home />,
        index: true,
      },
      {
        path: "/roadmap",
        element: <Roadmap />
      },
      {
        path: "/culture",
        element: <Culture />,
      },
      {
        path: "/update",
        element: <Update />,
      },
      {
        path: "/practiceExam",
        element: <PracticeExam />,
      },
      {
        path: "/examType",
        element: <ExamType />,
      },
      
      {
        path: "/realExam",
        element: <RealExam />,
      },
      {
        path: "exam/:examType/:examId",
        element: <Exam />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
    path: "/profile",
    element: <UserProfile/>,
  },
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
          { path: 'video', element: <LearnerVideo/> },
          { path: 'video/learn/:videoId', element: <LearnerVideoDetails/> },
        ],
      },
    ],
  },
    ],
  },

  
    

  // Learner routes
  

  // 404 route
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

function RouterCustome() {
  return <RouterProvider router={router} />;
}

export default RouterCustome;
