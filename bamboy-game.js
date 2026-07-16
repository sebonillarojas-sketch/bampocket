(function(){
class BamboyGame extends HTMLElement{
  connectedCallback(){
    this.innerHTML='';
    const body=document.createElement('div');
    body.style.cssText='position:relative;width:272px;background:#584C72;border-radius:26px;padding:22px 20px 18px;box-sizing:border-box;box-shadow:inset 0 2px 6px rgba(255,255,255,.15),inset 0 -4px 10px rgba(0,0,0,.35)';
    const screenBezel=document.createElement('div');
    screenBezel.style.cssText='background:#17141d;border-radius:12px;padding:8px;position:relative';
    const cv=document.createElement('canvas');cv.width=216;cv.height=176;
    cv.style.cssText='display:block;width:100%;background:#0d0b12;border-radius:6px;image-rendering:pixelated';
    const plus=document.createElement('div');
    plus.style.cssText='position:absolute;top:12px;right:14px;color:#8b5cf6;font-family:monospace;font-size:16px;line-height:1;text-shadow:0 0 6px #8b5cf6';
    plus.textContent='+';
    screenBezel.append(cv,plus);
    const controls=document.createElement('div');
    controls.style.cssText='display:flex;justify-content:space-between;align-items:center;margin-top:16px;height:64px';
    controls.innerHTML=
      '<div style="position:relative;width:58px;height:58px">'+
        '<div style="position:absolute;left:19px;top:0;width:20px;height:58px;background:#241f30;border-radius:5px"></div>'+
        '<div style="position:absolute;left:0;top:19px;width:58px;height:20px;background:#241f30;border-radius:5px"></div>'+
      '</div>'+
      '<div style="display:flex;gap:10px;align-items:flex-end">'+
        '<div style="width:20px;height:20px;border-radius:50%;background:#3b62e0;box-shadow:0 2px 4px rgba(0,0,0,.4)"></div>'+
        '<div style="width:24px;height:24px;border-radius:50%;background:#8b5cf6;box-shadow:0 2px 4px rgba(0,0,0,.4);margin-bottom:12px"></div>'+
      '</div>';
    const tag=document.createElement('div');
    tag.style.cssText='text-align:center;margin-top:14px;font-family:"CS Genio Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:3px';
    tag.innerHTML='<div style="font-size:13px;font-weight:bold;color:#F9F9F9">BAMBOY</div><div style="font-size:10px;color:#8b5cf6;margin-top:2px">Pocket · <span class="sc">0000</span></div>';
    body.append(screenBezel,controls,tag);
    const hint=document.createElement('div');
    hint.style.cssText='text-align:center;margin-top:8px;font-family:"CS Genio Mono",ui-monospace,monospace;font-size:9px;text-transform:uppercase;color:#E3E1DE';
    hint.textContent='← ↑ ↓ → PARA MOVER · COME LOS PUNTOS';
    const wrap=document.createElement('div');wrap.append(body,hint);this.appendChild(wrap);
    const g=cv.getContext('2d'),C=11,N=Math.floor(216/C),M=Math.floor(176/C);
    let snake,dir,food,score,dead;
    const scoreEl=tag.querySelector('.sc');
    const spawn=()=>{let p;do{p={x:Math.floor(Math.random()*N),y:Math.floor(Math.random()*M)}}while(snake&&snake.some(s=>s.x===p.x&&s.y===p.y));return p;};
    const reset=()=>{snake=[{x:5,y:8},{x:4,y:8},{x:3,y:8}];dir={x:1,y:0};food=spawn();score=0;dead=false;scoreEl.textContent='0000';};
    const draw=()=>{
      g.fillStyle='#0d0b12';g.fillRect(0,0,216,176);
      g.fillStyle='rgba(139,92,246,.16)';
      for(let x=0;x<N;x++)for(let y=0;y<M;y++)g.fillRect(x*C+C/2,y*C+C/2,1.5,1.5);
      g.fillStyle='#F7643B';g.fillRect(food.x*C+1,food.y*C+1,C-2,C-2);
      snake.forEach((s,i)=>{g.fillStyle=i===0?'#F9F9F9':'#8b5cf6';g.fillRect(s.x*C+1,s.y*C+1,C-2,C-2);});
      if(dead){g.fillStyle='rgba(13,11,18,.85)';g.fillRect(0,60,216,52);g.fillStyle='#8b5cf6';g.font='11px "CS Genio Mono",monospace';g.textAlign='center';g.fillText('GAME OVER — PULSA UNA FLECHA',108,88);}
    };
    const step=()=>{
      if(dead)return;
      const h={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
      if(h.x<0||h.y<0||h.x>=N||h.y>=M||snake.some(s=>s.x===h.x&&s.y===h.y)){dead=true;draw();return;}
      snake.unshift(h);
      if(h.x===food.x&&h.y===food.y){score+=10;scoreEl.textContent=String(score).padStart(4,'0');food=spawn();}
      else snake.pop();
      draw();
    };
    this._kd=e=>{
      const d={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}}[e.key];
      if(!d)return;
      e.preventDefault();e.stopPropagation();
      if(dead)reset();
      if(d.x!==-dir.x||d.y!==-dir.y)dir=d;
    };
    window.addEventListener('keydown',this._kd,true);
    reset();draw();this._t=setInterval(step,140);
  }
  disconnectedCallback(){clearInterval(this._t);window.removeEventListener('keydown',this._kd,true);}
}
if(!customElements.get('bamboy-game'))customElements.define('bamboy-game',BamboyGame);
})();
