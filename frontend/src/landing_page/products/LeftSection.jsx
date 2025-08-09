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
      <div className="row p-md-5 mt-md-5">
        <div className="col-md-6 p-3">
          <img src={imageUrl} alt="product" className="img-fluid" />
        </div>
        <div className="col-md-6 p-md-5 mt-md-5">
          <h1 className="text-muted">{productName}</h1>
          <p className="text-muted">{productDesc}</p>
          <div className="box">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              className="link-width"
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn more{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3 box" style={{ gap: "1rem" }}>
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ textDecoration: "none" }}>
              <img src="/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
