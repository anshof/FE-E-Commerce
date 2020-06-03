import React, { Fragment } from "react";
import "../css/style.css";

const Details = (props, postTransaction) => {
  postTransaction = async (e) => {
    e.preventDefault();
    await props.postCart(e.target.value);

    props.statusError
      ? alert("anda belum berhasil menambahkan product!")
      : props.history.push("/cart");
  };
  return (
    <Fragment>
      <div className="container rounded d-flex" style={{ margin: "30px 60px" }}>
        <div
          className="row text-left my-5"
          style={{ marginLeft: "50px", width: "100%" }}
        >
          <div className="col-lg-6 pr-0 br-0 row-sm-12">
            <img
              src={props.gambar}
              alt="baju"
              id="baju-utama"
              style={{ width: "400px" }}
            />
          </div>
          <div className="col-lg-6 mt-5 row-sm-12">
            <div>
              <h2 className="namaProduk pb-0">{props.nama}</h2>
              <br />
              <span className="mt-0">Rp.{props.harga}.-</span>
              <br />
              <span>Warna: {props.warna}</span>
              <br />
              <span>Size: {props.size}</span>
              <br />
              <span>Stock: {props.stock}</span>
              <br />
              <span>Weight: {props.weight}</span>
              <br />

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block"
                  value={props.id}
                  onClick={(e) => postTransaction(e)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
