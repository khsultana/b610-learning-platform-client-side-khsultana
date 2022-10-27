import { createBrowserRouter } from "react-router-dom";
import CourseLink from "../../CourseLink/CourseLink";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blogs/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Shared/Login/Login";
import Register from "../../Shared/Register/Register";

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
        loader: () => fetch(`http://localhost:5000/course-Details`),
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses/:id",
        element: <CourseLink></CourseLink>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course_Id/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
