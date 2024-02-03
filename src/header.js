
function loadHeader() {
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

    return header;
}

export { loadHeader };