document.addEventListener("DOMContentLoaded", function() {
    const sideNavContainer = document.querySelector(".side-nav-container");
    const pricingGuide = document.querySelector(".pricing-guide");

    if (pricingGuide) {
        const pricingGuideBottom = pricingGuide.offsetTop + pricingGuide.clientHeight;
        
        window.addEventListener("scroll", function() {
            const scrollPosition = window.scrollY;
            if (scrollPosition >=  pricingGuideBottom) {
                sideNavContainer.style.display = "block"; // Adjust width to match side-nav width
            } else {
                sideNavContainer.style.display = "none";
            }
        });
    }
});