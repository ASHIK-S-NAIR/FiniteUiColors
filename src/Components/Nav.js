import React from "react";

function Nav() {
  return (
    <section className="nav-section">
      <div className="wrap nav-wrap">
        <div className="nav-top">
          <h1 className="nav-logo">FiniteUiColors</h1>
          <button className="nav-top-mode-btn">Light</button>
        </div>
        <div className="nav-main-sec">
          <div className="nav-main">
            <h1 className="nav-main-header">One stop color solutions</h1>
            <h3 className="nav-main-subHeader">
              collections of colors based on user interface research
            </h3>
          </div>
        </div>
        <div className="nav-bottom-sec">
          <div className="nav-bottom">
            <button className="nav-bottom-btn">Solid</button>
            <button className="nav-bottom-btn">Gradients</button>
            <button className="nav-bottom-btn">Palletes</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
