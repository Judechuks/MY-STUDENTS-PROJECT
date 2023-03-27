let submitbtn = document.getElementById("submit");
submitbtn.addEventListener('click', function(){
     alert('your message submited successfully')
}
);
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener('click', function(){
    let navMenu = document.querySelector("nav ul");
    let navLink = document.querySelector("nav ul li a");
    navMenu.classList.toggle("active");
}
);

let navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(function(navLink){
    navLink.addEventListener('click', function(){
    let navMenu = document.querySelector("nav ul");
    navMenu.classList.remove("active");
});
});
// let hamburger = document.querySelector(".hamburger");
// hamburger.addEventListener('click', function(){
//     let navMenu = document.querySelector("nav ul");
//     navMenu.style.right = 0;
// }
// );