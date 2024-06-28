import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/HomePage/Home/Home";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },

        {
            path: "/about",
            element: <About></About>,
        },

        {
            path: "/services",
            element: <Services></Services>,
        },

        {
            path: "/blog",
            element: <Blog></Blog>,
        },

        {
            path: "/contact",
            element: <Contact></Contact>,
        }
      ]
    },
  ]);

  export default router;