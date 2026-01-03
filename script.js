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
            await fetch('https://sheetdb.io/api/v1/m43zmyhch2qvd', {
                method: 'POST',
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
            alert('Lead captured successfully!');
        } catch(e){
            alert('Error syncing lead, but calculation is displayed.');
        }
    }
}

// Lightbox
function openLightbox(src){
    document.getElementById('lightbox-img').src = src;
    document.querySelector('.lightbox').style.display='flex';
}
function closeLightbox(){
    document.querySelector('.lightbox').style.display='none';
}
document.addEventListener('keydown', e => {if(e.key==='Escape') closeLightbox();});

const toggle = document.createElement('button');
toggle.className = 'dark-toggle';
toggle.innerText = '🌙';
document.body.appendChild(toggle);

toggle.addEventListener('click', ()=>{
    document.documentElement.dataset.theme =
        document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
});
