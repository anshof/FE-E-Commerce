import React, { Fragment } from "react";
import "../css/style.css";

const Details = ({ gambar, harga, nama, warna, size }) => {
  return (
    <Fragment>
      <div className="container" style={{ margin: "90px 0" }}>
        <div className="row">
          <div className="col-sm-5 mt-5">
            <img src={gambar} alt="baju" id="baju-utama" />
          </div>
          <div className="col-sm-7 mt-5">
            <h4>{nama}</h4>
            <br />
            <span>Rp.{harga}.-</span>
            <br />
            <span>Warna: {warna}</span>
            <br />
            <span>Size: {size}</span>
            <div className="row mt-4 text-center">
              <button type="button" className="btn btn-outline-dark">
                Add to Cart
              </button>
              {/* <button
                type="button"
                className="btn btn-outline-dark"
                             >
                Beli Sekarang!
              </button> */}
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-sm-5 mt-5">
            <div className="row" style={{ marginLeft: "100px" }}>
              <div className="col-3">
                <img src={gambar} alt="baju" id="gambar-detail" />
              </div>
              <div className="col-3">
                <img src={gambar} alt="baju" id="gambar-detail" />
              </div>
              <div className="col-3">
                <img src={gambar} alt="baju" id="gambar-detail" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Details;
