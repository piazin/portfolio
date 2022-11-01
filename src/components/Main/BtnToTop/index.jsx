import React from "react";
import "./styles.css";

export default function ButtonToTop() {
  function toTop() {
    scrollTo(0, 0);
  }

  function showBtnToTop() {
    if (scrollY > 700) {
      document.getElementById("btn-to-top").style.opacity = 1;
    } else if (scrollY < 600) {
      document.getElementById("btn-to-top").style.opacity = 0;
    }
  }

  window.addEventListener("scroll", () => {
    showBtnToTop();
  });

  return (
    <button id="btn-to-top" onClick={() => toTop()}>
      <i className="bx bx-up-arrow-alt bx-sm"></i>
    </button>
  );
}
