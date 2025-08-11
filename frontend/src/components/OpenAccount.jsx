import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-md-5 mb-5">
      <div className="row text-center">
        <div className="col mb-5">
          <h1 className="mb-3">Open a Zerodha account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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

export default OpenAccount;
