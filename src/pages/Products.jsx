import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductDetailComp from "../components/ProductDetailComp";

import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getProduct, getProductCategory } from "../store/action/actionProduct";

class Product extends Component {
  componentDidMount = async () => {
    console.log("cek mounted");
    this.props.getProduct();
  };

  render() {
    console.warn("cek dari product", this.props.data);
    const splitArray = (array, size) => {
      if (!array.length) {
        return [];
      }
      const head = array.slice(0, size);
      const tail = array.slice(size);
      return [head, ...splitArray(tail, size)];
    };
    const data = this.props.dataProducts.data;
    const splitListTest = splitArray(data, 4);
    return (
      <div>
        <Navigation {...this.props} />
        {splitListTest.map((baris) => (
          <div
            className="container border-top row"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0",
            }}
          >
            {baris.map((item, value) => (
              <div
                className="col-sm-3 d-flex justify-content-center "
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  padding: "0",
                }}
              >
                <ProductDetailComp
                  id={item.id}
                  nama={item.name}
                  harga={item.price}
                  gambar={item.img}
                />
              </div>
            ))}
          </div>
        ))}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dataProducts: state.product,
  };
};

const mapDispatchToProps = {
  getProduct,
  doSignOut,
  getProductCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
