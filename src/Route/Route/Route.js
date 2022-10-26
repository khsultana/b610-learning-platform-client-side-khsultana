import { createBrowserRouter } from "react-router-dom";
import CourseLink from "../../CourseLink/CourseLink";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/courseLink/:id",
        element: <CourseLink></CourseLink>,
      },
    ],
  },
]);
