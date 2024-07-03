import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/HomePage/Home/Home";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import Checkout from "../../pages/Services/Checkout";

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
                path: "/serviceDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            {
                path: "/checkout/:id",
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            {
                path: "/blog",
                element: <Blog></Blog>,
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            },

            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },

            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            }
        ]
    },
]);

export default router;