import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library/Index";
import SingleCourse from "./pages/Library/Identifier";
import Courses from "./pages/Courses/Index";
// import { BaseRoute } from "./pages/BaseRoute";
import Events from "./pages/Events";
import { CourseDetails } from "./pages/Courses/Identifier";
// import SignUp from "./pages/auth/SignUp";
// import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
import { checkAuthForLogin, requireAuth } from "./loader";
import Login from "./pages/auth/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: checkAuthForLogin,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <SignUp />,
  // },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: requireAuth,
  },
  {
    path: "/courses",
    element: <Courses />,
    loader: requireAuth,
  },
  {
    path: "/courses/:id",
    element: <CourseDetails />,
    loader: requireAuth,
  },
  {
    path: "/library",
    element: <Library />,
    loader: requireAuth,
  },
  {
    path: "/library/:id",
    element: <SingleCourse />,
    loader: requireAuth,
  },
  {
    path: "/events",
    element: <Events />,
    loader: requireAuth,
  },
  {
    path: "/*",
    element: <p>404, Shade not found</p>,
  },
]);
