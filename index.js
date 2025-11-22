<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KIMHUB DollarClone</title>
  <style>
    body { margin:0; font-family:Arial, sans-serif; scroll-behavior: smooth; }
    a:hover { opacity:0.9; }
    /* Fade-in animation */
    .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.8s, transform 0.8s; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    @media(max-width:768px){ .flex-wrap{ flex-direction: column; } }
  </style>
</head>
<body>

  <!-- 1. Hero Section -->
  <section id="hero" style="background: linear-gradient(135deg,#1f2937,#4f46e5); color:white; padding:80px 20px; text-align:center;">
    <h1 style="font-size:3rem; font-weight:bold; margin-bottom:20px;">Build Your Automated Trading Bots</h1>
    <p style="font-size:1.2rem; margin-bottom:30px;">Drag & drop strategies, connect Deriv, and automate your trades effortlessly.</p>
    <a href="https://deriv.partners/rx?ca=kimhuhfx.com&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU154142"
       target="_blank"
       style="display:inline-block; padding:15px 30px; font-size:1.2rem; background:#ef4444; color:white; border-radius:8px; text-decoration:none; margin-right:10px; transition:0.3s;">
      Connect Deriv
    </a>
    <a href="#features"
       style="display:inline-block; padding:15px 30px; font-size:1.2rem; background:#3b82f6; color:white; border-radius:8px; text-decoration:none; transition:0.3s;">
      Learn More
    </a>
  </section>

  <!-- 2. Features Section -->
  <section id="features" style="padding:80px 20px; background:#f9fafb; text-align:center;">
    <h2 style="font-size:2.5rem; margin-bottom:40px; color:#111827;">Features</h2>
    <div class="flex-wrap" style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px;">
      <div class="fade-in" style="background:white; padding:30px; border-radius:12px; width:250px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h3 style="font-size:1.5rem; margin-bottom:15px;">Drag & Drop</h3>
        <p>Create strategies visually with an easy drag & drop builder.</p>
      </div>
      <div class="fade-in" style="background:white; padding:30px; border-radius:12px; width:250px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h3 style="font-size:1.5rem; margin-bottom:15px;">Automated Trading</h3>
        <p>Run bots automatically on Deriv with real-time trading logic.</p>
      </div>
      <div class="fade-in" style="background:white; padding:30px; border-radius:12px; width:250px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h3 style="font-size:1.5rem; margin-bottom:15px;">Referral Integration</h3>
        <p>Earn commissions automatically via your Deriv affiliate ID.</p>
      </div>
      <div class="fade-in" style="background:white; padding:30px; border-radius:12px; width:250px; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
        <h3 style="font-size:1.5rem; margin-bottom:15px;">Strategy Storage</h3>
        <p>Save your trading strategies for future reuse or demo testing.</p>
      </div>
    </div>
  </section>

  <!-- 3. How It Works Section -->
  <section id="how-it-works" style="padding:80px 20px; background:#ffffff; text-align:center;">
    <h2 style="font-size:2.5rem; margin-bottom:50px; color:#111827;">How It Works</h2>
    <div class="flex-wrap" style="display:flex; flex-wrap:wrap; justify-content:center; gap:40px;">
      <div class="fade-in" style="width:220px;">
        <div style="font-size:2rem; font-weight:bold; color:#3b82f6; margin-bottom:15px;">1</div>
        <h3 style="font-size:1.5rem; margin-bottom:10px;">Create Strategy</h3>
        <p>Use our drag & drop builder to design your trading strategy visually.</p>
      </div>
      <div class="fade-in" style="width:220px;">
        <div style="font-size:2rem; font-weight:bold; color:#3b82f6; margin-bottom:15px;">2</div>
        <h3 style="font-size:1.5rem; margin-bottom:10px;">Connect Deriv</h3>
        <p>Click the Connect Deriv button to link your account via our affiliate referral.</p>
      </div>
      <div class="fade-in" style="width:220px;">
        <div style="font-size:2rem; font-weight:bold; color:#3b82f6; margin-bottom:15px;">3</div>
        <h3 style="font-size:1.5rem; margin-bottom:10px;">Run Bot</h3>
        <p>Start your bot and let it execute trades automatically based on your strategy.</p>
      </div>
      <div class="fade-in" style="width:220px;">
        <div style="font-size:2rem; font-weight:bold; color:#3b82f6; margin-bottom:15px;">4</div>
        <h3 style="font-size:1.5rem; margin-bottom:10px;">Track Profits</h3>
        <p>Monitor your performance and refine strategies for better results.</p>
      </div>
    </div>
  </section>

  <!-- 4. Fully Interactive Bot Builder -->
  <section id="bot-builder" style="padding:80px 20px; background:#f9fafb; text-align:center;">
    <h2 style="font-size:2.5rem; margin-bottom:40px; color:#111827;">Try the Bot Builder</h2>
    <p style="margin-bottom:30px;">Drag, connect, add, delete nodes, and save/load strategies.</p>

    <div id="builder" style="position:relative; width:90%; height:450px; margin:0 auto; border:2px dashed #d1d5db; border-radius:12px; background:white; overflow:hidden;">
      <svg id="connections" style="position:absolute; width:100%; height:100%; pointer-events:none;"></svg>
    </div>

    <div style="margin-top:20px;">
      <button onclick="addNode('Price')" style="margin-right:10px; padding:10px 20px; background:#3b82f6; color:white; border:none; border-radius:6px;">Add Price Node</button>
      <button onclick="addNode('SMA')" style="margin-right:10px; padding:10px 20px; background:#10b981; color:white; border:none; border-radius:6px;">Add SMA Node</button>
      <button onclick="addNode('Buy')" style="margin-right:10px; padding:10px 20px; background:#ef4444; color:white; border:none; border-radius:6px;">Add Buy Node</button>
      <button onclick="resetBuilder()" style="margin-right:10px; padding:10px 20px; background:#6b7280; color:white; border:none; border-radius:6px;">Reset Builder</button>
      <button onclick="saveStrategy()" style="margin-right:10px; padding:10px 20px; background:#f59e0b; color:white; border:none; border-radius:6px;">Save Strategy</button>
      <button onclick="loadStrategy()" style="padding:10px 20px; background:#8b5cf6; color:white; border:none; border-radius:6px;">Load Strategy</button>
    </div>
  </section>

  <script>
  // ===== Bot Builder JS with click-to-delete, save/load =====
  let nodes = [];
  let nodeCount = 0;
  const colors = { 'Price': '#3b82f6', 'SMA': '#10b981', 'Buy': '#ef4444' };
  const grid = 20;
  const builder = document.getElementById('builder');
  const svg = document.getElementById('connections');

  function snap(value){ return Math.round(value/grid)*grid; }

  function addNode(type){
    nodeCount++;
    let node = document.createElement('div');
    node.innerText = type;
    node.dataset.id = nodeCount;
    node.style.position='absolute';
    node.style.top=snap(50+nodeCount*35)+'px';
    node.style.left=snap(50+nodeCount*35)+'px';
    node.style.padding='10px 20px';
    node.style.background=colors[type]||'#f3f4f6';
    node.style.border='2px solid #9ca3af';
    node.style.borderRadius='10px';
    node.style.cursor='move';
    node.style.userSelect='none';
    node.style.fontWeight='bold';
    node.style.color='white';
    node.style.transition='transform 0.2s, box-shadow 0.2s';
    node.onmouseover = ()=>{ node.style.transform='scale(1.1)'; node.style.boxShadow='0 5px 15px rgba(0,0,0,0.3)'; };
    node.onmouseout = ()=>{ node.style.transform='scale(1)'; node.style.boxShadow='none'; };
    builder.appendChild(node);
    nodes.push(node);

    node.onmousedown = function(e){
      let shiftX=e.clientX-node.getBoundingClientRect().left;
      let shiftY=e.clientY-node.getBoundingClientRect().top;
      function moveAt(pageX,pageY){
        node.style.left=snap(pageX-shiftX-builder.getBoundingClientRect().left)+'px';
        node.style.top=snap(pageY-shiftY-builder.getBoundingClientRect().top)+'px';
        updateConnections();
      }
      function onMouseMove(e){ moveAt(e.pageX,e.pageY); }
      document.addEventListener('mousemove',onMouseMove);
      node.onmouseup=function(){document.removeEventListener('mousemove',onMouseMove); node.onmouseup=null;}
    };
    node.ondragstart = ()=>false;

    // Delete node on click
    node.onclick=function(e){
      e.stopPropagation();
      if(confirm(Delete ${type} node?)){
        svg.querySelectorAll('line').forEach(line=>{
          if(line.dataset.a===node.dataset.id || line.dataset.b===node.dataset.id){ line.remove(); }
        });
        nodes=nodes.filter(n=>n!==node);
        node.remove();
        updateConnections();
      }
    };

    if(nodes.length>1) drawConnection(nodes[nodes.length-2], node);
  }

  function drawConnection(a,b){
    let line=document.createElementNS("http://www.w3.org/2000/svg","line");
    line.setAttribute("stroke","#6b7280");
    line.setAttribute("stroke-width","2");
    line.setAttribute("marker-end","url(#arrow)");
    line.dataset.a=a.dataset.id;
    line.dataset.b=b.dataset.id;
    svg.appendChild(line);
    if(!document.getElementById('arrow-marker')){
      let defs=document.createElementNS("http://www.w3.org/2000/svg","defs");
      let marker=document.createElementNS("http://www.w3.org/2000/svg","marker");
      marker.setAttribute("id","arrow");
      marker.setAttribute("markerWidth","10");
      marker.setAttribute("markerHeight","10");
      marker.setAttribute("refX","10");
      marker.setAttribute("refY","3");
      marker.setAttribute("orient","auto");
      marker.setAttribute("markerUnits","strokeWidth");
      let path=document.createElementNS("http://www.w3.org/2000/svg","path");
      path.setAttribute("d","M0,0 L0,6 L9,3 z");
      path.setAttribute("fill","#6b7280");
      marker.appendChild(path);
      defs.appendChild(marker);
      defs.id='arrow-marker';
      svg.appendChild(defs);
    }
    updateConnections();
  }

  function updateConnections(){
    svg.querySelectorAll('line').forEach(line=>{
      let a=nodes.find(n=>n.dataset.id==line.dataset.a);
      let b=nodes.find(n=>n.dataset.id==line.dataset.b);
      if(a&&b){
        line.setAttribute('x1',a.offsetLeft+a.offsetWidth/2);
        line.setAttribute('y1',a.offsetTop+a.offsetHeight/2);
        line.setAttribute('x2',b.offsetLeft+b.offsetWidth/2);
        line.setAttribute('y2',b.offsetTop+b.offsetHeight/2);
      }
    });
  }

  function resetBuilder(){ nodes.forEach(n=>n.remove()); nodes=[]; nodeCount=0; svg.innerHTML=''; }

  function saveStrategy(){
    if(nodes.length===0){ alert("No nodes to save!"); return; }
    const strategy=nodes.map(n=>({ id:n.dataset.id, type:n.innerText, left:parseInt(n.style.left), top:parseInt(n.style.top) }));
    localStorage.setItem('savedStrategy',JSON.stringify(strategy));
    alert("Strategy saved!");
  }

  function loadStrategy(){
    resetBuilder();
    const saved=localStorage.getItem('savedStrategy');
    if(!saved){ alert("No saved strategy found."); return; }
    const strategy=JSON.parse(saved);
    strategy.forEach(n=>{
      nodeCount++;
      let node=document.createElement('div');
      node.innerText=n.type;
      node.dataset.id=nodeCount;
      node.style.position='absolute';
      node.style.left=snap(n.left)+'px';
      node.style.top=snap(n.top)+'px';
      node.style.padding='10px 20px';
      node.style.background=colors[n.type]||'#f3f4f6';
      node.style.border='2px solid #9ca3af';
      node.style.borderRadius='10px';
      node.style.cursor='move';
      node.style.userSelect='none';
      node.style.fontWeight='bold';
      node.style.color='white';
      node.style.transition='transform 0.2s, box-shadow 0.2s';
      builder.appendChild(node);
      nodes.push(node);

      node.onmousedown=function(e){
        let shiftX=e.clientX-node.getBoundingClientRect().left;
        let shiftY=e.clientY-node.getBoundingClientRect().top;
        function moveAt(pageX,pageY){
          node.style.left=snap(pageX-shiftX-builder.getBoundingClientRect().left)+'px';
          node.style.top=snap(pageY-shiftY-builder.getBoundingClientRect().top)+'px';
          updateConnections();
        }
        function onMouseMove(e){ moveAt(e.pageX,e.pageY); }
        document.addEventListener('mousemove',onMouseMove);
        node.onmouseup=function(){document.removeEventListener('mousemove',onMouseMove); node.onmouseup=null;}
      };
      node.ondragstart = ()=>false;

      node.onclick=function(e){
        e.stopPropagation();
        if(confirm(Delete ${n.type} node?)){
          svg.querySelectorAll('line').forEach(line=>{
            if(line.dataset.a===node.dataset.id || line.dataset.b===node.dataset.id){ line.remove(); }
          });
          nodes=nodes.filter(nd=>nd!==node);
          node.remove();
          updateConnections();
        }
      };

      if(nodes.length>1) drawConnection(nodes[nodes.length-2], node);
    });
    alert("Strategy loaded!");
  }

  // Fade-in animation
  const fadeElems=document.querySelectorAll('.fade-in');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add('visible'); } });
  },{threshold:0.2});
  fadeElems.forEach(el=>observer.observe(el));
  </script>

  <!-- 5. Footer -->
  <footer style="background:#1f2937; color:white; text-align:center; padding:40px 20px;">
    <p>&copy; 2025 KIMHUB. All rights reserved.</p>
    <p>
      <a href="#hero" style="color:#3b82f6; text-decoration:none; margin-right:15px;">Home</a>
      <a href="#features" style="color:#3b82f6; text-decoration:none; margin-right:15px;">Features</a>
      <a href="#how-it-works" style="color:#3b82f6; text-decoration:none; margin-right:15px;">How It Works</a>
      <a href="#bot-builder" style="color:#3b82f6; text-decoration:none; margin-right:15px;">Bot Builder</a>
      <a href="https://deriv.partners/rx?ca=kimhuhfx.com&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU154142" target="_blank" style="color:#3b82f6; text-decoration:none; margin-right:15px;">Connect Deriv</a>
      <a href="terms.html" style="color:#3b82f6; text-decoration:none; margin-left:15px;">Terms</a>
      <a href="privacy.html" style="color:#3b82f6; text-decoration:none; margin-left:15px;">Privacy</a>
    </p>
    <p style="margin-top
