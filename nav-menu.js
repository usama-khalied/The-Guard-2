const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-bar");
const navLink = document.querySelectorAll(".nav-bar-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// slider - section

const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const slide = document.querySelector('.slide')
const right = document.querySelector('.right');
var sectionIndex = 0;
right.addEventListener('click', function () {
    // sectionIndex = (sectionIndex < 2) ?  sectionIndex + 1 : 2; 
    if (sectionIndex = sectionIndex < 2) {
        sectionIndex + 1;
    }
    else {
        sectionIndex + 2;
    }
    slider.style.transform = "translate(" + (sectionIndex = sectionIndex + 1) * -33 + "%)";
})
left.addEventListener('click', function () {
    slider.style.transform = "translate(0%)";
});


// scroll animation start --// --  prizing section
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.price-cards-wrapper');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.6;

    if(contentPosition<screenPosition) {
content.classList.add("active");

    }
 else {
     content.classList.remove("active");
 }
});
// scroll animation start --// -- service section

window.addEventListener('scroll',()=>{
    let content1 = document.querySelector('.service-row');
    let contentPosition1 = content1.getBoundingClientRect().top;
    let screenPosition1 = window.innerHeight / 1.6;
    if(contentPosition1<screenPosition1) {
content1.classList.add("active");
    }
 else {   
     content1.classList.remove("active");
 }
});

// scroll animation start --// -- our guard section

window.addEventListener('scroll',()=>{
    let content2 = document.querySelector('#speakers-list');
    let contentPosition2 = content2.getBoundingClientRect().top;
    let screenPosition2 = window.innerHeight / 1.6;
    if(contentPosition2<screenPosition2) {
content2.style.opacity="1";
content2.style.transform = "translateY(0px)";

    }
 else {   
     content2.style.opacity="0";
     content2.style.transform = "translateY(150px)";

 }
});
sc
window.addEventListener('scroll',()=>{
    let content3 = document.querySelector('.container-post-cards-wrapper');
    let contentPosition3 = content3.getBoundingClientRect().top;
    let screenPosition3 = window.innerHeight / 1.6;
    if(contentPosition3<screenPosition3) {
        content3.classList.add("active");

    }
 else {   
    content3.classList.remove("active");

 }
});