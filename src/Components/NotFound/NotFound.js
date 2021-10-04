import React from 'react';
import notFoundImg from './../Icon/Page-Not-Found-Error-404.png'
const NotFound = () => {
    return (
        <div className='p-5'>
            <img src={notFoundImg} alt="" className="img-fluid w-25" />
            <h1> Sorry!! 404 : Page not found</h1>
        </div>
    );
};

export default NotFound;

