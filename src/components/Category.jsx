import React from "react";
import { Link } from "react-router-dom";

const Category = (props, changeRouter) => {
  changeRouter = async (category) => {
    if (props.handleRouter) {
      props.handleRouter(category);
    } else {
      await props.history.replace("/" + category);
    }
  };
  return (
    <div className="container category mb-5">
      <h3 className="my-5 font-weight-bold">
        Complete Your Look with SOPHISTICATED
      </h3>
      <div className="row">
        <div className="col-lg-4 row-sm-12 d-flex border-right align-items-center">
          <div className="mx-auto square my-auto d-flex align-items-center justify-content-center">
            <div>
              <Link className="text-decoration-none" to="/tops">
                <img
                  className="pictProduct"
                  src={require("../images/product/1.jpg")}
                  alt="tops"
                  value={2}
                  onClick={(e) => changeRouter(e)}
                />
                <h4 className="pt-3 textCategory text-uppercase">Tops</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 row-sm-12 d-flex align-items-center">
          <div className="mx-auto square my-auto d-flex align-items-center justify-content-center">
            <div>
              <Link className="text-decoration-none" to="/bottoms">
                <img
                  className="pictProduct"
                  src={require("../images/product/bottom.jpg")}
                  alt="bottoms"
                  value={3}
                  onClick={() => changeRouter(3)}
                />
                <h4 className="pt-3 textCategory text-uppercase">Bottom</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 row-sm-12 d-flex border-left align-items-center">
          <div className="mx-auto square my-auto d-flex align-items-center justify-content-center">
            <div>
              <Link className="text-decoration-none" to="/dress">
                <img
                  className="pictProduct"
                  src={require("../images/product/dress.jpg")}
                  alt="tops"
                  value={1}
                  onClick={() => changeRouter(1)}
                />
                <h4 className="pt-3 textCategory text-uppercase">dress</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
