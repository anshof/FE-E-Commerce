import React from "react";

const Details = ({
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
}) => {
  return (
    <div>
      <h2>{nama}</h2>
      <img src={gambar} alt={nama} />
      <p>{harga}</p>
      <p>{warna}</p>
      <p>{berat}</p>
    </div>
  );
};

export default Details;
