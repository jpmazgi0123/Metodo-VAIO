
// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
},{threshold: 0.15});
document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

// Testimonials carousel
const slides = document.querySelectorAll('.carousel .slide');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');
let current = 0;
function show(i){ slides[current].classList.remove('active'); current=(i+slides.length)%slides.length; slides[current].classList.add('active'); }
if(prev && next){
  prev.addEventListener('click',()=>show(current-1));
  next.addEventListener('click',()=>show(current+1));
  setInterval(()=>show(current+1), 6000);
}

// Sticky CTA visibility
const sticky = document.getElementById('stickyCta');
document.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  sticky.style.opacity = y > 180 ? 1 : 0;
  sticky.style.pointerEvents = y > 180 ? 'auto' : 'none';
});

//Reloj de urgencia
document.addEventListener('DOMContentLoaded', () => {
  // 72 horas desde ahora (puedes fijar una fecha real si quieres)
  const endAt = new Date(Date.now() + 72*60*60*1000);

  // Soporta una o dos barras (arriba y abajo)
  const bars = [
    { textEl: document.getElementById('countdownText'),        barEl: document.getElementById('dealAlert') },
    { textEl: document.getElementById('countdownTextBottom'),  barEl: document.getElementById('dealAlertBottom') }
  ].filter(b => b.textEl && b.barEl);

  function tick(){
    const s = Math.max(0, Math.floor((endAt - Date.now())/1000));
    const h = String(Math.floor(s/3600)).padStart(2,'0');
    const m = String(Math.floor((s%3600)/60)).padStart(2,'0');
    const sec = String(s%60).padStart(2,'0');

    bars.forEach(({textEl, barEl})=>{
      textEl.textContent = `Precio de lanzamiento termina en ${h}:${m}:${sec}`;
      if (s <= 24*3600) barEl.classList.add('urgent');
      if (s === 0) textEl.textContent = '¡La oferta terminó!';
    });

    if (s === 0) clearInterval(timer);
  }

  // Seguridad: si no hay barras, no hacemos nada
  if (bars.length) {
    const timer = setInterval(tick, 1000);
    tick();
  } else {
    console.warn('No se encontraron elementos de countdown (deal-alert). Revisa los IDs en index.html');
  }
});
