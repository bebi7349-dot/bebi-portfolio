# bebi-portfolio
I am a Bachelor of Computer Applications (BCA) student passionate about software development and web technologies. I enjoy building practical projects, learning new programming languages, and improving my problem-solving skills. I am eager to apply my knowledge in real-world projects and grow as a software developer.
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bebi Kumari | Portfolio</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

</head>

<body>

    <!-- Navigation -->

    <header>
    /* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

html{
    scroll-behavior:smooth;
}

body{
    background:#0b0b14;
    color:#fff;
}

/* Navigation */

header{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    background:#111;
    z-index:1000;
}

nav{
    width:90%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 0;
}

.logo{
    color:#fff;
    font-size:35px;
    font-weight:bold;
}

.




}

.

.content p{
    color:#ccc;
    line-height:30px;
    font-size:18px;
}

.buttons{
    margin-top:30px;
}

.hire,
.projectbtn{
    text-decoration:none;
    display:inline-block;
    padding:14px 30px;
    margin-right:15px;
    border-radius:30px;
    transition:.4s;
}

.hire{
    background:#ff3ea5;
    color:white;
}


    margin-top:30px;

    border-radius:15px;
    border-left:5px solid #ff3ea5;
    box-shadow:0 5px 15px rgba(0,0,0,0.3);
}

.education-box h3{
    color:#ff3ea5;
    margin-bottom:10px;
}

.education-box h4{
    color:white;
    margin-bottom:10px;
}

.education-box p{
    color:#ddd;
    line-height:28px;
}
#skills{
    padding:100px 0;
    text-align:center;
}
/* ===== Skills Section ===== */

.skills{
    background:#111;
    padding:80px 8%;
    text-align:center;
}

.skills-title h2{
    color:#ffd700;
    font-size:42px;
    margin-bottom:15px;
}

.skills-title p{
    color:#ccc;
    max-width:700px;
    margin:0 auto 50px;
    line-height:28px;
}

.skills-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(170px,1fr));
    gap:25px;
}

.skill-card{
    background:#1b1b1b;
    border-radius:15px;
    padding:25px;
    transition:.4s;
    border:2px solid transparent;
    cursor:pointer;
}

.skill-card img{
    width:70px;
    height:70px;
    margin-bottom:15px;
}

.skill-card h4{
    color:#fff;
    font-size:20px;
}

.skill-card:hover{
    transform:translateY(-10px) scale(1.05);
    border:2px solid #ffd700;
    box-shadow:0 0 25px rgba(255,215,0,.7);
}

/* Responsive */

@media(max-width:768px){

.skills-title h2{
    font-size:32px;
}

.skills-grid{
    grid-template-columns:repeat(2,1fr);
}

.skill-card img{
    width:55px;
    height:55px;
}

}

@media(max-width:480px){

.skills-grid{
    grid-template-columns:1fr 1fr;
    gap:15px;
}

.skill-card{
    padding:18px;
}

}
#contact{
    background:#111;
    color:#fff;
    padding:80px 10%;
    text-align:center;
}

.contact-title{
    font-size:40px;
    color:#ff3ea5;
    margin-bottom:40px;
}

.contact-card{
    max-width:700px;
    margin:auto;
    background:#1c1c1c;
    padding:35px;
    border-radius:20px;
    box-shadow:0 0 25px rgba(255,62,165,.4);
    animation:fadeUp 1s ease;
}

.contact-item{
    display:flex;
    align-items:center;
    gap:15px;
    margin:20px 0;
    padding:15px;
    border-radius:12px;
    transition:.4s;
}

.contact-item i{
    font-size:28px;
    color:#ff3ea5;
}

.contact-item a{
    color:#fff;
    text-decoration:none;
    font-size:18px;
}

.contact-item:hover{
    transform:translateX(10px);
    background:#ff3ea5;
}

