async function submitLead() {
  const email = document.getElementById('lead-email').value;
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  const result = document.getElementById('result');
  const annual = hours * rate * 52;

  if (email.includes('@')) {
    // Show loading state
    result.innerText = "Processing your report...";

    const data = {
      "Date": new Date().toLocaleDateString(),
      "Email": email,
      "Weekly Hours": hours,
      "Hourly Rate": rate,
      "Potential Savings": annual
    };

    try {
      // REPLACE the URL below with your SheetDB API URL
      const response = await fetch('https://sheetdb.io/api/v1/YOUR_SHEETDB_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [data] })
      });

      if (response.ok) {
        result.innerText = `Estimated Annual Savings: $${annual.toLocaleString()}`;
        document.getElementById('lead-capture').innerHTML = `
          <p style="color: var(--accent-growth);">Success! Your report is being generated and sent to ${email}.</p>
          <p><strong>Next Step:</strong> Book your strategy session below.</p>`;
      }
    } catch (error) {
      console.error('Error:', error);
      result.innerText = "There was a connection error, but your ROI is: $" + annual.toLocaleString();
    }
  } else {
    alert("Please enter a valid business email.");
  }
}
