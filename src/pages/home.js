import React from "react";
import img1 from "../img/01.png";
import img2 from "../img/02.png";
import img3 from "../img/03.png";
import food1 from "../img/food1.png";
import food2 from "../img/food2.png";
import food3 from "../img/04.jpg";
import '../styles/homestyle.css';

function Home () {
    return (
        <div className="Home">

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>


            {/* pic */}
            <div className="container mt-5">
                <h4 className="mb-3">Food</h4>
                <div className="row">
                    {[food1, food2, food3].map((food, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                                <img src={food} className="card-img-top" alt={`Food ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;