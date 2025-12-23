/*
  Autor: Francisco García Caparrós
  Activitat: PAC3
  Assignatura: Visualització de dades
  Versió: 1
*/

/* Codi perquè les transicions vagin apareixent a mesura que es fa scroll */
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
sections.forEach(sec => observer.observe(sec));

