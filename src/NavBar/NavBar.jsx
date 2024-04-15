
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4"

const NavBar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("dark")
        }
    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div>
            <div role="alert" className="flex justify-center items-center h-10 text-white font-bold sm:text-3xl">
                <span className="mx-6">Electrical, Electronics and Communication Engineering.</span>
            </div>
            <div className="navbar border-0 border-b-2 border-t-2">
                <div className="navbar-start">
                    <Link to="/"><button className="btn btn-ghost normal-case text-3xl text-white">EECE</button></Link>
                </div>
                <div className="navbar-center lg:flex text-white">
                    <ul className="menu menu-horizontal px-18 font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link>  </li>
                        {/* <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/club">Club</Link></li> */}
                    </ul>
                </div>
                <div className="navbar-end lg:flex text-white">

                </div>
            </div>
        </div>
    );
};

export default NavBar;