import React from "react";
import "./styles.css";

function Main() {
  return (
    <main id="main">
      <div className="box-about">
        <span>--- my name is</span>
        <h1>Lucas Souza</h1>
        <p>
          Creative front-end developer with more than +2 years of experience in
          enterprise companies and startups. Proficient in Html, Tailwind Css,
          Javascript and React. Passionate about UI/UX
        </p>

        <div className="box-social-icons">
          <span>🙃</span>
          <span>🗿</span>
          <span>🐏</span>
        </div>
      </div>

      <div className="box-img">
        <span>retangle 1</span>
        <span></span>
      </div>
    </main>
  );
}

export default Main;
