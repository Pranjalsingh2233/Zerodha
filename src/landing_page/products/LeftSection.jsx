import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-3">
      <div className="row p-5 mt-5">
        <div className="col-6 p-3">
          <img src={imageUrl} alt="product" className="img-fluid" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="text-muted">{productName}</h1>
          <p className="text-muted">{productDesc}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "100px" }}
            >
              Learn more{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a
              href={appStore}
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              <img src="/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
