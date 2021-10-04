import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './Icon/vector.jpg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'>
                        <img src={logo} alt="" width="50" height="45" className="d-inline-block border border-primary text-center rounded-circle me-2" />
                        M-IT Academy
                    </Link>
                    <NavLink className='NavLink' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/home'>Home</NavLink>
                    <NavLink className='NavLink' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/services'>Services</NavLink>
                    <NavLink className='NavLink' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/mentors'>Instructors</NavLink>
                    <NavLink className='NavLink' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/about'>About Us</NavLink>
                    <NavLink className='NavLink' activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} to='/contact'>Contact Us</NavLink>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;