import React, { Component } from "react";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { postProduct, changeInputProduct } from "../store/action/actionProduct";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class StartSelling extends Component {
  postAfterProduct = async () => {
    await this.props.postProduct();
    this.props.history.push("/");
  };

  render() {
    console.warn("cek props dari page startselling", this.props);
    const message = this.props.location.state
      ? this.props.location.state.message
      : "";
    return (
      <div>
        <Navigation {...this.props} />
        <div className="my-5 d-flex justify-content-center align-items-center">
          <section className="startselling">
            <div className="container text-center mt-5 d-flex justify-content-center">
              <form className="" onSubmit={(e) => e.preventDefault()}>
                <p className="text-white textSell text-uppercase">Lets Start Selling</p>
                <div className="form-group">
                  <label
                    for="exampleInputEmail1"
                    className="text-white text-left"
                  >
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    type="text"
                    name="name"
                    placeholder="Your product name"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Price"
                    name="price"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Color
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Color"
                    name="color"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Weight
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="weight"
                    name="weight"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Size"
                    name="size"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your product image"
                    name="img"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Stock
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="stock"
                    name="stock"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Promo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="promo"
                    name="promo"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Discount
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="discount"
                    name="discount"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Product Type Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="product_type_id"
                    name="product_type_id"
                    onChange={(e) => this.props.changeInputProduct(e)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-block mr-3 mt-2 text-white"
                  onClick={() => this.postAfterProduct()}
                >
                  Sell this!
                </button>
                <p className="mt-2 mb-3" style={{ color: "blue" }}>
                  {message}
                </p>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.product.name,
    price: state.product.price,
    color: state.product.color,
    weight: state.product.weight,
    size: state.product.size,
    img: state.product.img,
    stock: state.product.stock,
    promo: state.product.promo,
    discount: state.product.discount,
    product_type_id: state.product.product_type_id,
  };
};

const mapDispatchToProps = {
  postProduct,
  changeInputProduct,
  doSignOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(StartSelling);
