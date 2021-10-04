import React from 'react';
import img1 from './../Icon/asjad.jpg';
import img2 from './../Icon/sanjid.jpg';
import img3 from './../Icon/tahir.jpg';
const Mentors = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className='header'>Let's Know Our Instructor</h1>
                <div className="row my-3 g-3 container mx-auto">
                    <div className="row my-3  align-items-center border ms-auto">
                        <div className="col-md-6">
                            <img src={img2} className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 ms-auto text-center ">
                            <h2>This is Sanjidul Haque Mahi   </h2>
                            <b>A Proffessional Web Developer and UI  Designer At M-IT Academy</b>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet beatae ullam neque. Modi, explicabo inventore dolores quas optio alias voluptas. Illo fuga, earum soluta molestias nam, non quibusdam laboriosam tenetur adipisci exercitationem in temporibus itaque deleniti officiis a quis? Ab, perspiciatis. Eum ad impedit illum incidunt eius est ab. Soluta.</p>
                        </div>
                    </div>
                    <div className="row my-3   align-items-center border ms-auto">
                        <div className="col-md-6">
                            <img src={img1} className='img-fluid w-75' alt="" />
                        </div>
                        <div className="col-md-6 ms-auto text-center ">
                            <h2>This is Muhi Uddin Asjad </h2>
                            <b>A Proffessional Graphics   Designer and Teacher At M-IT Academy</b>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet beatae ullam neque. Modi, explicabo inventore dolores quas optio alias voluptas. Illo fuga, earum soluta molestias nam, non quibusdam laboriosam tenetur adipisci exercitationem in temporibus itaque deleniti officiis a quis? Ab, perspiciatis. Eum ad impedit illum incidunt eius est ab. Soluta.</p>
                        </div>
                    </div>

                    <div className="row my-3  align-items-center border ms-auto">
                        <div className="col-md-6">
                            <img src={img3} className='img-fluid rounded-3' alt="" />
                        </div>
                        <div className="col-md-6 ms-auto text-center ">
                            <h2>This is Sadath Tahir </h2>
                            <b>A Proffessional Digital Merketor and Teacher  At M-IT Academy</b>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet beatae ullam neque. Modi, explicabo inventore dolores quas optio alias voluptas. Illo fuga, earum soluta molestias nam, non quibusdam laboriosam tenetur adipisci exercitationem in temporibus itaque deleniti officiis a quis? Ab, perspiciatis. Eum ad impedit illum incidunt eius est ab. Soluta.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mentors;