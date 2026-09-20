function go(id){
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }
  function openEnvelope(){
    const env = document.getElementById('envelope');
    if(env.classList.contains('open')) return;
    env.classList.add('open');
    setTimeout(()=>go('p-reassure'), 650);
  }
  function respond(kind){
    const msg = document.getElementById('response-msg');
    msg.textContent = kind === 'same'
      ? "Then this was worth every bit of the nerves. 🩷"
      : "That's completely okay — no rush at all.";
  }

  // ambient floating hearts
  const field = document.getElementById('hearts');
  const glyphs = ['🩷','💗','♡'];
  for(let i=0;i < 16;i++){
    const s = document.createElement('span');
    s.className='heart-p';
    s.textContent = glyphs[Math.floor(Math.random()*glyphs.length)];
    s.style.left = Math.random()*100+'vw';
    s.style.fontSize = (0.8+Math.random()*1.4)+'rem';
    s.style.animationDuration = (9+Math.random()*10)+'s';
    s.style.animationDelay = (Math.random()*10)+'s';
    field.appendChild(s);
  }

  function toggleAudio() {
    const audio = document.getElementById('myAudio');
    const btn = document.getElementById('playBtn');
    if (audio.paused) {
      audio.play();
      btn.textContent = 'Pause';
    } else {
      audio.pause();
      btn.textContent = 'Play';
    }
  }
