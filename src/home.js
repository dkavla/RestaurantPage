
import { setMenu } from "./menu";

function setHome() {
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

    mainDiv.appendChild(header);

    /* Main Section */
    const main = document.createElement('main');

    const specializationTitle = document.createElement('div');
    specializationTitle.id = 'center-main';
    specializationTitle.innerHTML = "Authentic French Cuisine"

    const descriptionTitle = document.createElement('div');
    descriptionTitle.id = 'description-title';
    descriptionTitle.innerHTML = "What We Bring To the Table";

    const description = document.createElement('p');
    description.id = 'description';
    description.innerHTML = "La Grande Culinaire is one of the top French dining spots in the heart of New York City. Our chefs are world class trained by top chefs, such as Marco Pierre White, Raymond Blanc, Gordon Ramsay, and more. They strive to bring cuisine that satisfies and quells hunger. We believe your dish should be both an art and pleasure."

    const servingHours = document.createElement('p');
    servingHours.id = 'serving-hours';
    servingHours.innerHTML = "We serve breakfast from 8:00 AM - 11:00 AM, lunch 11:00 AM - 4:00 PM, late lunch 4:00 PM - 4:45 PM, dinner 5:00 PM - 12:00 AM and brunch 9:00 AM - 3:45 PM. Reservations are recommended."

    main.appendChild(specializationTitle);
    main.appendChild(descriptionTitle);
    main.appendChild(description);
    main.appendChild(servingHours);

    // main section
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

export { setHome };