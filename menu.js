const hamburger = document.querySelector(".hamburger");
const navigationMoblie = document.querySelector(".navigation");


hamburger.addEventListener("click", ()=>{
    navigationMoblie.classList.toggle("navigation-mobile");
    navigationMoblie.classList.toggle("top-arrow");
})