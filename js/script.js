"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // MENU DINÂMICO
  let menuPath = "components/menu.html";

  if (window.location.pathname.includes("pages")) {
    menuPath = "../components/menu.html";
  }

  fetch(menuPath)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById("menu-container");
      if (container) {
        container.innerHTML = data;
      }
    });

  // DARK MODE (NOVO)
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  if (toggle) {
    toggle.addEventListener("click", () => {

      body.classList.toggle("dark-mode");

      toggle.textContent =
        body.classList.contains("dark-mode")
          ? "☀️"
          : "🌙";

    });
  }

}); 