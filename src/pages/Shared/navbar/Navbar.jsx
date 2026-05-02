import { Link, NavLink } from "react-router";
import logoImg from '../../../assets/logo.png';

const Navbar = () => {
    // NavLink-এর জন্য একটি কমন ক্লাস ফাংশন (Active link বোঝার জন্য)
    const navLinkStyles = ({ isActive }) => 
        isActive ? "text-primary font-bold underline" : "";

    const list = (
        <>
            <li><NavLink to='/issue' className={navLinkStyles}>Issue</NavLink></li>
            <li><NavLink to='/report' className={navLinkStyles}>Report</NavLink></li>
            <li><NavLink to='/sent-issues' className={navLinkStyles}>Sent Issues</NavLink></li>
            <li><NavLink to='/coverage' className={navLinkStyles}>Coverage</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-200">
                        {list}
                    </ul>
                </div>
                {/* লোগো এবং নাম একসাথে থাকলে দেখতে ভালো লাগে */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoImg} alt="CityCare Logo" className="h-10 w-10 object-contain" />
                    <span className="text-xl font-bold hidden sm:block">CityCare</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {list}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <Link to='/login'>
                    <button className="btn btn-outline btn-primary btn-sm md:btn-md">Login</button>
                </Link>
                <Link to='/register'>
                    <button className="btn btn-primary btn-sm md:btn-md">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;