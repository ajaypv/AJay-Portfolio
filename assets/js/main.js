window.onload = function() {
    const mobileMenu = document.getElementById("toggle-menu");
    const mobileMenuIcon = document.getElementById("mobile-menu");
    const mvclosebutton = document.getElementById("mvclosebutton");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", function() {
            console.log("Mobile menu toggle clicked");
            mobileMenuIcon.classList.toggle("hidden");
        });

        mvclosebutton.addEventListener("click", function() {
            console.log("Mobile menu close clicked");
            mobileMenuIcon.classList.toggle("hidden");
        });
    }
};

