import React from "react";

const NewArrivals = () => {
  return (
    <div className="container category">
      <h2 className="text-uppercase newArr mb-3">New Arrivals</h2>
      <div className="row">
        <div className="col-lg-3">
          <div class="card newArrcard">
            <a href="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                class="card-img-top"
                alt="new arrivals"
              />
              <div class="card-body">
                <div class="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card newArrcard">
            <a href="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                class="card-img-top"
                alt="new arrivals"
              />
              <div class="card-body">
                <div class="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card newArrcard">
            <a href="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                class="card-img-top"
                alt="new arrivals"
              />
              <div class="card-body">
                <div class="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card newArrcard">
            <a href="/" className="text-decoration-none text-dark">
              <img
                src={require("../images/product/dress.jpg")}
                class="card-img-top"
                alt="new arrivals"
              />
              <div class="card-body">
                <div class="card-text text-left">
                  <h6>PLAIN SHIRT DRESS COCO</h6>
                  <p>Plain Shirt Dress</p>
                  <p>
                    <small>IDR 169.000</small>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
