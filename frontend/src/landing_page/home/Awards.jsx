import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="images/largestBroker.svg" className="img-fluid"></img>
        </div>
        <div className="col-lg-6 col-sm-12 p-md-5 mt-md-5 mb-md-5">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contributes to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              src="images/pressLogos.png"
              style={{ width: "90%", minWidth: "280px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
