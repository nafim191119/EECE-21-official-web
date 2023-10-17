import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Rules from "../Rules/Rules";
import LogIn from "../LogIn/LogIn";
import SignIn from "../SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/rules',
                element: <Rules></Rules>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    }
])