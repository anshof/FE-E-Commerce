import React from "react";
import { Link } from "react-router-dom";
const Jumbotron = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../images/black.jpg")}
            className="d-block w-100"
            alt="carousel1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="mb-5 text-left text-carousel">
              Infuse your outfit with <br />
              SOPHISTICATED <br />
              colors and pattern
            </h1>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require("../images/bg1.jpg")}
            className="d-block w-100"
            alt="carousel2"
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img
            src={require("../images/bg3.jpg")}
            className="d-block w-100"
            alt="carousel2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1 className="mb-5 text-white text-carousel">
              Keep it simple and <br />
              SOPHISTICATED
            </h1>
          </div>
        </div>
      </div>
      <Link
        className="carousel-control-prev"
        to="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Link>
      <Link
        className="carousel-control-next"
        to="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </Link>
    </div>
  );
};

export default Jumbotron;
