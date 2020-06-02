import React from "react";
import { Link } from "react-router-dom";
const Bottom = () => {
  return (
    <div className="container tops my-5">
      <h2>BOTTOMS</h2>
      <div className="row">
        <div className="col-3 my-5">
          <div className="card newArrcard">
            <Link to="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                className="card-img-top"
                alt="new arrivals"
              />
              <div className="card-body">
                <div className="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-3 my-5">
          <div className="card newArrcard">
            <Link to="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                className="card-img-top"
                alt="new arrivals"
              />
              <div className="card-body">
                <div className="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-3 my-5">
          <div className="card newArrcard">
            <Link to="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                className="card-img-top"
                alt="new arrivals"
              />
              <div className="card-body">
                <div className="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-3 my-5">
          <div className="card newArrcard">
            <Link to="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                className="card-img-top"
                alt="new arrivals"
              />
              <div className="card-body">
                <div className="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-3 my-5">
          <div className="card newArrcard">
            <Link to="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                className="card-img-top"
                alt="new arrivals"
              />
              <div className="card-body">
                <div className="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
