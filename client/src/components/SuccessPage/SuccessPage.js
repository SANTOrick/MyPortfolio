import React from "react";
import "./SuccessPage.css";

const SuccessPage = () => {
  return (
      <div className="container">
          <p className="header-text">Thank you!</p>
          <p>We will contact you within 2 days.</p>
          <hr style={{ marginTop: "40px" }} />
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