.contact-item:hover i,
.contact-item:hover a{
    color:#fff;
}

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(50px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

/* ===== PROJECT SECTION ===== */
/* Project ka CSS */
.c{
    width:85%;
}

.cpp{
    width:80%;
}

.html{
    width:90%;
}

.css{
    width:85%;
}

.js{
    width:75%;
}

.java{
    width:80%;
}

.dbms{
    width:75%;
}

.office{
    width:90%;
}

.canva{
    width:80%;
}
.project-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
}

.project-card{
    background:#1b1b2f;
    padding:20px;
    border-radius:15px;
    border-left:5px solid #ff3ea5;
    transition:.3s;
}

.project-card:hover{
    transform:translateY(-8px);
    box-shadow:0 0 20px #ff3ea5;
}

.project-card h3{
    color:#ff3ea5;
    margin-bottom:10px;
}

.project-card p{
    color:#ddd;
    line-height:26px;
}
/* Animation */

section{
    opacity:0;
    transform:translateY(60px);
    animation:fadeUp 1s ease forwards;
}

@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(60px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
.project-card{
    transition:0.4s ease;
}

.project-card:hover{
    transform:translateY(-10px) scale(1.03);
    box-shadow:0 0 30px #ff3ea5;
}
.btn,
.hire,
.projectbtn{

    animation:glow 2s infinite;
}

@keyframes glow{

0%{
box-shadow:0 0 5px #ff3ea5;
}

50%{
box-shadow:0 0 20px #ff3ea5;
}

100%{
box-shadow:0 0 5px #ff3ea5;
}

}
.image img{

animation:float 3s ease-in-out infinite;

}

@keyframes float{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-15px);
}

100%{
transform:translateY(0);
}

}
.bar div{

animation:load 2s ease;

}

@keyframes load{

from{
width:0;
}

}

        <nav>

            <h2 class="logo">Bebi<span>.</span></h2>

            <ul>

                <li><a href="#home">Home</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#education">Education</a></li>

                <li><a href="#skills">Skills</a></li>

                <li><a href="#projects">Projects</a></li>

                <li><a href="#contact">Contact</a></li>

            </ul>
            <a target="_blank" class="cv" href="assets/Bebi_Kumari_CV.pdf" download>Download CV</a>
        </nav>

    </header>

    <!-- Hero Section -->

    <section class="hero" id="home">

        <div class="content">

            <h4>Hello, My Name Is</h4>

            <h1>Bebi <span>Kumari</span></h1>

            <h3>BCA 2nd Year Student</h3>

            <p>

                I am a passionate BCA student with knowledge of HTML, CSS,
                JavaScript, Java, C Programming, Python, DBMS and Web Development.

                My goal is to become a Full Stack Web Developer.

            </p>

            <div class="buttons">

                <a href="#contact" class="hire">Hire Me</a>

                <a href="#projects" class="projectbtn">My Projects</a>

            </div>

            <div class="social">

                <a href="#"><i class="fab fa-github"></i></a>

                <a href="#"><i class="fab fa-linkedin"></i></a>

                <a href="#"><i class="fab fa-instagram"></i></a>

                <a href="#"><i class="fab fa-facebook"></i></a>

            </div>

        </div>

        <div class="image">

            <img src="assets/bebi.k2.jpeg" alt="">

        </div>

    </section>

    <!-- About Section Starts Here -->

    <section id="about">

        <h2>About Me</h2>

        <p>

            I am <b>Bebi Kumari</b>, a dedicated Bachelor of Computer Applications (BCA)
            2nd Year student. I have a strong interest in Web Development,
            Java Programming, Database Management System (DBMS),
            Software Development and Front-End Design.

            I enjoy building responsive websites and learning new technologies.
            I am hardworking, quick learner and always ready to improve my technical skills.

        </p>

    </section>

    <!-- Continue with Education, Skills, Projects... -->
    <section id="education">
        <h2>Education</h2>

        <div class="education-box">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <h4>St. Columba's College, Hazaribag</h4>
            <p><strong>Duration:</strong> July 2024 – May 2027</p>
            <p><strong>Current Status:</strong> BCA 2nd Year Student</p>
            <p><strong>Relevant Skills:</strong> C Programming, C++, HTML, CSS, JavaScript, Java (Learning)</p>
            <p>
                Currently pursuing BCA with a focus on programming,
                web development, database management, and software development.
            </p>
        </div>

        <div class="education-box">
            <h3>Intermediate (Science)</h3>
            <h4>Inter Science College, Hazaribag</h4>
            <p><strong>Duration:</strong> July 2022 – April 2024</p>
            <p><strong>Percentage:</strong> 80%</p>
            <p>
                Developed analytical and problem-solving skills through
                science subjects and participated in leadership activities.
            </p>
        </div>
    </section>

    <script src="script.js"></script>

