// ROI Calculator
function calculateSavings() {
    const h = parseFloat(document.getElementById('hours').value);
    const r = parseFloat(document.getElementById('rate').value);
    if(h && r){
        const annual = h * r * 52;
        document.getElementById('result').innerText = `Annual Capital Leakage Identified: $${annual.toLocaleString()}`;
        document.getElementById('lead-capture').style.display = 'block';
    }
}

async function submitLead() {
    const name = document.getElementById('lead-name').value;
    const biz = document.getElementById('lead-biz').value;
    const email = document.getElementById('lead-email').value;
    const h = parseFloat(document.getElementById('hours').value);
    const r = parseFloat(document.getElementById('rate').value);
    const annual = h * r * 52;

    if(name && biz && email.includes('@')){
        try{
            const response = await fetch('https://sheetdb.io/api/v1/m43zmyhch2qvd', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({data:[{
                    "Date": new Date().toLocaleDateString(),
                    "Full Name": name,
                    "Email": email,
                    "Business Name": biz,
                    "Weekly Hours": h,
                    "Hourly Rate": r,
                    "Potential Savings": annual
                }]})
            });
            if(!response.ok) throw new Error(`HTTP ${response.status}`);
            alert('Lead captured successfully!');
        } catch(e){
            console.error('SheetDB Error:', e);
            alert('Failed to sync lead, calculation is displayed.');
        }
    } else {
        alert('Please complete all fields with valid email.');
    }
}

// Lightbox
function openLightbox(src){
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display='flex';
}
function closeLightbox(){
    document.getElementById('lightbox').style.display='none';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

// Intersection Observer for fade-in
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Dark Mode Toggle
const toggle = document.createElement('button');
toggle.className='dark-toggle';
toggle.innerText='🌙';
document.body.appendChild(toggle);
toggle.addEventListener('click', () => {
    document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
});
