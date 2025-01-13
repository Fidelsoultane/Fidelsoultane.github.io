// Animation sur le titre
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("header h1");
    title.style.opacity = 0;
    title.style.transform = "translateY(-20px)";
    setTimeout(() => {
      title.style.transition = "all 1s";
      title.style.opacity = 1;
      title.style.transform = "translateY(0)";
    }, 500);
  });
  
  // Bouton retour en haut
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.id = "back-to-top";
  backToTop.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  `;
  document.body.appendChild(backToTop);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".project-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      const modal = document.createElement("div");
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
        <h2>${tile.querySelector("h3").textContent}</h2>
        <p>${tile.querySelector("p").textContent}</p>
        <button id="close-modal" style="margin-top: 10px;">Fermer</button>
      `;
      modal.appendChild(content);
      document.body.appendChild(modal);
  
      document.getElementById("close-modal").addEventListener("click", () => {
        modal.remove();
      });
    });
  });

  const galleryImages = document.querySelectorAll(".gallery-img");
let currentImageIndex = 0;

setInterval(() => {
    galleryImages[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    galleryImages[currentImageIndex].style.display = "block";
}, 3000);

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
});

document.querySelectorAll("#navbar ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start",
      });
  });
});

const title = document.querySelector("header h1");
let text = title.textContent;
let index = 0;

title.textContent = "";
const typeWriter = setInterval(() => {
    if (index < text.length) {
        title.textContent += text[index];
        index++;
    } else {
        clearInterval(typeWriter);
        setTimeout(() => {
            title.textContent = "";
            index = 0;
            setInterval(typeWriter, 150);
        }, 2000);
    }
}, 150);

const toggleDarkMode = document.getElementById("toggle-dark-mode");
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

