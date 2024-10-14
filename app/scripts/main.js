

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
        "about": "",
        "education": "",
        "skills": "",
        "skill1": "",
        "skill2": "",
        "skill3": "",
        "skill4": "",
        "work-exp": "",

    },

    "spanish":
    {
        "name": "Ángel Martín Ramírez",
        "description": "Administrador de Sistemas",
    },
}