import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-3xl text-white">LOGO</a>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link>  </li>
                        <li><Link to="/rules">Rules</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Log in</a>
                    <a className="btn">Sign up</a>
                    <a className="btn">Photo</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;