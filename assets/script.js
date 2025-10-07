
(function(){
  const sections = Array.from(document.querySelectorAll('.section'));
  let idx = 0;
  const dots = document.querySelectorAll('.nav-dots .dot');
  function show(i){
    sections[idx].classList.remove('active');
    dots[idx].classList.remove('active');
    idx = Math.max(0, Math.min(sections.length-1, i));
    sections[idx].classList.add('active');
    dots[idx].classList.add('active');
    // if finale, start confetti
    if(sections[idx].dataset.finale === '1'){
      document.getElementById('confetti-canvas').style.display = 'block';
      // confetti already animating; just ensure visible
    } else {
      document.getElementById('confetti-canvas').style.display = 'none';
    }
    // scroll to top nicely
    window.scrollTo({top:0,behavior:'smooth'});
  }
  document.querySelectorAll('[data-next]').forEach(b=> b.addEventListener('click',()=>show(idx+1)));
  document.querySelectorAll('[data-prev]').forEach(b=> b.addEventListener('click',()=>show(idx-1)));
  dots.forEach((d,di)=> d.addEventListener('click',()=>show(di)));
  // init
  sections[0].classList.add('active');
  dots[0].classList.add('active');
})();
