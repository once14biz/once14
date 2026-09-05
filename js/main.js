// Nav scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('bg',scrollY>30),{passive:true});

// Burger
const burger=document.getElementById('burger'),mNav=document.getElementById('mNav');
burger.addEventListener('click',()=>{burger.classList.toggle('on');mNav.classList.toggle('on');});
mNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('on');mNav.classList.remove('on');}));

// Services index
document.querySelectorAll('.serv-index-item').forEach(item=>{
  item.addEventListener('click',()=>{
    const t=item.dataset.panel;
    document.querySelectorAll('.serv-index-item').forEach(i=>i.classList.remove('active'));
    document.querySelectorAll('.serv-panel-item').forEach(p=>p.classList.remove('active'));
    item.classList.add('active');
    document.getElementById(t).classList.add('active');
  });
});

// Philosophy clauses hover
const clauses=document.querySelectorAll('.phil-clause');
clauses.forEach(c=>{
  c.addEventListener('mouseenter',()=>{
    clauses.forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
  });
});

// FAQ
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const row=btn.closest('.faq-row'),body=row.querySelector('.faq-a'),isOn=row.classList.contains('on');
    document.querySelectorAll('.faq-row').forEach(r=>{r.classList.remove('on');r.querySelector('.faq-a').classList.remove('on');});
    if(!isOn){row.classList.add('on');body.classList.add('on');}
  });
});

// Scroll index line (signature element)
const idxFill=document.getElementById('idxFill'),idxMark=document.getElementById('idxMark');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateIndex(){
  const h=document.documentElement,scrolled=h.scrollTop,max=h.scrollHeight-h.clientHeight;
  const p=max>0?Math.min(scrolled/max,1):0;
  const y=p*1000;
  idxFill.setAttribute('y2',y);
  idxMark.setAttribute('points',`17,${y-6} 12,${y+4} 22,${y+4}`);
}
if(!reduceMotion){
  window.addEventListener('scroll',()=>requestAnimationFrame(updateIndex),{passive:true});
  updateIndex();
} else {
  idxFill.setAttribute('y2','1000');
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

// ── Intro veil cleanup ──
const introVeil=document.getElementById('introVeil');
if(introVeil){
  introVeil.addEventListener('animationend',()=>introVeil.classList.add('done'));
  setTimeout(()=>introVeil.classList.add('done'),2200); // fallback
}

// ── Cursor spotlight in hero ──
const heroSpot=document.getElementById('heroSpot'),heroEl=document.getElementById('inicio');
if(heroSpot && heroEl && !reduceMotion){
  heroEl.addEventListener('mousemove',(e)=>{
    const r=heroEl.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width*100).toFixed(1);
    const y=((e.clientY-r.top)/r.height*100).toFixed(1);
    heroSpot.style.setProperty('--mx',x+'%');
    heroSpot.style.setProperty('--my',y+'%');
  },{passive:true});
}

// ── Count-up stats (hero) ──
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
    entries.forEach(entry=>{
      if(entry.isIntersecting){ runCount(entry.target); countObs.unobserve(entry.target); }
    });
  },{threshold:.4});
  countEls.forEach(el=>countObs.observe(el));
}

// ── Scroll reveal ──
const revealEls=document.querySelectorAll('.reveal, .reveal-group');
if(revealEls.length){
  if(reduceMotion){
    revealEls.forEach(el=>el.classList.add('visible'));
  } else {
    const revealObs=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('visible'); revealObs.unobserve(entry.target); }
      });
    },{threshold:.12, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(el=>revealObs.observe(el));
  }
}
