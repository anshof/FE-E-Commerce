import React, { Component } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getProduct, getProductCategory } from "../store/action/actionProduct";

class Product extends Component {
  componentDidMount = async () => {
    console.log("cek mounted");

    const paramCategory = await this.props.match.params.category;
    console.log("ini param", paramCategory);
    if (paramCategory) {
      this.props.getProductCategory(paramCategory);
    } else {
      this.props.getProduct();
    }
    console.warn("ini param category", this);
  };

  // change router detail to get product detail
  changeRouterDetail = (e) => {
    e.preventDefault();
    this.props.history.push("/detail/" + e.target.value);
  };

  render() {
    console.warn("cek dari product", this.props.data);
    return (
      <div style={{ marginTop: "80px" }}>
        <Navigation {...this.props} />
        <div className="container row" style={{ marginLeft: "200px" }}>
          {this.props.data.data.map((baris) => (
            <div
              className=""
              style={{
                width: "300px",
                marginLeft: "50px",
                marginBottom: "50px",
              }}
            >
              <div className="col-sm-3 d-flex justify-content-center ">
                <div className="">
                  <img
                    className="text-center"
                    src={baris.img}
                    alt={baris.name}
                    style={{ width: "300px" }}
                  />
                  <div className="d-flex my-3 justify-content-between">
                    <div>
                      <span className="font-weight-bold text-capitalize">
                        {baris.name}
                      </span>
                      <br />
                      <div className="text-left">
                        Color :
                        <span className="text-capitalize"> {baris.color}</span>
                      </div>
                    </div>
                    <span>Rp {baris.price}</span>
                  </div>
                  <div className="text-left">
                    <button
                      className="text-left btn btn-outline-dark"
                      value={baris.id}
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
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    dataProducts: state.product.dataProducts,
    data: state.product,
  };
};

const mapDispatchToProps = {
  getProduct,
  doSignOut,
  getProductCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
