import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library/Index";
import SingleCourse from "./pages/Library/Identifier";
import Courses from "./pages/Courses/Index";
import { BaseRoute } from "./pages/BaseRoute";
import Events from "./pages/Events";
import { CourseDetails } from "./pages/Courses/Identifier";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseRoute />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courses/:id",
    element: <CourseDetails />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/library/:id",
    element: <SingleCourse />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/*",
    element: <p>404, Shade not found</p>,
  },
]);
