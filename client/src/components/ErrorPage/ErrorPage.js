import React from "react";

const SuccessPage = () => {
  return (
      <div id="header-text" className="container">
          <p id="code">404</p>
          <p>The page was not found</p>
          <a href="/">
            <button
              className="btn btn-lg btn-outline-primary"
            >
              Continue to homepage
            </button>
          </a>
        </div>
  );
};

export default SuccessPage;
