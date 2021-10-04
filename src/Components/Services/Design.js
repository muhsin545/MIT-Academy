import React from 'react';
import Rating from 'react-rating';

const Design = (props) => {
    console.log(props);
    const { Price, Ratings, img, name, Duration } = props.design
    return (

        <div className="bg-white my-5 p-2 border rounded-3 g-0 container-fluid mb-3">
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

                <p className='fontIcon'><i className="fas fa-calendar-day"></i>  {Duration}</p>
            </div>
            <b>Course Fee : {Price}</b>
            <button className='btn btn-outline-primary ms-2 mt-2'>Add To Cart</button>
        </div>
    );
};

export default Design;

/*








*/