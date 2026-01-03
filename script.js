function calculateSavings() {
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  if (hours && rate) {
    document.getElementById('lead-capture').style.display = 'block';
    document.getElementById('lead-capture').scrollIntoView({ behavior: 'smooth' });
  } else {
    alert("Please enter values to calculate ROI.");
  }
}

async function submitLead() {
  const name = document.getElementById('lead-name').value;
  const biz = document.getElementById('lead-biz').value;
  const email = document.getElementById('lead-email').value;
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  const result = document.getElementById('result');
  const annual = hours * rate * 52;

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
      // REPLACE WITH YOUR SHEETDB API URL
      const response = await fetch('https://sheetdb.io/api/v1/YOUR_ID_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [data] })
      });

      if (response.ok) {
        result.innerText = `Potential Annual Savings: $${annual.toLocaleString()}`;
        document.getElementById('lead-capture').innerHTML = `<p style="color: var(--accent-growth);">Success! Check your email for the audit report.</p>`;
      }
    } catch (e) { result.innerText = "Error syncing lead."; }
  } else { alert("Please fill all fields."); }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
