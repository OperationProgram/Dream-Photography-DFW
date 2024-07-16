document.addEventListener('DOMContentLoaded', function() {
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var navLinks = document.querySelectorAll('.nav-links');

    hamburgerIcon.addEventListener('click', function() {
        // Toggle the active class on nav-links to show/hide them
        navLinks.forEach(function(nav) {
            nav.classList.toggle('active');
        });
    });
});