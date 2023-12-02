

// holds the main content
const mainDiv = document.getElementById('content');

/* Header Section */
// header
const header = document.createElement('header');
const nameDiv = document.createElement('div');
nameDiv.id = 'name';

// navbar sections
const navBar = document.createElement('nav');
const homeBtn = document.createElement('div');
homeBtn.id = 'home';
homeBtn.innerHTML = "Home";
homeBtn.addEventListener('click', () => {
    console.log('Home');
});

const menuBtn = document.createElement('div');
menuBtn.id = 'menu';
menuBtn.innerHTML = "Menu";
menuBtn.addEventListener('click', () => {
    console.log('Menu');
});

const contactBtn = document.createElement('div');
contactBtn.id = 'contact';
contactBtn.innerHTML = "Contact Us";
contactBtn.addEventListener('click', () => {
    console.log('Contact');
});

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

/* Main Section */
const main = document.createElement('main');

const specializationTitle = document.createElement('div');
specializationTitle.id = 'center-main';
specializationTitle.innerHTML = "Authentic French Cuisine"

const descriptionTitle = document.createElement('div');
descriptionTitle.innerHTML = "What We Bring To the Table";

const description = document.createElement('p');
description.innerHTML = "La Grande Culinaire aims to be the top French dining spot in the heart of New York City. Our chefs are world class trained by top artists like Marco Pierre White, Raymond Blanc, Gordon Ramsay, and others. They strive to bring cuisine that satisfies and quells hunger."

const servingHours = document.createElement('p');
servingHours.innerHTML = "We serve breakfast from 8:00 AM - 11:00 AM, lunch 11:00 AM - 4:00 PM, late lunch 4:00 PM - 4:45 PM, dinner 5:00 PM - 12:00 AM and brunch 9:00 AM - 3:45 PM. Reservations are recommended."

main.appendChild(specializationTitle);
main.appendChild(descriptionTitle);
main.appendChild(description);
main.appendChild(servingHours);

// add components content div
// header section

mainDiv.appendChild(nameDiv);
mainDiv.appendChild(navBar);


// main section
mainDiv.appendChild(main);
