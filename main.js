document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < triggerBottom) {
        reveal.classList.add('active');
      }
    });
  };

  // Initial check
  revealOnScroll();

  // Scroll listener
  window.addEventListener('scroll', revealOnScroll);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Dynamic Navbar Background
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.top = '10px';
      navbar.style.width = '95%';
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
      navbar.style.top = '20px';
      navbar.style.width = '90%';
      navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }
  });
});
