import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container p-3">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center text-muted">People</h1>
      </div>
      <div
        className="row p-md-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-md-6 p-3 text-center">
          <img
            src="images/Pranjal.jpg"
            className="img-fluid"
            style={{ width: "50%", minWidth: "250px" }}
          />
          <h4 className="mb-3 mt-3">Pranjal Singh</h4>
          <h6>Full-stack Developer</h6>
        </div>
        <div className="col-md-6 p-md-3">
          <p>
            As a passionate Full stack developer, I specialize in building
            dynamic, responsive, and scalable web applications using MongoDB,
            Express.js, React, and Node.js. With a strong foundation in both
            front-end and back-end technologies, I am committed to creating
            seamless user experiences and robust, performance-driven solutions
          </p>
          <p>Playing cricket is his zen.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
