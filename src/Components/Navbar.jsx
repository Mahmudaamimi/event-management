import React, { useContext } from 'react';
import logo from "../assets/logo.png.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then()
    .catch()
  }
    const link = <>
    <li className='font-semibold'><NavLink to='/'>Home</NavLink></li>
    <li className='font-semibold'><NavLink to='/courses'>Couress</NavLink></li>
    <li className='font-semibold'><NavLink to='/blog'>Blog</NavLink></li>
     </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {link}
      </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?.email ? <div>
    <span>{user.email}</span>
  <button onClick={handleLogOut} className="btn  bg-green-500 text-white ">Log Out</button>
  </div> 
        
      :
  <Link to = '/login'>
     <button className="btn  bg-green-500 text-white">Login</button>
     </Link>

    }
  </div>
</div>
    );
};

export default Navbar;