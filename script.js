
for(let i=0;i<120;i++){
 const s=document.createElement('div');
 s.style.position='fixed';
 s.style.width='2px';
 s.style.height='2px';
 s.style.background='white';
 s.style.left=Math.random()*100+'vw';
 s.style.top=Math.random()*100+'vh';
 s.style.opacity=Math.random();
 document.getElementById('stars').appendChild(s);
}
function aceitou(){
 document.getElementById('msg').innerHTML='<h2>Agora oficialmente somos nós para sempre ❤️</h2>';
 for(let i=0;i<50;i++){
   const h=document.createElement('div');
   h.innerHTML='❤️';
   h.style.position='fixed';
   h.style.left=Math.random()*100+'vw';
   h.style.top='100vh';
   document.body.appendChild(h);
   h.animate([{transform:'translateY(0)'},{transform:'translateY(-120vh)'}],{duration:3000});
 }
}
