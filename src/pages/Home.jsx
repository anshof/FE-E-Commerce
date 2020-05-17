import React from "react";
import Navigation from "../components/Navigation";

import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import { getProductCategory } from "../store/action/actionProduct";

import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Category from "../components/Category";
import ParallaxProduct from "../components/ParallaxProduct";
import Store from "../components/Store";

class Home extends React.Component {
  handleRequestCategory = async (categoryName) => {
    // await this.props.history.replace("/" + category);
    // this.props.getProductCategory(category);
    await this.props.history.replace("/" + categoryName);
    this.props.getProductCategory(categoryName);
  };

  render() {
    console.warn("cek dari home", this);
    return (
      <div>
        <Navigation {...this.props} />
        <Jumbotron />
        <ParallaxProduct />
        <div>
          <Category handleRouter={(e) => this.handleRequestCategory(e)} />
        </div>
        <Store />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
  };
};
const mapDispatchToProps = {
  doSignOut,
  getProductCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
