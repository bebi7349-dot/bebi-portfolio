// ==========================
// Typing Text Animation
// ==========================

const text = [
    "BCA 2nd Year Student",
    "Web Developer",
    "Java Programmer",
    "Frontend Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector("h3").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 120);
    }

})();

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you for contacting me! 😊");

    form.reset();

});

// ==========================
// Scroll Animation
// ==========================

const reveal = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    reveal.forEach(sec=>{

        let top = sec.getBoundingClientRect().top;

        let windowHeight = window.innerHeight;

        if(top < windowHeight-100){

            sec.classList.add("active");

        }

    });

});

// ==========================
// Welcome Message
// ==========================

window.onload=function(){

    setTimeout(()=>{

        alert("Welcome to Bebi Kumari's Portfolio");

    },1000);

};

// ==========================
// Button Animation
// ==========================

const buttons=document.querySelectorAll(".hire,.projectbtn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.08)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});
const text = [
"Web Developer",
"Java Programmer",
"BCA Student"
];

let i=0;

setInterval(()=>{

document.querySelector(".typing").innerHTML=text[i];

i++;

if(i==text.length){
i=0;
}

},2000);