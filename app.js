const flex = document.querySelector(".flex");
const block = document.querySelector(".educationInfo");
const none = document.querySelector("none");


const hamburger = document.querySelector(".hamburgerInput");
const hamburgerOpenNav = document.querySelector(".hamburgerOpenNav");
hamburger.addEventListener("click", () => {

  hamburgerOpenNav.classList.toggle("open")

  console.log("sa");
})

const hamburgerCloseNav = document.querySelector(".hamburgerCloseNav")


//! about
const items = document.querySelectorAll(".CvSelected div");
items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(el => el.classList.remove("selected"));
    item.classList.add("selected");
  });
});


// !Short Course
const educationInfo = document.querySelector(".educationInfo");
const ShortCourse = document.querySelector(".ShortCourse");
const education = document.querySelector(".education");
const educationText = document.querySelector(".educationText");
const shortCourseText = document.querySelector(".shortCourseText")
const Experience = document.querySelector(".Experience")
const ExperienceText = document.querySelector(".ExperienceText")
const Details = document.querySelector(".Details")
const DetailsText = document.querySelector(".DetailsText")
// education.addEventListener("click",()=>{
//     ShortCourse.classList.add("none")
// })

education.addEventListener("click", () => {
  educationInfo.style.display = "block"
  ShortCourse.style.display = "none"
  Experience.style.display = "none"
  Details.style.display = "none"

})

shortCourseText.addEventListener("click", () => {
  educationInfo.style.display = "none"
  ShortCourse.style.display = "block"
  Experience.style.display = "none"
  Details.style.display = "none"

})

ExperienceText.addEventListener("click", () => {
  Experience.style.display = "block";
  ShortCourse.style.display = "none"
  educationInfo.style.display = "none"
  Details.style.display = "none"

})

DetailsText.addEventListener("click", () => {
  Details.style.display = "block"
  Experience.style.display = "none";
  ShortCourse.style.display = "none"
  educationInfo.style.display = "none"
})
//! about