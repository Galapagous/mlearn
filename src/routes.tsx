import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import AuthPage from "./pages/auth";
import Analytics from "./pages/dashboard/analytics";
import Course from "./pages/dashboard/course";
import Quiz from "./pages/dashboard/quiz";
import Result from "./pages/dashboard/results";
import DashboardLayout from "./layout/dashboard";
import QuizAttemptDetails from "./pages/dashboard/results/attempt";
import NotFound from "./pages/others/NotFound";
import QuizQuestion from "./pages/dashboard/quiz/quizQuestion";
import QuizCard from "./pages/dashboard/quiz/quizDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/signin", element: <AuthPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Analytics /> },
      { path: "quiz", element: <Quiz /> },
      { path: "test/:quizId", element: <QuizQuestion /> },
      { path: "quiz_details/:courseId", element: <QuizCard /> },
      { path: "course", element: <Course /> },
      { path: "result", element: <Result /> },
      { path: "result/attempt/:attemptId", element: <QuizAttemptDetails /> },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
