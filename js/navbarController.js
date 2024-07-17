async function loadNavbar() {    
    const hamburgerMenu = document.querySelector('.slide-menu');
    const navMenu = document.querySelector('.slide-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    function toggleMenu() {
        navMenu.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
        closeIcon.classList.toggle('open');
    }

    function closeMenu() {
        navMenu.classList.remove('open');
        hamburgerIcon.classList.remove('open');
        closeIcon.classList.remove('open');
    }

    hamburgerIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up to document
        toggleMenu();
    });

    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up to document
        closeMenu();
    });

    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            closeMenu();
        }
    });

    navMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling up to document
    });
}

window.addEventListener('DOMContentLoaded', loadNavbar);