document.addEventListener("DOMContentLoaded", () => {
  // Aggiorna automaticamente l'anno nel footer.
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Apre e chiude i dettagli dei corsi.
  const buttons = document.querySelectorAll(".details-button");

  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
      const courseId = button.dataset.course;
      const details = document.getElementById(courseId);
      const isOpen = details.classList.contains("open");

      // Chiude tutti gli altri corsi.
      document.querySelectorAll(".extra-details").forEach((item) => {
        item.classList.remove("open");
      });

      buttons.forEach((item) => {
        item.setAttribute("aria-expanded", "false");
        item.textContent = "SCOPRI IL CORSO ↗";
      });

      // Alterna l'apertura del corso selezionato.
      if (!isOpen) {
        details.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        button.textContent = "CHIUDI DETTAGLI ↑";
      }
    });
  });
});