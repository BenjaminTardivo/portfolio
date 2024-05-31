/* ==== scroll entre secciones ==== */
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('div[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
      if (
        scrollPosition >= section.offsetTop - 150 &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});

/* ==== Cambio de link dependiendo del dispositivo ==== */

document.addEventListener('DOMContentLoaded', function() {
    var project1Link = document.getElementById('bot-box-link');

    if (window.innerWidth <= 768) {
      // Si el dispositivo es móvil (ancho de pantalla menor o igual a 768px)
      project1Link.href = 'https://youtu.be/hCX26zT2REQ';
    } else {
      // Si el dispositivo es de escritorio
      project1Link.href = 'https://tardiarg.itch.io/bot-box';
    }
  });


  ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
  ScrollReveal().reveal('.main-img, .project-card, .contact form', {origin: 'bottom'});
  ScrollReveal().reveal('.about-img', {origin: 'left'});
  ScrollReveal().reveal('.about-content', {origin: 'right'});