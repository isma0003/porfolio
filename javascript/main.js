document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  if (!nav || !burger || !menu) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  };

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!nav.classList.contains("open"));
  });

  menu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => setOpen(false)));

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
});

const track = document.getElementById("themesTrack");
const prev = document.querySelector(".themes-arrow--prev");
const next = document.querySelector(".themes-arrow--next");

if (track) {
  const scrollByCard = (dir) => {
    const card = track.querySelector(".theme-card");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const amount = card.offsetWidth + gap;

    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  prev?.addEventListener("click", () => scrollByCard(-1));
  next?.addEventListener("click", () => scrollByCard(1));
}
