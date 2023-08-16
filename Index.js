function handleIntersection(e) {
  e.filter((e) => e.intersectionRatio > 0).forEach((e) =>
    e.target.classList.add("inview")
  );
}
const elements = document.getElementsByClassName("fade-up"),
  observer = new IntersectionObserver(handleIntersection);
Array.from(elements).forEach((e) => observer.observe(e));

const myEnvVar = process.env.api;
console.log(myEnvVar)
// const netlifyConfig = require('netlify-config');
// const myEnvVar = netlifyConfig.env.api;