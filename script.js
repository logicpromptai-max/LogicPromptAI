// 1. ROI CALCULATION LOGIC
function calculateSavings() {
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  
  if (hours && rate) {
    // Reveal the Lead Capture form
    document.getElementById('lead-capture').style.display = 'block';
    // Smooth scroll to the form
    document.getElementById('lead-capture').scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("Please enter both hours and hourly rate to see your potential savings.");
  }
}

// 2. LEAD SUBMISSION TO GOOGLE SHEETS (Via SheetDB)
async function submitLead() {
  const name = document.getElementById('lead-name').value;
  const biz = document.getElementById('lead-biz').value;
  const email = document.getElementById('lead-email').value;
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  const result = document.getElementById('result');
  const annual = hours * rate * 52;

  // Validation: Ensure all fields are filled
  if (name && biz && email.includes('@')) {
    result.innerText = "Syncing with LogicPrompt Systems...";

    const data = {
      "Date": new Date().toLocaleDateString(),
      "Full Name": name,
      "Email": email,
      "Business Name": biz,
      "Weekly Hours": hours,
      "Hourly Rate": rate,
      "Potential Savings": annual
    };

    try {
      // REPLACE THE URL BELOW WITH YOUR ACTUAL SHEETDB API URL
      const response = await fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_ID_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [data] })
      });

      if (response.ok) {
        // Final Success Display
        result.innerText = `Estimated Annual Savings: $${annual.toLocaleString()}`;
        document.getElementById('lead-capture').innerHTML = `
          <div style="text-align:center; padding: 20px;">
            <p style="color: var(--accent-growth); font-size: 1.2rem; font-weight: bold;">Report Generated for ${biz}!</p>
            <p>Check ${email} for your technical breakdown. <br> <strong>Next Step:</strong> Secure your strategy session below.</p>
            <a href="#schedule" class="cta-button primary" style="margin-top:15px;">Book My Live Mapping Session</a>
          </div>`;
      }
    } catch (error) {
      console.error('Error:', error);
      result.innerText = "Connection error. Your calculated savings: $" + annual.toLocaleString();
    }
  } else {
    alert("Please fill out all fields so we can generate your custom report.");
  }
}

// 3. FADE-IN ANIMATION OBSERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
