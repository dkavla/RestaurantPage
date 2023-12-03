import { setHome } from "./home";

/*
    setMenu() is called within index.js when the Menu
    tab is pressed. The div#content tag will be set to empty
    and then the necessary tags will be added
*/
function setMenu() {
    // holds the main content
    const mainDiv = document.getElementById('content');
    mainDiv.innerHTML = "";

    /* Header Section */
    // header
    const header = document.createElement('header');
    const nameDiv = document.createElement('div');
    nameDiv.id = 'name';
    nameDiv.innerHTML = "La Grande Culinaire"

    // navbar sections
    const navBar = document.createElement('nav');

    const homeBtn = document.createElement('div');
    homeBtn.id = 'home';
    homeBtn.innerHTML = "Home";

    const menuBtn = document.createElement('div');
    menuBtn.id = 'menu';
    menuBtn.innerHTML = "Menu";

    const contactBtn = document.createElement('div');
    contactBtn.id = 'contact';
    contactBtn.innerHTML = "Contact Us";

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    header.appendChild(nameDiv);
    header.appendChild(navBar);

    mainDiv.appendChild(header)

    /* Main Section */
    const main = document.createElement('main');
    mainDiv.appendChild(main);


    homeBtn.addEventListener('click', () => {
        setHome();
        console.log('Home');
    });
    
    menuBtn.addEventListener('click', () => {
        setMenu();
        console.log("Menu");
    });
    
    contactBtn.addEventListener('click', () => {
        console.log('Contact');
    });
}

export { setMenu };