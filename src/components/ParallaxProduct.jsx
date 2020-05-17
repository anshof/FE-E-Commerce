import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";

const ParallaxProduct = () => {
  return (
    <div className="container parallax">
      <div className="row">
        <div className="col-lg-6 row-sm-12 text-center jumbotron w-lg-50"></div>
        <div className="col-lg-6 row-sm-12 d-flex align-items-center">
          <div className="text-left">
            <h3 className="text-left textParallax text-uppercase">
              All time Favorites
            </h3>
            <h4 className="text-left">
              Always trending and catch everyone's eyes.
            </h4>
            <Link class="btn btn-outline-dark" to="/shopnow" role="button">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxProduct;
