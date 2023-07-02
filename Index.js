const observer = new IntersectionObserver(entries => entries.filter(entry => entry.intersectionRatio > 0).forEach(entry => entry.target.classList.add("inview")));
const elements = document.querySelectorAll(".fade-up");
elements.forEach((element) => {
  observer.observe(element);
});