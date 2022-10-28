import React from "react";
import "./styles.css";

function CardServices({ title, description, icon_type }) {
  return (
    <div className="card-service left-animation">
      <i className={`bx icon bx-sm ${icon_type}`}></i>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default CardServices;
