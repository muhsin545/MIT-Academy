import React from 'react';
import './Course.css'
const Course = (props) => {
    const { Price, Ratings, img, name, desc } = props.course
    return (
        <div>

            <div class="row course align-items-center">
                <div class="col-md-5">
                    <img src={img} class="img-fluid " alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{desc.slice(0, 80)}</p>
                        <b>Course Fee : {Price}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;