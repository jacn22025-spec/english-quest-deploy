(()=>{
  const style=document.createElement('style');
  style.id='navigation-map-v122-style';
  style.textContent=`
    #map.quest119Map{
      position:fixed!important;
      inset:0!important;
      overflow:hidden!important;
      background:#f8edf1!important;
    }
    #map.quest119Map .quest119MapStage{
      position:fixed!important;
      inset:auto!important;
      left:50%!important;
      top:50%!important;
      width:min(100vw,calc(100dvh * 592 / 884))!important;
      height:min(100dvh,calc(100vw * 884 / 592))!important;
      max-width:none!important;
      transform:translate(-50%,-50%)!important;
      overflow:hidden!important;
      background:#f8edf1!important;
    }
    #map.quest119Map .quest119MapStage>.quest119__art{
      object-fit:fill!important;
      object-position:center!important;
    }
  `;
  document.head.appendChild(style);

  const alignHomeActions=()=>{
    const root=document.querySelector('[data-companion120="home"]');
    if(!root)return false;
    const layout={
      map:[1.5,69.5,24.2,21.5],
      games:[26.2,69.5,24.2,21.5],
      wardrobe:[51,69.5,24.2,21.5],
      shop:[75.8,69.5,22.7,21.5]
    };
    Object.entries(layout).forEach(([action,[left,top,width,height]])=>{
      const button=root.querySelector(`[data-c120="${action}"]`);
      if(!button)return;
      Object.assign(button.style,{left:left+'%',top:top+'%',width:width+'%',height:height+'%'});
    });
    return true;
  };

  const init=()=>{
    if(alignHomeActions())return;
    const observer=new MutationObserver(()=>{
      if(alignHomeActions())observer.disconnect();
    });
    observer.observe(document.body,{childList:true,subtree:true});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

/* Unified five-button navigation — 2026-09-20. Navigation UI only. */
(()=>{
  'use strict';
  const NAV_ID='eq-unified-nav-20260920';
  const labels=[
    {key:'home',label:'首頁',image:'assets/bottom-nav/nav-home.png'},
    {key:'map',label:'地圖',image:'assets/bottom-nav/nav-map.png'},
    {key:'wardrobe',label:'衣櫥',image:'assets/bottom-nav/nav-wardrobe.png'},
    {key:'pet',label:'寵物',image:'assets/bottom-nav/nav-pet.png'},
    {key:'room',label:'小窩',image:'assets/bottom-nav/nav-room.png'},
    {key:'profile',label:'我的',image:'assets/bottom-nav/nav-profile.png'}
  ];

  const style=document.createElement('style');
  style.id=NAV_ID+'-style';
  style.textContent=`
    #${NAV_ID}{
      position:fixed;z-index:2147483000;left:50%;bottom:max(7px,env(safe-area-inset-bottom));
      transform:translateX(-50%);width:min(98vw,620px);
      display:grid;grid-template-columns:repeat(6,1fr);gap:clamp(3px,1vw,8px);
      padding:0 5px;background:transparent!important;pointer-events:none;
    }
    #${NAV_ID} .eqNavBtn{
      pointer-events:auto;appearance:none;border:0;background:transparent;padding:0;
      min-width:0;cursor:pointer;-webkit-tap-highlight-color:transparent;
      filter:drop-shadow(0 3px 3px rgba(82,57,73,.18));
    }
    #${NAV_ID} .eqNavArtwork{display:block;width:100%;height:auto;max-height:clamp(72px,18vw,112px);object-fit:contain;user-select:none;pointer-events:none}
    #${NAV_ID} .eqNavSticker{
      position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;
      height:clamp(66px,16vw,96px);border:3px solid var(--edge);border-radius:28% 28% 24px 24px;
      background:linear-gradient(180deg,rgba(255,255,255,.98) 0 42%,var(--tone) 43% 100%);
      box-shadow:inset 0 0 0 3px rgba(255,255,255,.8),0 2px 0 rgba(255,255,255,.95);
      overflow:hidden;
    }
    #${NAV_ID} .eqNavIcon{
      position:absolute;top:6%;left:50%;transform:translateX(-50%);
      display:grid;place-items:center;width:58%;height:50%;
      font:900 clamp(26px,7vw,42px)/1 system-ui,sans-serif;color:#59466d;
      text-shadow:0 2px 0 #fff,1px 0 0 #fff,-1px 0 0 #fff;
    }
    #${NAV_ID} .eqNavLabel{
      width:88%;margin-bottom:6%;padding:3px 0 4px;border-radius:999px;
      background:rgba(255,255,255,.88);border:2px solid rgba(255,255,255,.95);
      color:#34436c;font:900 clamp(12px,3.4vw,18px)/1.05 system-ui,"Noto Sans TC",sans-serif;
      letter-spacing:.04em;text-align:center;
    }
    #${NAV_ID} .eqNavBtn:active .eqNavArtwork{transform:translateY(2px) scale(.98)}
    #${NAV_ID} .eqNavBtn:focus-visible{outline:3px solid #6c8fd8;outline-offset:2px;border-radius:24px}
    @media(max-width:390px){
      #${NAV_ID}{gap:2px;padding:0 3px}
      #${NAV_ID} .eqNavSticker{height:64px;border-width:2px;border-radius:20px}
      #${NAV_ID} .eqNavLabel{font-size:11px;margin-bottom:4%}
      #${NAV_ID} .eqNavIcon{font-size:25px}
    }
  `;
  document.head.appendChild(style);

  function visible(el){
    if(!el || el.closest('#'+NAV_ID)) return false;
    const cs=getComputedStyle(el),r=el.getBoundingClientRect();
    return cs.display!=='none'&&cs.visibility!=='hidden'&&r.width>0&&r.height>0;
  }
  function clickExisting(label,key){
    const selectors=[
      '[data-c120="'+key+'"]','[data-nav="'+key+'"]','[data-page="'+key+'"]',
      '[data-screen="'+key+'"]','[data-target="'+key+'"]','#nav-'+key,'#'+key+'Btn'
    ];
    for(const s of selectors){
      const el=[...document.querySelectorAll(s)].find(visible);
      if(el){el.click();return true;}
    }
    const candidates=[...document.querySelectorAll('button,a,[role="button"]')].filter(visible);
    const exact=candidates.find(el=>(el.textContent||'').replace(/\s+/g,'').includes(label));
    if(exact){exact.click();return true;}
    if(key==='room' && typeof window.openRoom==='function'){window.openRoom();return true;}
    if(key==='home'){
      const home=document.querySelector('[data-companion120="home"]');
      if(home){home.classList.add('is-active');document.body.classList.add('companion120Locked');return true;}
    }
    return false;
  }
  function hideOldNavButtons(){
    const names=new Set(['首頁','地圖','衣櫥','寵物','我的']);
    document.querySelectorAll('button,a,[role="button"],[data-nav],[data-page],[data-screen],[data-target]').forEach(el=>{
      if(el.closest('#'+NAV_ID))return;
      const txt=(el.textContent||'').replace(/\s+/g,'');
      const key=el.getAttribute('data-nav')||el.getAttribute('data-page')||el.getAttribute('data-screen')||el.getAttribute('data-target')||'';
      const legacyKey=['home','map','wardrobe','pet','profile'].includes(key);
      const r=el.getBoundingClientRect();
      if((names.has(txt)||legacyKey) && r.bottom>innerHeight*.62){
        el.style.setProperty('display','none','important');
        el.setAttribute('data-eq-legacy-nav-hidden','1');
      }
    });
  }
  function mount(){
    if(document.getElementById(NAV_ID))return;
    const nav=document.createElement('nav');
    nav.id=NAV_ID;nav.setAttribute('aria-label','主要導覽');
    const renderButton=item=>{
      const b=document.createElement('button');
      b.className='eqNavBtn';b.type='button';b.setAttribute('aria-label',item.label);b.dataset.eqNavKey=item.key;
      b.innerHTML='<img class="eqNavArtwork" src="'+item.image+'" alt="" draggable="false">';
      b.addEventListener('click',()=>clickExisting(item.label,item.key));
      return b;
    };
    labels.forEach(item=>nav.appendChild(renderButton(item)));
    const repairSix=()=>{
      const keys=[...nav.querySelectorAll('.eqNavBtn')].map(b=>b.dataset.eqNavKey);
      labels.forEach((item,index)=>{
        if(keys.includes(item.key))return;
        const before=nav.querySelectorAll('.eqNavBtn')[index]||null;
        nav.insertBefore(renderButton(item),before);
      });
    };
    new MutationObserver(repairSix).observe(nav,{childList:true});
    document.body.appendChild(nav);
    hideOldNavButtons();
    new MutationObserver(hideOldNavButtons).observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
