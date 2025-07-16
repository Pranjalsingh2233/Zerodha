import React from "react";

function RightSection({ productName, productDesc, learnMore, imgUrl }) {
  let style =
    productName == "Console" ? { marginTop: "13%" } : { marginTop: "6%" };
  return (
    <div className="container p-3">
      <div className="row p-5 mt-5">
        <div className="col-6 p-5" style={style}>
          <h1 className="text-muted">{productName}</h1>
          <p className="text-muted">{productDesc}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6 p-3 ">
          <img src={imgUrl} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
