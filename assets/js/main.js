

window.onload = function() {
    const mobileMenu = document.getElementById("toggle-menu");
    const mobileMenuIcon = document.getElementById("mobile-menu");
    const mvclosebutton = document.getElementById("mvclosebutton");
    const showIframeButton = document.getElementById("myImage");
    const navLinks = document.querySelectorAll('nav a');

    showIframeButton.addEventListener("click", showIframe);

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

    

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        console.log("Nav link clicked");
        mobileMenuIcon.classList.toggle("hidden");

        event.preventDefault(); // Prevent default anchor link behavior
        const targetSection = document.getElementById(link.getAttribute('href').slice(1)); // Get target section ID
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
      });
    });

    function showIframe() {
        console.log("Show iframe clicked");
        var iframe = document.getElementById('myIframe');
        var iframe2 = document.getElementById('myIframe2');

        iframe.src = "https://www.canva.com/design/DAFE3DzJyVs/view?embed";
        iframe2.src = "https://www.canva.com/design/DAFULR3s2O0/bFmy5kNRrFaqtLb2BEbqsQ/view?embed";
        
        document.getElementById('myImage').style.display = 'none';
        document.getElementById('myImage2').style.display = 'none';

        iframe.style.display = 'block';
        iframe2.style.display = 'block';
    }

    function showImages(){
        var image1 =  document.getElementById('myImage');
        var image2 =  document.getElementById('myImage2');
        image1.src = "images/Open-Dots.webp";
        image2.src = "images/aerox.webp";
        

        image1.style.display = 'block';
        image2.style.display = 'block';
    }
    setTimeout(showIframe, 5000);
    setTimeout(showImages, 1500);
};


