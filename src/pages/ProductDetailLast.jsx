import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Details from "../components/Details";
import { doSignOut } from "../store/action/actionUser";
import { getDetailProduct } from "../store/action/actionProduct";
import { connect } from "react-redux";
import { postCart } from "../store/action/actionCart";
class ProductDetailLast extends React.Component {
  componentDidMount = async () => {
    const paramCategory = await this.props.match.params.id;
    if (paramCategory) {
      this.props.getDetailProduct(paramCategory);
    }
  };
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <Details
          gambar={this.props.detailData.img}
          harga={this.props.detailData.price}
          nama={this.props.detailData.name}
          warna={this.props.detailData.color}
          size={this.props.detailData.size}
          id={this.props.detailData.id}
          postCart={(e) => this.props.postCart(e)}
          {...this.props}
        />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    detailData: state.product.detailData,
    countCart: state.cart.countCart,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getDetailProduct,
  postCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailLast);
