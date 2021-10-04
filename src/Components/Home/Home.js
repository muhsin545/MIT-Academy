import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Course from '../Course/Course';
import icon1 from './../Icon/computer.png';
import icon2 from './../Icon/online-learning.png';
import icon3 from './../Icon/support.png';
import img from './../Icon/slider-image1.png';
import './Home.css'
const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./Service.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='row container-fluid align-items-center'>
                <div className="col-md-5">
                    <h1 className="header">Hello Enthusiastic Learner!!</h1>
                    <h3 className="span">Welcome To Our M-IT Academy</h3>
                    <small className='text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae libero nisi alias delectus voluptatum tempora eaque recusandae voluptatem assumenda.</small>
                    <button className='btn btn-primary my-2'>Get Started</button>
                </div>
                <div className="col-md-6 ms-auto mt-3">
                    <img src={img} className='img-fluid' alt="" />
                </div>

            </div>
            <div className='text-center m-5 p-3'>
                <h2 className='headers'>Why would you choose us</h2>
                <div className='d-flex justify-content-evenly mt-5'>
                    <div className='ChooseDiv'>
                        <img className='mb-3' src={icon1} width='120px' alt="" />
                        <h4>Friendly Learning</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quam doloribus aliquid deleniti saepe ullam. Architecto eos iste quaerat!</p>
                    </div>
                    <div className='ChooseDiv'>
                        <img className='mb-3' src={icon2} width='120px' alt="" />
                        <h4>Special Conceptual Session</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quam doloribus aliquid deleniti saepe ullam. Architecto eos iste quaerat!</p>
                    </div>
                    <div className='ChooseDiv '>
                        <img className='mb-3' src={icon3} width='120px' alt="" />
                        <h4>Support Session 3 times</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quam doloribus aliquid deleniti saepe ullam. Architecto eos iste quaerat!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='headers  ms-3'>Our  Services </h2>
                    <NavLink to='/services'> <button className='btn btn-outline-primary mb-3 me-3' > See All</button></NavLink>
                </div>
                <div className='Courses container-fluid mx-auto'>
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </div>

            </div>
            <div className='text-center my-5 py-5'>
                <h2 className='headers'>Feedback from students about the course</h2>
                <div>
                    <div className='container d-flex justify-content-evenly mt-5'>
                        <div className='ChooseDiv'>
                            <img className='w-50 rounded-3 mb-2' src='https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_2106819729.jpg' alt="" />
                            <h6>Life Changing Course</h6>
                            <small className='text-primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quam doloribus aliquid deleniti saepe ullam. Architecto eos iste quaeratl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem at optio illum culpa. Nesciunt, sed eligendi recusandae itaque quibusdam facilis vero vel ullam enim error dicta dolore sapiente a quae.!</small>
                        </div>
                        <div className='ChooseDiv'>
                            <img className='w-50 rounded-3 mb-2' src='https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt="" />
                            <h6>Enjoyable Envioronment To Learn</h6>
                            <small className='text-primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quam doloribus aliquid deleniti saepe ullam. Architecto eos iste quaeratl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem at optio illum culpa. Nesciunt, sed eligendi recusandae itaque quibusdam facilis vero vel ullam enim error dicta dolore sapiente a quae.!</small>
                        </div>
                        <div className='ChooseDiv'>
                            <img className='w-50 rounded-3 mb-2' src='https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt="" />
                            <h6>Awesome And Fantastic Course</h6>
                            <small className='text-primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quam doloribus aliquid deleniti saepe ullam. Architecto eos iste quaeratl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem at optio illum culpa. Nesciunt, sed eligendi recusandae itaque quibusdam facilis vero vel ullam enim error dicta dolore sapiente a quae.!</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;