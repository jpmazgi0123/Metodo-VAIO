
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
