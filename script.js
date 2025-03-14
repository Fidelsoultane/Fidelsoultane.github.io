document.addEventListener("DOMContentLoaded", () => {
  // Animation du titre
  const title = document.querySelector("header h1");
  title.classList.add("animate-title");

  // Modale pour les projets
  document.querySelectorAll(".project-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
          const modal = document.createElement("div");
          const modalTitle = tile.querySelector("h3").textContent; // Récupération directe
          const modalDescription = tile.querySelector("p").textContent;
          modal.setAttribute("role", "dialog");
          modal.setAttribute("aria-modal", "true");
          modal.setAttribute("aria-labelledby", "modal-title");

          modal.style.cssText = `
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1001; /* Au-dessus de la barre de progression */

          `;

          const content = document.createElement("div");
          content.style.cssText = `
              background: #fff;
              padding: 20px;
              max-width: 500px;
              text-align: center;
              border-radius: 5px;
          `;

          content.innerHTML = `
              <h2 id="modal-title">${modalTitle}</h2>
              <p>${modalDescription}</p>
              <button id="close-modal" style="margin-top: 10px;">Fermer</button>
          `;

          modal.appendChild(content);
          document.body.appendChild(modal);

          const closeModalButton = document.getElementById("close-modal");
          closeModalButton.focus(); // Focus sur le bouton

          const closeModal = () => {
              modal.remove();
          };

          closeModalButton.addEventListener("click", closeModal);

          modal.addEventListener("click", (event) => {
              if (event.target === modal) { // Clic en dehors du contenu
                  closeModal();
              }
          });

          document.addEventListener("keydown", (event) => {
              if (event.keyCode === 27) { // Touche Échap
                  closeModal();
              }
          });
      });
  });

  // Barre de progression
  const progressBar = document.getElementById("progress-bar");

  window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
  });

  // Défilement fluide vers les ancres
  document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.dataset.target; // Utilisation de data-target
          if (targetId) {
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                  targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                  });
              }
          }
      });
  });

  // Effet "Machine à écrire" (une seule fois)
      const titleElement = document.querySelector("header h1");
      const text = titleElement.textContent;
      titleElement.textContent = ""; // On efface
      let index = 0;
      let cursorVisible = true;

      const typeWriter = setInterval(() => {
          if (index < text.length) {
              titleElement.textContent += text[index];
              index++;
          } else {
             clearInterval(typeWriter);
          }
      }, 150);

  // Mode Sombre (avec localStorage et icône)
  const toggleDarkMode = document.getElementById("toggle-dark-mode");

  // Fonction pour mettre à jour le mode et l'icône
  const updateDarkMode = (isDarkMode) => {
      if (isDarkMode) {
          document.body.classList.add("dark-mode");
          toggleDarkMode.textContent = "☀️"; // Soleil pour le mode clair
          localStorage.setItem("darkMode", "enabled");
      } else {
          document.body.classList.remove("dark-mode");
          toggleDarkMode.textContent = "🌙"; // Lune pour le mode sombre
          localStorage.setItem("darkMode", "disabled");
      }
  };

  // Au chargement de la page : vérifier localStorage
  const savedDarkMode = localStorage.getItem("darkMode");
  updateDarkMode(savedDarkMode === "enabled");


  toggleDarkMode.addEventListener("click", () => {
      const isDarkMode = document.body.classList.contains("dark-mode");
      updateDarkMode(!isDarkMode); // Inverse le mode
  });
});

