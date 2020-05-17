import React from "react";
import "../css/style.css";
// import { Link } from "react-router-dom";

const ProductDetailComp = ({
  nama,
  harga,
  warna,
  berat,
  ukuran,
  gambar,
  stok,
  promo,
  discount,
  product_type_id,
  // changeRouter,
  // props,
}) => {
  // changeRouter = async (detail) => {
  //   if (props.handleRouter) {
  //     props.handleRouter(detail);
  //   } else {
  //     await props.history.replace("/" + detail);
  //   }
  //};
  return (
    <div className="detProd">
      {/* <Link className="text-decoration-none" to="/detail"> */}
      <div className="d-flex justify-content-center card">
        <img className="text-center card-img-top" src={gambar} alt={nama} />
        <div className="card-body">
          <p className="card-text font-weight-bold text-uppercase">{nama}</p>
          <p>Rp {harga}</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
export default ProductDetailComp;
