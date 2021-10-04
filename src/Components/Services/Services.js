import React, { useEffect, useState } from 'react';
import Design from './Design';
import Development from './Development';
import Digital from './Digital';
import Graphics from './Graphics';
import './Service.css';
const Services = () => {
    const [digitals, setDigitals] = useState([])
    useEffect(() => {
        fetch('./Digital.json')
            .then(res => res.json())
            .then(data => setDigitals(data))
    }, [])
    const [designs, setDesigns] = useState([])
    useEffect(() => {
        fetch('./webdesign.json')
            .then(res => res.json())
            .then(data => setDesigns(data))
    }, []);

    const [developments, setDevelopments] = useState([])
    useEffect(() => {
        fetch('./Web.json')
            .then(res => res.json())
            .then(data => setDevelopments(data))
    }, [])
    const [graphics, setGraphics] = useState([])
    useEffect(() => {
        fetch('./graphics.json')
            .then(res => res.json())
            .then(data => setGraphics(data))
    }, [])
    return (
        <div>
            <div className='g-5 cardContainer'>
                <h2 className="text-start headers ps-3 mt-5">Web Development</h2>
                <div className="developments container-fluid mt-3">
                    {
                        developments.map(development => <Development
                            key={development.name}
                            development={development}></Development>)
                    }
                </div>
            </div>
            <div className='g-5 cardContainer '>
                <h2 className="headers text-center ps-3 mt-5">Web Design</h2>
                <div className="designs container-fluid">
                    {
                        designs.map(design => <Design
                            key={design.name} design={design}></Design>)
                    }
                </div>
            </div>
            <div className='g-5 cardContainer'>
                <h2 className="text-end headers me-5  mt-5 ">Digital Marketing</h2>
                <div className="digitals container-fluid">

                    {
                        digitals.map(digital => <Digital
                            key={digital.name} digital={digital}></Digital>)
                    }
                </div>
            </div>
            <div className='g-5 cardContainer'>
                <h2 className="text-start headers ps-3 mt-1 pt-3 ">Graphics Design</h2>
                <div className="graphics container-fluid mt-3">
                    {
                        graphics.map(graphic => <Graphics
                            key={graphic.name}
                            graphic={graphic}></Graphics>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
