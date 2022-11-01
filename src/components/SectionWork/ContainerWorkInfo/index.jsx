import React from "react";
import "../styles.css";

function ContainerWorkInfo({
  position,
  business,
  businessLink,
  address,
  period,
  tech,
  activities,
}) {
  var t = [];
  return (
    <div className="container-work-info left-animation">
      <div className="box-business-info">
        <h2 className="position-work">
          {position}{" "}
          <a href={businessLink} target="_blank" rel="external">
            {business}
          </a>
        </h2>
        <address className="address-work">{address}</address>
        <p className="period-work">{period}</p>
        <div className="tech-used">
          {tech.slice(0, 4).map((tec) => (
            <span key={tec}>{tec}</span>
          ))}
          and more...
        </div>
      </div>

      <span className="hr-container-work"></span>

      <div className="box-business-activities">
        {activities.map((active) => (
          <div className="activities-desc" key={active}>
            <span></span>
            <p className="activities-text">{active}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerWorkInfo;
