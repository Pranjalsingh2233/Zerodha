import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col mb-5">
          <img
            src="images/homeHero.png"
            className="img-fluid mb-5"
            alt="Hero Image"
          ></img>
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="btn btn-primary fs-5" style={{ width: "15%" }}>
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
