document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = target.offsetTop - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });

  document.getElementById('btnEnviar').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
  });
});
