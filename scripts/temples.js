document.getElementById('currentyear').textContent = new Date().getFullYear();
        // Set last modified date dynamically
        document.getElementById('lastModified').textContent = document.lastModified;

        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav ul');

            // Toggle the menu when hamburger is clicked
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('visible');
                hamburger.classList.toggle('active');
            });
        });