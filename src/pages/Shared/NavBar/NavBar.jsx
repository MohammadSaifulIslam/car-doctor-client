import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
const NavBar = () => {
    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink>Service</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-black menu-compact gap-2 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="my-btn">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;