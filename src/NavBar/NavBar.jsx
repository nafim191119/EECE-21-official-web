
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <Link to="/"><a className="btn btn-ghost normal-case text-3xl text-white">MIST EECE-21</a></Link>
                </div>
                <div className="navbar-center lg:flex text-white">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link>  </li>
                        <li><Link to="/rules">Rules</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex text-white">
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;