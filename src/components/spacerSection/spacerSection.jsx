import React from "react";
import "./spacerSection.css";
import hklogo from "../../hk.svg";

function SpacerSection() {
  return (
    <div className="SpacerContainer">
      <div className="description">
        <img src={hklogo} alt="cargo sea" />
        <h1 className="titleLarge">INSTANT QUOTATIONS NO WAIT TIME</h1>
        <p>
          Enjoy our modern and easy to use quoting tool right away. Finally,
          shipping is as simple as it should be.
        </p>
        <button className="quote">GET A QUOTE</button>
      </div>
    </div>
  );
}

export default SpacerSection;
