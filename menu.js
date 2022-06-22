const menu = document.querySelector(".menu");
const navigationMoblie = document.querySelector(".navigation");


menu.addEventListener("click", ()=>{
    navigationMoblie.classList.toggle("navigation-mobile");
    navigationMoblie.classList.toggle("top-arrow");
})