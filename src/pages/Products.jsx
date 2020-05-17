import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getProduct, getProductCategory } from "../store/action/actionProduct";

class Product extends Component {
  componentDidMount = async () => {
    console.log("cek mounted");
    this.props.getProduct();
  };

  // change router detail to get product detail
  changeRouterDetail = (e) => {
    e.preventDefault();
    this.props.history.push("/detail/" + e.target.value);
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
            {baris.map((item) => (
              <div
                className="col-sm-3 d-flex justify-content-center "
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  padding: "0",
                }}
              >
                <div className="detProd">
                  <div className="d-flex justify-content-center card">
                    <img
                      className="text-center card-img-top"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="card-body">
                      <p className="card-text font-weight-bold text-uppercase">
                        {item.name}
                      </p>
                      <p>Rp {item.price}</p>
                      <button
                        className="btn btn-outline-dark"
                        value={item.id}
                        onClick={(e) => this.changeRouterDetail(e)}
                      >
                        See details
                      </button>
                    </div>
                  </div>
                </div>
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
    login: state.user.is_login,
    dataProducts: state.product,
  };
};

const mapDispatchToProps = {
  getProduct,
  doSignOut,
  getProductCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
