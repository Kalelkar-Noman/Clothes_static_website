// Create a named function instead of using arrow functions
function handleIntersection(entries) {
  entries
    .filter(entry => entry.intersectionRatio > 0)
    .forEach(entry => entry.target.classList.add("inview"));
}
// Use a more specific selector to target only the elements that need to be observed
const elements = document.getElementsByClassName("fade-up");
// Create a new IntersectionObserver instance, passing in the handleIntersection function
const observer = new IntersectionObserver(handleIntersection);
// Observe each element individually
Array.from(elements).forEach(element => observer.observe(element));