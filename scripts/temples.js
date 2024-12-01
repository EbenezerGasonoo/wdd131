
document.getElementById("currentyear").textContent = new Date().getFullYear();
        

document.getElementById("lastModified").textContent = document.lastModified;

// Get the hamburger button and the navigation menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');

// Add event listener to toggle visibility
hamburger.addEventListener('click', () => {
    menu.classList.toggle('visible');  // Toggle the "visible" class
    if (menu.classList.contains('visible')) {
        hamburger.innerHTML = 'X';  // Change to "X" when menu is open
    } else {
        hamburger.innerHTML = '&#9776;';  // Change back to hamburger icon when menu is closed
    }
});
