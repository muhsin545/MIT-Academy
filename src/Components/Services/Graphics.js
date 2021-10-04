import React from 'react';
import Rating from 'react-rating';

const Graphics = (props) => {
    console.log(props);
    const { Price, Ratings, img, name, time } = props.graphic
    return (

        <div className="bg-white  p-2 border rounded-3 g-0 container-fluid mb-3">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="d-flex justify-content-between">
                <h5><Rating className='Rating'
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    initialRating={Ratings}
                    readonly
                ></Rating></h5>

                <p className='fontIcon'><i className="far fa-clock"></i>  {time}</p>
            </div>
            <b>Course Fee : {Price}</b>
            <button className='btn btn-outline-danger ms-2 mt-2'>Add To Cart</button>
        </div>
    );
};

export default Graphics;