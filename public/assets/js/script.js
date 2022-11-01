function animationElements(className) {
  var elementsShown = [];
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (elementsShown.includes(String(entry.target.className))) {
        return;
      }
      if (entry.isIntersecting) {
        entry.target.classList.add("show-elements-animation");
        elementsShown.push(String(entry.target.className));
      } else {
        entry.target.classList.remove("show-elements-animation");
      }
    });
  });

  var cards = document.querySelectorAll(className);
  cards.forEach((card) => observer.observe(card));
}

window.addEventListener("load", () => {
  animationElements(".card-service");
  animationElements(".card-project");
  animationElements(".container-work-info");
  animationElements(".course-info");
  animationElements(".technologies-skills");
});
