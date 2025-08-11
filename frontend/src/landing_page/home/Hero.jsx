import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-md-5 mb-md-5 mt-5 mt-md-0">
      <div className="row text-center">
        <div className="col mb-5">
          <img
            src="images/homeHero.png"
            className="img-fluid mb-md-5"
            alt="Hero Image"
          ></img>
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <Link
            className="btn btn-primary fs-5 mt-3"
            style={{ width: "202px" }}
            to="/signup"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
