window.onload = function() {
    const mobileMenu = document.getElementById("toggle-menu");
    const mobileMenuIcon = document.getElementById("mobile-menu");
    const mvclosebutton = document.getElementById("mvclosebutton");
    const showIframeButton = document.getElementById("myImage");
    const navLinks = document.querySelector('nav');

    showIframeButton.addEventListener("click", showIframe);

    if (mobileMenu) {
        mobileMenu.addEventListener("click", toggleMenu);
        mvclosebutton.addEventListener("click", toggleMenu);
    }

    navLinks.addEventListener('click', handleNavLinkClick);

    function toggleMenu() {
        console.log("Menu toggle clicked");
        mobileMenuIcon.classList.toggle("hidden");
    }

    function handleNavLinkClick(event) {
        const link = event.target;
        if (link.tagName === 'A') {
            console.log("Nav link clicked");
            mobileMenuIcon.classList.toggle("hidden");

            event.preventDefault(); // Prevent default anchor link behavior
            const targetSection = document.getElementById(link.getAttribute('href').slice(1)); // Get target section ID
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
        }
    }

    function showIframe() {
        console.log("Show iframe clicked");
        const iframe = document.getElementById('myIframe');
        const iframe2 = document.getElementById('myIframe2');

        iframe.src = "https://www.canva.com/design/DAFE3DzJyVs/view?embed";
        iframe2.src = "https://www.canva.com/design/DAFULR3s2O0/bFmy5kNRrFaqtLb2BEbqsQ/view?embed";
        
        document.getElementById('myImage').style.display = 'none';
        document.getElementById('myImage2').style.display = 'none';

        iframe.style.display = 'block';
        iframe2.style.display = 'block';
    }

    function showImages(){
        const image1 =  document.getElementById('myImage');
        const image2 =  document.getElementById('myImage2');
        const profileimage = document.getElementById('profileimage');

        profileimage.src = "images/aj.webp";
        image1.src = "images/Open-Dots.webp";
        image2.src = "images/aerox.webp";
        

        image1.style.display = 'block';
        image2.style.display = 'block';
        profileimage.style.display = 'block';
    }
    setTimeout(showIframe, 5000);
    setTimeout(showImages, 1500);
};