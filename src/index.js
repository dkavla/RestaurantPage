import './index.css';
import './home.css';
import './menu.css';
import dish from './french-dish.jpeg';
import { loadHome } from './home';
import { loadMenu } from './menu';

// holds the main content
const mainDiv = document.getElementById('content');
mainDiv.textContent = "";

loadHome();

// Menu Option Listeners
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

home.addEventListener('click', () => {
    loadHome();
    console.log('Home');
});

menu.addEventListener('click', () => {
    mainDiv.textContent = '';
    createHeader();
    setMenu(mainDiv);
    console.log("Menu");
});

contact.addEventListener('click', () => {
    console.log('Contact');
});