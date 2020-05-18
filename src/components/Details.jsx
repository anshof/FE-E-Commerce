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
      <div
        className="container border rounded d-flex align-self-center justify-content-center"
        style={{ margin: "90px 60px", padding: "0" }}
      >
        <div className="row my-5">
          <div className="col-lg-6 row-sm-12">
            <img src={props.gambar} alt="baju" id="baju-utama" />
          </div>
          <div className="col-lg-6 row-sm-12 my-auto mx-auto">
            <div>
              <h4 className="namaProduk">{props.nama}</h4>
              <br />
              <span>Rp.{props.harga}.-</span>
              <br />
              <span>Warna: {props.warna}</span>
              <br />
              <span>Size: {props.size}</span>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="btn btn-outline-dark"
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
