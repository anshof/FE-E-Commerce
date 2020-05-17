import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import Details from "../components/Details";
// import Deskripsi2 from "../components/DeskripsiProduk2";
import { getDetailProduct } from "../store/actions/productAction";
// import {
//   postTransaction,
//   changeInputTransaction,
// } from "../store/actions/transactionAction";

class MoreDetail extends Component {
  render() {
    // const { product, isLoading } = this.props.dataProduct;
    const product = this.props.dataProduct.product;
    console.warn("cek produk detail page", this.props.dataProduct.product);
    const isLoading = this.props.dataProduct.isLoading;
    return (
      <div className="">
        <React.Fragment>
          <div className="img-detail">
            <Header />
            <div className="">
              {isLoading ? (
                // must have condition
                <h1>Loading....</h1>
              ) : (
                <div className="container">
                  <div className="py-2">
                    <Details product={product} {...this.props} />
                  </div>
                  {/* <div className="mb-3">
                    <Deskripsi2 product={product} />
                  </div> */}
                </div>
              )}
            </div>
            <Footer />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getDetailProduct,
  //   postTransaction,
  //   changeInputTransaction,
};

const mapStateToProps = (state) => {
  return {
    dataProduct: state.product,
    // dataTransaction: state.transaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreDetail);
