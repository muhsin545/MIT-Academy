import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../Icon/google-play-.png'
import logo2 from '../Icon/app_store_badge_.png'
import './footer.css'
const Footer = () => {
    return (
        <div className='row  bg-light mx-auto container-fluid border align-items-center'>
            <div className="col-md-4 mx-auto p-3 text-start">
                <h2>Address: </h2>
                <h5><i className="fas fa-compass"></i> Raynagar Doptoripara -Sylhet</h5>
                <h5><i className="fas fa-map-marker-alt"></i> Rofiq Tower-Level-3 </h5>

                <h6> <i className="fas fa-envelope"></i> muhibullahmuhsin545@gmail.com</h6>
                <p><b><i className="fas fa-phone-alt"></i> +8801777967876</b></p>
                <NavLink className='icon' to='/#'><i className="fab fa-facebook-square"></i></NavLink>
                <NavLink className='icon' to='/#'><i className="fab fa-instagram-square"></i></NavLink>
                <NavLink className='icon' to='/#'><i className="fab fa-twitter-square"></i></NavLink>
            </div>
            <div className="col-md-4 me-auto pe-3">
                <h4>Quick Links</h4>
                <NavLink className='FooterLink' activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to='/home'>Home</NavLink>
                <NavLink className='FooterLink' activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to='/services'>Services</NavLink>
                <NavLink className='FooterLink' activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to='/mentors'>Instructors</NavLink>
                <NavLink className='FooterLink' activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to='/about'>About Us</NavLink>
                <NavLink className='FooterLink' activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }} to='/contact'>Contact Us</NavLink>
            </div>
            <div className="col-md-3">
                <h4>Download Our App</h4>
                <img src={logo1} className='img-fluid' alt="" />
                <img src={logo2} className='img-fluid w-75' alt="" />

            </div>
        </div>
    );
};

export default Footer;