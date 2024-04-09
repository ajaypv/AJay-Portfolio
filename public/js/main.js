document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    const backdrop = menu.querySelector('.fixed.inset-0.z-40'); // Select background element
  
    menu.classList.toggle('hidden');  // Toggle menu visibility
    backdrop.classList.toggle('hidden'); // Toggle background visibility
  });
  