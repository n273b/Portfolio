const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const headingEducation = document.querySelector(".h3#education");
const headingAchievements = document.querySelector(".h3#achieve");
const headings = document.querySelectorAll(".h3");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".box-flexbox").forEach(n => n.addEventListener("mouseover", () => {
    headingEducation.style.color = "#f00090";
    headingAchievements.style.color = "#f00090";
}))

document.querySelectorAll(".box-flexbox").forEach(n => n.addEventListener("mouseout", () => {
    headingEducation.style.color = "#f0f8ff";
    headingAchievements.style.color = "#f0f8ff";
}))
