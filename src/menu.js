

import { loadHome } from "./home";
import { loadHeader } from "./header";

function loadMenu() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.appendChild(loadHeader());
    // main.appendChild(generateMenu());
    console.log('Menu tab loaded');

    document.getElementById('home').addEventListener('click', loadHome);
    document.getElementById('contact').addEventListener('click', () => {
        console.log('Contact loaded');
    })
}

function generateMenu() {
    
    const main = document.createElement('main');

    
    
}



export { loadMenu };