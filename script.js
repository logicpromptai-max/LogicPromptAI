// ================= FADE-IN ON SCROLL =================
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));


// ================= IMAGE MODAL (PORTFOLIO ONLY) =================
const projectImages = document.querySelectorAll(".project-card img");

if (projectImages.length > 0) {
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.innerHTML = `
    <span id="closeModal">&times;</span>
    <img src="">
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector("img");
  const closeBtn = modal.querySelector("#closeModal");

  projectImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
  });
}

console.log("LogicPrompt AI site loaded.");
