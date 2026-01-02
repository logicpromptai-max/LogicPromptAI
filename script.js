function calculateSavings() {
  const hours = document.getElementById('hours').value;
  const rate = document.getElementById('rate').value;
  const result = document.getElementById('result');
  if (hours && rate) {
    const annual = hours * rate * 52;
    result.innerText = `Potential Annual Savings: $${annual.toLocaleString()}`;
  } else {
    result.innerText = "Please enter both values.";
  }
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));