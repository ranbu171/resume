// classic js 

window.addEventListener('DOMContentLoaded', () => {

const headerHtml = document.getElementById('headerHtml');

const header = document.createElement ('nav');
header.className = 'header';

const home = document.createElement('a');
home.href = '#name';
home.innerText = 'Главная';

const education = document.createElement('a');
education.href = '#education';
education.innerText = 'Образование';

const skills = document.createElement('a');
skills.href = '#skills';
skills.innerText = 'Навыки';

const languages = document.createElement('a');
languages.href = '#languages';
languages.innerText = 'Языки';

const softSkills = document.createElement('a');
softSkills.href = '#softSkills';
softSkills.innerText = 'Soft Skills';

const experience = document.createElement('a');
experience.href = '#experience';
experience.innerText = 'Опыт';

const contact = document.createElement('a');
contact.href = '#contact';
contact.innerText = 'Контакты';

header.appendChild(home);
header.appendChild(education);
header.appendChild(skills);
header.appendChild(languages);
header.appendChild(softSkills);
header.appendChild(experience);
header.appendChild(contact);

headerHtml.appendChild (header);


// amination skills 
const skillAnimation = document.querySelector('#skills');
const myName = document.querySelector('h1');
const myNameHeader = document.getElementById('headerName')
const animationDivs = document.getElementsByClassName ('animation');
window.addEventListener('scroll', addAnimation);

function addAnimation () {
        if (window.scrollY > myName.offsetTop) {
            myNameHeader.classList.remove('headerNameOff');
            myNameHeader.classList.add('headerName');
        } else if (window.scrollY < myName.offsetTop){
            myNameHeader.classList.add('headerNameOff');
            myNameHeader.classList.remove('headerName');
        }
    



    //animation 
    if (!animationDivs[7].className.includes('animationOn')){
        if (window.scrollY >= skillAnimation.offsetTop-100){
            for (i=0; i< animationDivs.length; i++){
                animationDivs[i].classList.add('animationOn');
            } 
        }
    }
}

// burger
const burgerButton = document.getElementById('headerImg');
burgerButton.addEventListener('click', showNav);

function showNav(){
    header.classList.add('phoneNav');
    header.style.display = 'grid';
}

const nav = document.getElementsByClassName('phoneNav')[0];

header.addEventListener('click', closeNav);

function closeNav (e){
    if (e.target.className.includes('phoneNav')) {
        header.classList.remove('phoneNav');
        header.style.display = 'none';
    }
}

});