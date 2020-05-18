import React from "react";
import "../css/style.css";

const Store = () => {
  return (
    <div className="container ourStores">
      <div className="row">
        <div className="col-lg-6 row-sm-12 d-flex align-items-center">
          <div className="text-left">
            <h3 className="text-left textParallax text-uppercase">
              Visit our store
            </h3>
            <h4 className="text-left">
              Jl. Tidar No. 23, Karang Besuki, Kota Malang - Sukun, Jawa Timur
            </h4>
            <a className="btn btn-outline-dark" href="/" role="button">
              Visit Now
            </a>
          </div>
        </div>
        <div className="col-lg-6 row-sm-12 text-center store w-lg-50"></div>
      </div>
    </div>
  );
};

export default Store;
