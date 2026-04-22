"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // NAVBAR DINÂMICA
  let navbarPath = "components/navbar.html";

  if (window.location.pathname.includes("pages")) {
    navbarPath = "../components/navbar.html";
  }

  fetch(navbarPath)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById("navbar-container");
      if (container) {
        container.innerHTML = data;
        ativarDarkMode();
      }
    });
  
  // DARK MODE (corrigido)
  function ativarDarkMode() {
    const toggle = document.getElementById("themeToggle");

    if (toggle) {
      toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        toggle.textContent =
          document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";

      });
    }
  }

}); 