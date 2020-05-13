import React from "react";
import Navigation from "../components/Navigation";

import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Category from "../components/Category";
import NewArrivals from "../components/NewArrivals";
import Tops from "../components/Tops";
import Dress from "../components/Dress";
class Home extends React.Component {
  // change router and request movies by category
  // handleRequestCategoryMovies = async (categoryName) => {
  //   const paramCategory = this.props.match.params.category;
  //   await this.props.history.replace("/" + categoryName);
  //   this.props.getMovie(paramCategory);
  // };

  render() {
    console.warn("cek dari home", this);
    return (
      <div>
        <Navigation {...this.props} />
        {/* <Jumbotron />
        <div>
          <Category />
        </div>
        <NewArrivals /> */}
        {/* <Tops /> */}
        <Dress />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
