
(function(){
  // Reveal on scroll (con fallback)
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(el=>io.observe(el));
  } else {
    els.forEach(el=>el.classList.add('show'));
  }

  // Testimonials carousel (con guardas)
  const slides = document.querySelectorAll('.carousel .slide');
  const prev   = document.querySelector('.carousel .prev');
  const next   = document.querySelector('.carousel .next');
  let current = 0;
  function show(i){
    if (!slides.length) return;
    slides[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
  }
  if (prev && next && slides.length) {
    prev.addEventListener('click',()=>show(current-1));
    next.addEventListener('click',()=>show(current+1));
    setInterval(()=>show(current+1), 6000);
  }

  // Sticky CTA (solo si existe)
  const sticky = document.getElementById('stickyCta');
  if (sticky) {
    document.addEventListener('scroll', ()=>{
      const y = window.scrollY;
      sticky.style.opacity = y > 180 ? 1 : 0;
      sticky.style.pointerEvents = y > 180 ? 'auto' : 'none';
    });
  }

  // ⏳ Reloj de urgencia (barra opcional). Si no tienes el HTML, no pasa nada.
  const bars = [
    { textEl: document.getElementById('countdownText'),       barEl: document.getElementById('dealAlert') },
    { textEl: document.getElementById('countdownTextBottom'), barEl: document.getElementById('dealAlertBottom') }
  ].filter(b => b.textEl && b.barEl);

  if (bars.length){
    const endAt = new Date(Date.now() + 72*60*60*1000); // 72h
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
    const timer = setInterval(tick, 1000); tick();
  }
})();
