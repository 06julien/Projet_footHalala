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

// ...existing code...
