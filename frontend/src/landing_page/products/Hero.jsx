import React from "react";

function Hero() {
  return (
    <div className="container p-3 border-bottom">
      <div className="row p-5 mt-5 mb-5 text-center">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted fs-4 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 text-muted">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
