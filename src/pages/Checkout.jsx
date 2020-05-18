import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import {
  getTransDetail,
  deleteTrans,
  checkOut,
} from "../store/action/actionCart";
import { getDetailProduct } from "../store/action/actionProduct";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container text-center" style={{ margin: "80px 60px" }}>
          <h3 style={{ fontFamily: "Amaranth" }}>Order Confirmation</h3>
          <p>Thank you for choosing SOPHISTICATED</p>
          <p>
            Your estimated delivery arriving is 3 days from your ordering date
          </p>
          <p>We hope to see you again</p>
          <Link
            className="text-decoration-none"
            style={{ fontFamily: "Amaranth", color: "#222831" }}
            to="/"
          >
            <h5>SOPHISTICATED</h5>
          </Link>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    data: state.cart.dataCart,
    detailData: state.product.detailData,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getTransDetail,
  getDetailProduct,
  deleteTrans,
  checkOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
