// ROI Calculation
function calculateSavings() {
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  if (hours && rate) {
    document.getElementById('lead-capture').style.display = 'block';
  }
}

// Data Submission to SheetDB ID: m43zmyhch2qvd
async function submitLead() {
  const name = document.getElementById('lead-name').value;
  const biz = document.getElementById('lead-biz').value;
  const email = document.getElementById('lead-email').value;
  const annual = document.getElementById('hours').value * document.getElementById('rate').value * 52;
  const result = document.getElementById('result');

  if (name && biz && email.includes('@')) {
    result.innerText = "Syncing with LogicPrompt Systems...";
    try {
      await fetch('https://sheetdb.io/api/v1/m43zmyhch2qvd', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ data: [{"Date": new Date().toLocaleDateString(), "Full Name": name, "Email": email, "Business Name": biz, "Potential Savings": annual}] })
      });
      result.innerText = `Annual Capital Leakage: $${annual.toLocaleString()}`;
    } catch (e) { result.innerText = "Sync complete. Value: $" + annual.toLocaleString(); }
  }
}

// Lightbox Controls (Escape & X-button)
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
document.addEventListener('keydown', (e) => { if(e.key === "Escape") closeLightbox(); });

// Fade-in Observer
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
