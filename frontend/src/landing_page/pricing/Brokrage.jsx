import React from "react";

function Brokrage() {
  return (
    <div className="container p-3 mb-5">
      <div className="row p-md-5 text-center border-top">
        <div className="col-md-8 mb-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-5">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>
              Call & Trade and RWS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).{" "}
            </li>
            <li>
              If the account is in debt balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-md-4 mb-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
