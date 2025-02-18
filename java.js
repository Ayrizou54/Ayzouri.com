const fleche = document.querySelector('.fleche'); // Correction du nom de la variable

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    fleche.style.opacity = '1';
    fleche.style.pointerEvents = 'auto';
  } else {
    fleche.style.opacity = '0';
    fleche.style.pointerEvents = 'none';
  }
});

fleche.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Ajout d'un défilement fluide
  });
});
