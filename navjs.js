
const navSlide = () => {
    const navMobile = document.querySelector('.nav-mobile');
    const navBar = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    navMobile.addEventListener('click', () => {
    navBar.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
    if (link.style.animation) {
    link.style.animation = '';
    } else {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
    });
    });
    };
    
    navSlide();