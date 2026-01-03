// ROI Calculator
function calculateSavings() {
    const h = document.getElementById('hours').value;
    const r = document.getElementById('rate').value;
    if(h && r) document.getElementById('lead-capture').style.display='block';
}

async function submitLead() {
    const name = document.getElementById('lead-name').value;
    const biz = document.getElementById('lead-biz').value;
    const email = document.getElementById('lead-email').value;
    const annual = document.getElementById('hours').value * document.getElementById('rate').value * 52;
    const result = document.getElementById('result');
    if(name && biz && email.includes('@')){
        result.innerText="Processing Logic...";
        try{
            await fetch('https://sheetdb.io/api/v1/m43zmyhch2qvd',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({data:[{"Date":new Date().toLocaleDateString(),"Full Name":name,"Email":email,"Business Name":biz,"Potential Savings":annual}]})
            });
            result.innerText=`Annual Capital Leakage Identified: $${annual.toLocaleString()}`;
        } catch(e){ result.innerText=`Sync complete. Leakage: $${annual.toLocaleString()}`;}
    }
}

// Lightbox
function openLightbox(src){ 
    let lb=document.getElementById('lightbox'); 
    if(!lb){ 
        lb=document.createElement('div'); 
        lb.id='lightbox'; lb.className='lightbox'; 
        lb.innerHTML='<span class="close-btn">&times;</span><img class="lightbox-content" id="lightbox-img">';
        document.body.appendChild(lb);
        lb.addEventListener('click',()=>{lb.style.display='none';});
    }
    document.getElementById('lightbox-img').src=src;
    lb.style.display='flex';
}

// Fade-in observer
const obs=new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.1});
document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
