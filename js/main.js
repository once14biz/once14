// Progress bar
const progressBar=document.getElementById('progressBar');
function updateProgress(){
  const h=document.documentElement,scrolled=h.scrollTop,max=h.scrollHeight-h.clientHeight;
  progressBar.style.width=(max>0?(scrolled/max*100):0)+'%';
}
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();

// Nav scroll state
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20),{passive:true});

// Burger
const burger=document.getElementById('burger'),mNav=document.getElementById('mNav');
burger.addEventListener('click',()=>{burger.classList.toggle('on');mNav.classList.toggle('on');});
mNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('on');mNav.classList.remove('on');}));

// Services bento expand
document.querySelectorAll('.serv-card').forEach(card=>{
  card.querySelector('.serv-toggle').addEventListener('click',(e)=>{
    e.stopPropagation();
    const wasOpen=card.classList.contains('open');
    document.querySelectorAll('.serv-card').forEach(c=>c.classList.remove('open'));
    if(!wasOpen) card.classList.add('open');
  });
  card.addEventListener('click',()=>{
    const wasOpen=card.classList.contains('open');
    document.querySelectorAll('.serv-card').forEach(c=>c.classList.remove('open'));
    if(!wasOpen) card.classList.add('open');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q2').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.faq-card'),isOn=card.classList.contains('on');
    document.querySelectorAll('.faq-card').forEach(c=>c.classList.remove('on'));
    if(!isOn) card.classList.add('on');
  });
});

// Reduced motion flag
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Count-up stats
function runCount(el){
  const target=parseInt(el.dataset.count,10),dur=1300,start=performance.now();
  if(reduceMotion){ el.textContent=target; return; }
  function tick(now){
    const p=Math.min((now-start)/dur,1);
    el.textContent=Math.round(target*(1-Math.pow(1-p,3)));
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const countEls=document.querySelectorAll('.cnt');
if(countEls.length){
  const countObs=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ runCount(entry.target); countObs.unobserve(entry.target); } });
  },{threshold:.4});
  countEls.forEach(el=>countObs.observe(el));
}

// Scroll reveal
const revealEls=document.querySelectorAll('.reveal');
if(revealEls.length){
  if(reduceMotion){
    revealEls.forEach(el=>el.classList.add('visible'));
  } else {
    const revealObs=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); revealObs.unobserve(entry.target); } });
    },{threshold:.1, rootMargin:'0px 0px -50px 0px'});
    revealEls.forEach(el=>revealObs.observe(el));
  }
}

// ── Language toggle ──
let currentLang='es';
function setLang(lang){
  if(lang===currentLang) return;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    if(el.dataset.esCache===undefined){ el.dataset.esCache=el.innerHTML; }
    el.innerHTML = lang==='en' ? el.dataset.en : el.dataset.esCache;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  currentLang = lang;
}
document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
});
