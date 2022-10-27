import React from "react";
import "./styles.css";

function SectionHeader(props) {
  return (
    <div className="about-presentation-container">
      <div className="about-box-presentation">
        <span className="about-presentation-arrow"></span>
        <p className="about-presentation-text">{props.name}</p>
      </div>
      <h2 className="about-presentation-desc">{props.description}</h2>
    </div>
  );
}

export default SectionHeader;
