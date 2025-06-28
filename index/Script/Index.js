// ...existing code...

// Carrousel automatique
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  let current = 0;

  function showItem(index) {
    items.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  setInterval(() => {
    current = (current + 1) % items.length;
    showItem(current);
  }, 3500); // Change toutes les 3,5 secondes

  showItem(current);
});

// Carrousel automatique Bootstrap
// Vérifie que Bootstrap est chargé et que l'élément existe
window.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('#carouselExampleDark');
  if (carousel && window.bootstrap && bootstrap.Carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 9000,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
  }
});

// Fonction pour afficher/masquer l'image média social euro au survol du monstre réseau
function toggleMediaSocialHero() {
  const monstreReseau = document.querySelector('.mouse-resaeux'); // l'icône ou image à survoler
  const mediaSocialEuro = document.querySelector('.media-social-euro'); // l'image à afficher/masquer

  if (!monstreReseau || !mediaSocialEuro) return;

  monstreReseau.addEventListener('mouseenter', function () {
    mediaSocialEuro.style.display = 'flex';
    monstreReseau.style.display = 'none';
  });

  mediaSocialEuro.addEventListener('mouseleave', function () {
    mediaSocialEuro.style.display = 'none';
    monstreReseau.style.display = 'flex';
  });
}

window.addEventListener('DOMContentLoaded', toggleMediaSocialHero);