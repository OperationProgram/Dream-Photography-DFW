let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px';
    } else if (scrollTop === 0) {
        // At the very top of the page
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});