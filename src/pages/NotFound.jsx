import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Navigation {...this.props} />
        <div className="d-flex justify-content-center align-items-center">
          <h1>404 NOT FOUND</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
export default NotFound;
