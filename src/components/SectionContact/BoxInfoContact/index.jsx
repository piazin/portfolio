import React from "react";
import "./styles.css";

export default function BoxInfoContact({ title, desc, icon }) {
  return (
    <div className="box-info-contact">
      <i className={`bx ${icon} bx-sm text-box-info-contact`}></i>
      <span>
        <h3 className="text-box-info-contact">{title}</h3>
        <p className="text-box-info-contact">{desc}</p>
      </span>
    </div>
  );
}
