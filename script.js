
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
const until = new Date(Date.now() + 72*60*60*1000); // 72h desde ahora
setInterval(()=>{
  const s = Math.max(0, Math.floor((until - Date.now())/1000));
  const h = String(Math.floor(s/3600)).padStart(2,'0');
  const m = String(Math.floor((s%3600)/60)).padStart(2,'0');
  const sec = String(s%60).padStart(2,'0');
  const el = document.getElementById('countdown');
  if(el) el.textContent = `Precio de lanzamiento termina en ${h}:${m}:${sec}`;
}, 1000);
