const header = document.querySelector(".site-header");

const shrinkAt = 40; // px scroll threshold
let lastState = false;

// shrink header on scroll
window.addEventListener("scroll", () => {
  const shouldShrink = window.scrollY > shrinkAt;
  if (shouldShrink !== lastState) {
    header.classList.toggle("is-small", shouldShrink);
    lastState = shouldShrink;
  }
});