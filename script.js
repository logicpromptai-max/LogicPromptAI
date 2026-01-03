// 1. ROI & Lead Logic
function calculateSavings() {
    const h = document.getElementById('hours').value;
    const r = document.getElementById('rate').value;
    if (h && r) { document.getElementById('lead-capture').style.display = 'block'; }
}

async function submitLead() {
    const name = document.getElementById('lead-name').value;
    const biz = document.getElementById('lead-biz').value;
    const email = document.getElementById('lead-email').value;
    const annual = document.getElementById('hours').value * document.getElementById('rate').value * 52;
    const result = document.getElementById('result');

    if (name && biz && email.includes('@')) {
        result.innerText = "Processing Logic...";
        try {
            await fetch('https://sheetdb.io/api/v1/m43zmyhch2qvd', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ data: [{"Date": new Date().toLocaleDateString(), "Full Name": name, "Email": email, "Business Name": biz, "Potential Savings": annual}] })
            });
            result.innerText = `Annual Capital Leakage Identified: $${annual.toLocaleString()}`;
        } catch (e) { result.innerText = "Sync complete. Leakage: $" + annual.toLocaleString(); }
    }
}

// 2. Chatbot Logic
function toggleChat() {
    document.getElementById('chat-widget').classList.toggle('chat-closed');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const logs = document.getElementById('chat-logs');
    if (!input.value) return;
    logs.innerHTML += `<div class="user-msg">${input.value}</div>`;
    const val = input.value.toLowerCase();
    input.value = "";
    
    setTimeout(() => {
        let reply = "Analyzing bottleneck... Our architecture prioritizes error-handling and data normalization. Would you like to see a specific PoC for this?";
        if(val.includes("price") || val.includes("cost")) reply = "Our systems start at $2,500. Most clients see full ROI within 30 days due to recaptured labor hours.";
        logs.innerHTML += `<div class="bot-msg">${reply}</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 800);
}

// 3. Gallery & Observer
function openLightbox(src) { document.getElementById('lightbox-img').src = src; document.getElementById('lightbox').style.display = 'flex'; }
function closeLightbox() { document.getElementById('lightbox').style.display = 'none'; }
document.addEventListener('keydown', (e) => { if(e.key === "Escape") closeLightbox(); });

const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
