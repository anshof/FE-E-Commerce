import React from "react";

const Category = () => {
  return (
    <div className="container category">
      <h2 className="text-uppercase mb-3">Our Products</h2>
      <div className="row">
        <div className="col-lg-4 row-sm-12 d-flex border-right align-items-center">
          <div className="mx-auto square my-auto d-flex align-items-center justify-content-center">
            <div>
              <img
                className="pictProduct"
                src={require("../images/product/1.jpg")}
                alt="tops"
              />
              <p className="pt-3 text-uppercase">Tops</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 row-sm-12 d-flex align-items-center">
          <div className="mx-auto square my-auto d-flex align-items-center justify-content-center">
            <div>
              <img
                className="pictProduct"
                src={require("../images/product/bottom.jpg")}
                alt="tops"
              />
              <p className="pt-3 text-uppercase">Bottom</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 row-sm-12 d-flex border-left align-items-center">
          <div className="mx-auto square my-auto d-flex align-items-center justify-content-center">
            <div>
              <img
                className="pictProduct"
                src={require("../images/product/dress.jpg")}
                alt="tops"
              />
              <p className="pt-3 text-uppercase">dress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
