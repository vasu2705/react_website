import React from 'react';
import { NavLink } from "react-router-dom";
// import photo from "../src/images/11.jpg"
const Card = (props) => {
    return (
        <>


            <div className="col-md-4 col-10 mx-auto">
                <div className="card border-primary" >
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card- title font-weight-bold">{props.title}</h5>
                        <NavLink to="#" className="btn btn-primary">Connect</NavLink>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-4 col-10 mx-auto">
                                <div className="card border-primary" >
                                    <img src={photo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card border-primary" >
                                    <img src={photo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card border-primary" >
                                    <img src={photo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card border-primary" >
                                    <img src={photo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card border-primary" >
                                    <img src={photo} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div> */}




        </>
    );
};
export default Card;