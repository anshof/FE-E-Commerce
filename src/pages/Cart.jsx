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

class Cart extends React.Component {
  componentDidMount = async () => {
    console.log("gettransdetail", this.props);
    await this.props.getTransDetail();
  };

  deleteTrans = async (e) => {
    e.preventDefault();
    await this.props.deleteTrans(e.target.value);
  };

  cekOut = async () => {
    await this.props.checkOut();
    this.props.history.push("/checkout");
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container" style={{ margin: "100px 60px" }}>
          <div className="row">
            <div className="col-xs-8 col-sm-12">
              <div className="panel panel-info">
                <div className="row d-flex justify-content-center border-bottom">
                  <h2 style={{ fontFamily: "Amaranth" }}>Shopping Cart</h2>
                </div>
                <div className="panel-body">
                  {this.props.data.map((el, index) => {
                    return (
                      <div className="row border-bottom mt-1 pt-5" key={index}>
                        <div className="row pl-5 my-5">
                          <h3
                            style={{ fontFamily: "Amaranth" }}
                            className="text-uppercase"
                          >
                            {el.cart.shop_id.name} Shop
                          </h3>
                        </div>
                        <div className="row">
                          <div className="col-sm-8">
                            {el.transaction_detail.map((subel, i) => {
                              return (
                                <div key={i}>
                                  <img
                                    className=""
                                    src={subel.product_id.img}
                                    alt="coba"
                                    style={{ width: "200px" }}
                                  />
                                </div>
                              );
                            })}
                          </div>

                          <div className="col-sm-4 mt-4">
                            {el.transaction_detail.map((subel, i) => {
                              return (
                                <div
                                  key={i}
                                  className="my-5"
                                  style={{ width: "450px" }}
                                >
                                  <h5 className="product-name">
                                    {subel.product_id.name}
                                  </h5>
                                  <h5>
                                    <small>
                                      Color: {subel.product_id.color}
                                    </small>
                                    <br />
                                    <small>Size: {subel.product_id.size}</small>
                                    <br />
                                    <small>Rp {subel.product_id.price}</small>
                                  </h5>

                                  <button
                                    className="btn btn-outline-dark mb-5"
                                    value={subel.id}
                                    onClick={(e) => this.deleteTrans(e)}
                                  >
                                    Delete item
                                  </button>
                                </div>
                              );
                            })}
                            <div className="col-sm-6">
                              <div className="col-sm-6 text-right"></div>
                              <div className="col-sm-4"></div>

                              <div className="col-sm-2">
                                <button
                                  type="button"
                                  className="btn btn-link btn-xs"
                                >
                                  <span className="glyphicon glyphicon-trash">
                                    {" "}
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="panel-footer">
                <div className="row text-center my-5">
                  <div className="col-xs-9">
                    {this.props.data.map((el, index) => (
                      <div key={index}>
                        <h5 className="text-right">
                          Total quantity from{" "}
                          <span className="text-uppercase">
                            {el.cart.shop_id.name} Shop{" "}
                          </span>
                          : <strong>{el.cart.total_qty}</strong>
                          <br />
                          Total price <strong>Rp{el.cart.total_price}.-</strong>
                        </h5>
                      </div>
                    ))}
                  </div>

                  <br />
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-block"
                    onClick={(e) => this.cekOut(e)}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
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
    dataDetail: state.product.dataDetail,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getTransDetail,
  getDetailProduct,
  deleteTrans,
  checkOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
