"use strict";
// Change color of active menu
const sections = document.querySelectorAll('section'); //testoo
const navLinks = document.querySelectorAll('.navbar a');
let activeSectionIndex = 0; // Initializes the variable to follow the active section
window.addEventListener('scroll', () => {
    const currentSectionIndex = [...sections].findIndex(section => {
        const sectionTop = section.offsetTop - 100; // Subtract the navbar
        const sectionBottom = sectionTop + section.offsetHeight;
        return window.scrollY >= sectionTop && window.scrollY < sectionBottom;
    });
    // Updates the active section when it chang
    if (currentSectionIndex !== activeSectionIndex) {
        navLinks[activeSectionIndex].classList.remove('active');
        navLinks[currentSectionIndex].classList.add('active');
        activeSectionIndex = currentSectionIndex;
    }
});
// Sphere of skills
const container = document.querySelector('.content');
const myTags = ['PHP', 'FIGMA', 'WordPress', 'Node.js', 'Express.js', 'Python', 'Java', 'GIT', 'IntelliJ', 'MySQL', 'REACT', "Sass", "TypeScript"];
// @ts-ignore
const options = {
    radius: 200,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    keep: true
};
if (container) {
    // @ts-ignore
    TagCloud(container, myTags, options);
    container.style.color = "#5B9A8B";
}
else {
    console.error('Element with class "content" not found');
}
//Text apparition
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe((el)));
// Burger menu
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');
if (burger && navbar) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}
// Expand the menu after clicking on the tab
if (navbarLinks) {
    navbarLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (burger && navbar) {
                burger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });
}
//Scroll reveal
window.addEventListener('scroll', reveal);
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowheight = window.innerHeight;
        const revealtop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
