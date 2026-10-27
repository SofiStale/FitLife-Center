const nav = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const planName = document.getElementById("planName");
const form = document.getElementById("form");
const success = document.getElementById("success");

hamburger.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.querySelectorAll(".choose").forEach(btn => {
  btn.addEventListener("click", () => {
    planName.textContent = btn.dataset.plan;
    modal.classList.add("show");
    success.textContent = "";
    form.reset();
  });
});

close.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });

form.addEventListener("submit", e => {
  e.preventDefault();
  success.textContent = "✓ Richiesta ricevuta. Ti contatteremo presto!";
  form.reset();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.classList.remove("show");
});
