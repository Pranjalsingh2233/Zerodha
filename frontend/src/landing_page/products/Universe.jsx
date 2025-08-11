import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container p-3">
      <div className="row p-md-5 mt-5 mb-5 text-center">
        <h1 className="text-muted">The Zerodha Universe</h1>
        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-md-4 p-3 mt-md-5">
          <img
            src="images/smallcaseLogo.png"
            className="img-fluid"
            style={{ height: "3.5rem" }}
          />
          <p className="small-text text-muted">Thematic investment platform</p>
        </div>
        <div className="col-md-4 p-3 mt-md-5">
          <img
            src="images/streakLogo.png"
            className="img-fluid"
            style={{ height: "3.5rem" }}
          />
          <p className="small-text text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-md-4 p-3 mt-md-5">
          <img
            src="images/sensibullLogo.svg"
            className="img-fluid"
            style={{ height: "2.5rem" }}
          />
          <p className="small-text text-muted">Options trading platform</p>
        </div>
        <div className="col-md-4 p-3 mt-md-5">
          <img
            src="images/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ height: "3.5rem" }}
          />
          <p className="small-text text-muted">Asset management</p>
        </div>
        <div className="col-md-4 p-3 mt-md-5">
          <img
            src="images/goldenpiLogo.png"
            className="img-fluid"
            style={{ height: "3.5rem" }}
          />
          <p className="small-text text-muted">Bonds trading platform</p>
        </div>
        <div className="col-md-4 p-3 mt-md-5">
          <img
            src="images/dittoLogo.png"
            className="img-fluid"
            style={{ height: "3.5rem" }}
          />
          <p className="small-text text-muted">Insurance</p>
        </div>
        <Link
          className="btn btn-primary fs-5 mt-3 mx-auto"
          style={{ width: "202px" }}
          to="/signup"
        >
          Sign up now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
