// -----------------------
// ROI CALCULATOR
// -----------------------
function calculateSavings() {
  const hours = parseFloat(document.getElementById("hours").value);
  const rate = parseFloat(document.getElementById("rate").value);

  if (isNaN(hours) || isNaN(rate) || hours <= 0 || rate <= 0) {
    alert("Please enter valid numbers for hours and rate.");
    return;
  }

  const weeklySavings = hours * rate;
  const annualSavings = weeklySavings * 52;

  document.getElementById("result").innerText =
    `Estimated Weekly Savings: $${weeklySavings.toLocaleString()} | Annual: $${annualSavings.toLocaleString()}`;

  document.getElementById("lead-capture").style.display = "block";
}

// -----------------------
// LEAD CAPTURE (SheetDB)
// -----------------------
async function submitLead() {
  const name = document.getElementById("lead-name").value;
  const biz = document.getElementById("lead-biz").value;
  const email = document.getElementById("lead-email").value;

  if (!name || !biz || !email) {
    alert("Please fill out all fields.");
    return;
  }

  const payload = {
    data: {
      name: name,
      business: biz,
      email: email
    }
  };

  try {
    const response = await fetch("https://sheetdb.io/api/v1/m43zmyhch2qvd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert("Lead submitted successfully! We'll reach out shortly.");
      document.getElementById("lead-name").value = "";
      document.getElementById("lead-biz").value = "";
      document.getElementById("lead-email").value = "";
    } else {
      alert("Failed to submit lead. Try again later.");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to lead system.");
  }
}
