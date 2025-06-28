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

// ...existing code...
