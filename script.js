function calculateSavings() {
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  if (hours && rate) {
    // Show the lead capture form first
    document.getElementById('lead-capture').style.display = 'block';
    window.location.hash = "lead-capture";
  } else {
    alert("Please enter both hours and rate.");
  }
}

function submitLead() {
  const email = document.getElementById('lead-email').value;
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  const result = document.getElementById('result');

  if (email.includes('@')) {
    const annual = hours * rate * 52;
    result.innerText = `Estimated Annual Savings: $${annual.toLocaleString()}`;
    document.getElementById('lead-capture').innerHTML = `<p style="color: var(--accent-growth);">Success! Check ${email} for your breakdown. <br> <strong>Next Step:</strong> Book your audit below.</p>`;
    // Note: To actually receive these emails, you would connect this to an n8n webhook later.
  } else {
    alert("Please enter a valid business email.");
  }
}

// Fade-in Animation Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