</body>

</html>
<section id="skills">
    <h2>My Skills</h2>

    <div class="skills-circle">

        <div class="center-skill">
            <h3>Skills</h3>
            <p>HTML • CSS • JavaScript • Java</p>
        </div>
        <!-- ===== Skills Section ===== -->
        <section class="skills" id="skills">

            <div class="skills-title">
                <h2>What I Do</h2>
                <p>
                    As a BCA 2nd Year student, I am learning programming, web development,
                    database management, and software development. Here are my technical skills.
                </p>
            </div>

            <div class="skills-grid">

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="">
                    <h4>HTML5</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="">
                    <h4>CSS3</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        alt="">
                    <h4>JavaScript</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="">
                    <h4>Java</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="">
                    <h4>C</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                        alt="">
                    <h4>C++</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="">
                    <h4>MySQL</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="">
                    <h4>GitHub</h4>
                </div>

                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="">
                    <h4>VS Code</h4>
                </div>

            </div>

        </section>



    </div>
</section>
<section id="projects">
    <h2>Academic Projects</h2>

    <div class="project-container">

        <div class="project-card">
            <h3>C Code Learning</h3>
            <p>
                A collection of C programming programs covering
                basic syntax, loops, functions, arrays, pointers,
                and problem-solving exercises.
            </p>
            <p><strong>Technology:</strong> C</p>
        </div>

        <div class="project-card">
            <h3>All Program C</h3>
            <p>
                A repository containing all C programming assignments
                and practical programs completed during Semester 1.
            </p>
            <p><strong>Technology:</strong> C</p>
        </div>

        <div class="project-card">
            <h3>C & C++ Project</h3>
            <p>
                A simple project demonstrating data management,
                user input handling, and file operations using
                C and C++.
            </p>
            <p><strong>Technology:</strong> C, C++</p>
        </div>

        <div class="project-card">
            <h3>C++ Code Library</h3>
            <p>
                A collection of C++ programs demonstrating
                Object-Oriented Programming (OOP), classes,
                objects, inheritance, and other core concepts.
            </p>
            <p><strong>Technology:</strong> C++</p>
        </div>

        <div class="project-card">
            <h3>Java Practice Programs</h3>
            <p>
                A repository of Java programs including
                loops, arrays, methods, classes,
                and object-oriented programming concepts.
            </p>
            <p><strong>Technology:</strong> Java</p>
        </div>

    </div>
</section>
<section id="contact">
    <h2 class="contact-title">Contact Me</h2>

    <div class="contact-card">

        <div class="contact-item">
            <i class="fas fa-user"></i>
            <h3>Bebi Kumari</h3>
        </div>

        <div class="contact-item">
            <i class="fas fa-phone"></i>
            <a href="tel:+916203273591">+91 6203273591</a>
        </div>

        <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a href="mailto:bebi7349@gmail.com">bebi7349@gmail.com</a>
        </div>

        <div class="contact-item">
            <i class="fab fa-github"></i>
            <a href="https://github.com/bebi7349-dot" target="_blank">
                github.com/bebi7349-dot
            </a>
        </div>

        <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/bebi-kumari-5368a236b" target="_blank">
                LinkedIn Profile
            </a>
        </div>

    </div>
</section>
<header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</header>
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
