import React from "react";
import "./ErrorPage.css";

const SuccessPage = () => {
  return (
      <div id="header-text" className="container">
          <p id="code">404</p>
          <p>The page was not found</p>
          <a href="/">
            <button
              className="btn btn-lg btn-outline-primary"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              Continue to homepage
            </button>
          </a>
        </div>
  );
};

export default SuccessPage;
