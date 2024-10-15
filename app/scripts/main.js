

// Theme Switches
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'null')
};

if(darkmode === 'active') enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});

// Language Switches Script
const langEN = document.querySelector('.')

// Language Switches Content
var data = {
    "english":
    {
        "name": "Ángel Martín Ramírez",
        "description": "System Administrator",
        "link-about": "About Me",
        "link-education": "Education & Skills",
        "link-experience": "Work Experience",
        "about": "I was born in Ciudad Real on 1996. After studing at the University and a first look into working sector, I found lighting for live events was my passion. For that, I arrived into Málaga to finish my professional education. In love with Audiovisuals and IoT I'm always spending my free time into new personal proyects that allows me to live new experiences and adquire new abilities.",
        "education": "",
        "skills": "",
        "skill1": "",
        "skill2": "",
        "skill3": "",
        "skill4": "",
        "work-exp": "",
        "work-block1": "",
        "work-block2": "",

    },

    "spanish":
    {
        "name": "Ángel Martín Ramírez",
        "description": "Administrador de Sistemas",
    },
}