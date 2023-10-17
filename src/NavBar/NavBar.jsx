import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-3xl text-white">MIST EECE-21</a>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link>  </li>
                        <li><Link to="/rules">Rules</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <li><Link to="/login" className="">Log in</Link></li>
                        <li><Link to="/signin" className="">Sign in</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;