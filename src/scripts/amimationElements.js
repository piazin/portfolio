/**
 * @summary Function to animate elements when they are in the viewport
 * @param {String} className - Class name of the elements to animate
 */
export default function animationElements(className) {
  var elementsShown = [];
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (elementsShown.includes(String(entry.target.className))) {
        return;
      }
      if (entry.isIntersecting) {
        entry.target.classList.add('show-elements-animation');
        elementsShown.push(String(entry.target.className));
      } else {
        entry.target.classList.remove('show-elements-animation');
      }
    });
  });

  var cards = document.querySelectorAll(className);
  cards.forEach((card) => observer.observe(card));
}
