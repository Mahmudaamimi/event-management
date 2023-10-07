import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=> fetch('/educare.json'),
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            }
        ]

    }
])
export default router;