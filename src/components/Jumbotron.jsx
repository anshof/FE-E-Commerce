import React from "react";

const Jumbotron = () => {
  return (
    // <div className="jumbotron jumbotron-fluid">
    //   <div className="container">
    //     <h1 className="textJumbo text-left text-white">
    //       Infuse your daily outfit with
    //       <br />
    //       <strong>SOPHISTICATED</strong>
    //       <br />
    //       colors and patterns.
    //     </h1>
    //   </div>
    // </div>
    // <div
    //   id="carouselExampleIndicators"
    //   class="carousel slide"
    //   data-ride="carousel"
    // >
    //   <ol class="carousel-indicators">
    //     <li
    //       data-target="#carouselExampleIndicators"
    //       data-slide-to="0"
    //       class="active"
    //     ></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img
    //         src={require("../images/bg1.jpg")}
    //         class="d-block w-100"
    //         alt="carousel 1"
    //       />
    //     </div>
    //     <div class="carousel-item">
    //       <h1>lalala</h1>
    //       <img
    //         src={require("../images/black.jpg")}
    //         class="d-block w-100"
    //         alt="carousel 2"
    //       />
    //     </div>
    //   </div>
    //   <a
    //     class="carousel-control-prev"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Previous</span>
    //   </a>
    //   <a
    //     class="carousel-control-next"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Next</span>
    //   </a>
    // </div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={require("../images/black.jpg")}
            class="d-block w-100"
            alt="carousel1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="mb-5 text-left text-carousel">
              Infuse your outfit with <br />
              SOPHISTICATED <br />
              colors and pattern
            </h1>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={require("../images/bg1.jpg")}
            class="d-block w-100"
            alt="carousel2"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src={require("../images/bg3.jpg")}
            class="d-block w-100"
            alt="carousel2"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 className="mb-5 text-white text-carousel">
              Keep it simple and <br />
              SOPHISTICATED
            </h1>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Jumbotron;
