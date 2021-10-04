import React from 'react';
import { NavLink } from 'react-router-dom';
import img from './../Icon/smartphone.png'
const Contact = () => {
    return (
        <div>

            <div className='row container-fluid mb-5 py-5'>
                <h3 className='headers'> Contact Us</h3>
                <div className="row align-items-center">
                    <div className='col-md-7'>
                        <img src={img} className='img-fluid w-50' alt="" />
                    </div>
                    <div className="col-md-5 p-3 mx-auto text-start">

                        <h5><i className="ContactIcons fas fa-compass"></i> Raynagar Doptoripara -Sylhet</h5>
                        <h5><i className="ContactIcons fas fa-map-marker-alt"></i> Rofiq Tower-Level-3 </h5>

                        <h6> <i className="ContactIcons fas fa-envelope"></i> muhibullahmuhsin545@gmail.com</h6>
                        <p><b><i className="ContactIcons fas fa-phone-alt"></i> +8801777967876</b></p>
                        <NavLink className='ContactIcon' to='/#'><i className="fab fa-facebook-square"></i></NavLink>
                        <NavLink className='ContactIcon' to='/#'><i className="fab fa-instagram-square"></i></NavLink>
                        <NavLink className='ContactIcon' to='/#'><i className="fab fa-twitter-square"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;