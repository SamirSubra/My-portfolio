
// Changement de couleurs pour l'onglet de menu, avec la section active
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
let activeSectionIndex = 0; // Initialise la variable pour suivre la section active (dans la quel on se trouve)

window.addEventListener('scroll', () => { // S'active à chaque scroll
    const currentSectionIndex = [...sections].findIndex(section => { //Détermine la section active
        const sectionTop = section.offsetTop - 100; // Soustrait la navbar
        const sectionBottom = sectionTop + section.offsetHeight;
        return window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom;
    });

    // Met à a jour la section active en cas de changement
    if (currentSectionIndex !== activeSectionIndex) {
        navLinks[activeSectionIndex].classList.remove('active');
        navLinks[currentSectionIndex].classList.add('active');
        activeSectionIndex = currentSectionIndex;
    }
});


//Sphère de compétences
const myTags = ['PHP', 'FIGMA', 'WordPress', 'Node.js','Express.js', 'Python', 'Java', 'GIT','IntelliJ', 'MySQL', 'REACT'];
var tagCloud = TagCloud('.content', myTags,{

    // radius in px
    radius: 200,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

});
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.content').style.color = random_color;
document.querySelector('.content').style.color = "#5B9A8B";

//Text apparition
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe((el)));

// Menu burger
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');

burger.addEventListener('click',() =>{
    burger.classList.toggle('active')  ; // toggle ajoute et retire une classe
    navbar.classList.toggle('active');
});

//Déplier le menu apès click sur l'onglet
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navbar.classList.remove('active');
    });
});


//Scroll reveal
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}