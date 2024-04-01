import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Rules from "../Rules/Rules";
import Club from "../Components/Club/Club";
import Project from "../Components/Project/Project";

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
                path: '/club',
                element: <Club></Club>
            },
            {
                path: '/projects',
                element: <Project></Project>
            },
        ]
    }
])