// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// Image modal
const modal = document.createElement("div");
modal.id = "imageModal";
modal.innerHTML = `
  <span id="closeModal">&times;</span>
  <img src="">
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector("#closeModal");

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.style.display = "none";
});

console.log("LogicPrompt AI site loaded.");
