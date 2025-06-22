 document.getElementById('formReservation').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Votre réservation a été enregistrée avec succès !");
    const modal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
    modal.hide();
    this.reset();
  });