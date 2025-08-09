import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-3 mb-md-5" id="supportHero">
      <div className="container p-3">
        <div className="pb-4 p-sm-3 p-md-5" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track ticket</a>
        </div>
        <div className="row p-md-5 width-fix" style={{ margin: "0 88px" }}>
          <div className="col-md-6">
            <h1 className="fs-3 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className="mb-3 form-control"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            />
            <a href="" className="me-3">
              Track account opening
            </a>
            <a href="" className="me-3">
              Track segment activation
            </a>
            <a href="" className="me-3">
              Intraday margins
            </a>
            <a href="" className="me-3">
              Kite user manual
            </a>
          </div>
          <div className="col-md-6 mb-5 ps-md-5 mt-5 mt-md-0">
            <h1 className="fs-3 mb-3">Featured</h1>
            <br className="d-none d-sm-block" />
            <ol>
              <li>
                <a href="" className="line">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="" className="line">
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
