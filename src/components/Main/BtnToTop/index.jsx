import React from 'react';
import './styles.css';

export default function ButtonToTop() {
  function toTop() {
    scrollTo(0, 0);
    window.history.replaceState('https://lucasouza.tech', 'Sample Title', '/');
  }

  function showBtnToTop() {
    if (scrollY > 700) {
      document.getElementById('btn-to-top').classList.add('btn-to-top-is-visible');
    } else if (scrollY < 600) {
      document.getElementById('btn-to-top').classList.remove('btn-to-top-is-visible');
    } else if (scrollY < 550) {
      document.getElementById('btn-to-top').style.display = 'none';
    }
  }

  window.addEventListener('scroll', () => {
    showBtnToTop();
  });

  return (
    <button id="btn-to-top" onClick={() => toTop()}>
      <i className="bx bx-up-arrow-alt bx-sm"></i>
    </button>
  );
}
