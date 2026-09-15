/* ============================================================
   ICONS — simple line-icon set (no emoji), inline SVG, currentColor
============================================================ */
const ICON_PATHS = {
  home:'<path d="M3 11.5l9-7.5 9 7.5"/><path d="M5.5 10.2V19a1 1 0 0 0 1 1h4v-6.2h3v6.2h4a1 1 0 0 0 1-1v-8.8"/>',
  letterHeart:'<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="M3.4 7l8.6 5.8L20.6 7"/><path d="M12 15.6c-1.6-1.4-2.7-2.3-2.7-3.4 0-.9.7-1.6 1.6-1.6.5 0 .9.2 1.1.6.2-.3.6-.6 1.1-.6.9 0 1.6.7 1.6 1.6 0 1.1-1.1 2-2.7 3.4z" fill="currentColor" stroke="none"/>',
  gift:'<rect x="3.2" y="9" width="17.6" height="11.5" rx="1.4"/><path d="M3.2 9h17.6"/><path d="M12 9v11.5"/><path d="M12 9c-1.6-3-4.2-4.1-5.8-2.6C4.9 7.7 5.6 9 7.4 9z"/><path d="M12 9c1.6-3 4.2-4.1 5.8-2.6C19.1 7.7 18.4 9 16.6 9z"/>',
  wallet:'<rect x="3" y="6.2" width="18" height="12.6" rx="2.2"/><path d="M3 10.4h18"/><circle cx="16.6" cy="14.5" r="1.15" fill="currentColor" stroke="none"/>',
  plane:'<path d="M21.8 2.2L11 13"/><path d="M21.8 2.2l-6.6 19.6-3.9-8.7-8.7-3.9z"/>',
  mappin:'<path d="M12 21.2s-7.2-6.4-7.2-11.4a7.2 7.2 0 1 1 14.4 0c0 5-7.2 11.4-7.2 11.4z"/><circle cx="12" cy="9.8" r="2.6"/>',
  folderHeart:'<path d="M3 7.4a2 2 0 0 1 2-2h3.8l1.8 2H19a2 2 0 0 1 2 2v8.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 16.2c-1.5-1.3-2.5-2.1-2.5-3.2 0-.8.7-1.5 1.5-1.5.5 0 .8.2 1 .5.2-.3.5-.5 1-.5.8 0 1.5.7 1.5 1.5 0 1.1-1 1.9-2.5 3.2z" fill="currentColor" stroke="none"/>',
  mail:'<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="M3.4 7l8.6 5.8L20.6 7"/>',
  controller:'<rect x="2.3" y="8.2" width="19.4" height="9.2" rx="4.2"/><path d="M7 10.6v4M5 12.6h4"/><circle cx="15.8" cy="11.4" r="1" fill="currentColor" stroke="none"/><circle cx="18.2" cy="13.8" r="1" fill="currentColor" stroke="none"/>',
  chat:'<path d="M21 11.7a8.5 8.5 0 0 1-12.6 7.4L4 20.2l1.2-4A8.5 8.5 0 1 1 21 11.7z"/>',
  heartpin:'<path d="M12 20.6s-6.8-4.9-6.8-9.9a6.8 6.8 0 0 1 13.6 0c0 5-6.8 9.9-6.8 9.9z"/><path d="M12 13.6c-1.1-1-1.9-1.6-1.9-2.5 0-.6.5-1.1 1.1-1.1.4 0 .7.2.8.4.1-.2.4-.4.8-.4.6 0 1.1.5 1.1 1.1 0 .9-.8 1.5-1.9 2.5z" fill="currentColor" stroke="none"/>',
  archive:'<rect x="3" y="4.2" width="18" height="4.6" rx="1.1"/><path d="M4.6 8.8v9a2 2 0 0 0 2 2h10.8a2 2 0 0 0 2-2v-9"/><path d="M10 13h4"/>',
  star:'<path d="M12 2.6l2.6 6.9 7.2.3-5.7 4.6 2 7-6.1-4.1-6.1 4.1 2-7-5.7-4.6 7.2-.3z"/>',
  utensils:'<path d="M5 2.8v6.6a2 2 0 0 0 2 2v9.8"/><path d="M5 2.8v4M7 2.8v4M9 2.8v4"/><path d="M18 2.8c-1.8 0-3 2.6-3 5.2 0 2 .9 3.6 2 4v9.4"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  trash:'<path d="M4.5 7h15"/><path d="M6.5 7v12.2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7"/><path d="M9.5 7V4.8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V7"/>',
  image:'<rect x="3" y="4.2" width="18" height="15.6" rx="2"/><circle cx="8.6" cy="9.4" r="1.5" fill="currentColor" stroke="none"/><path d="M21 15.6l-5.2-5-4 4-1.8-1.8-5 5"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  send:'<path d="M21.8 2.2L11 13"/><path d="M21.8 2.2l-6.6 19.6-3.9-8.7-8.7-3.9z"/>',
  pen:'<path d="M11.4 19.6H21"/><path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L7.9 18.1l-4.3 1 1-4.3z"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  lock:'<rect x="5" y="10.8" width="14" height="9.4" rx="2.2"/><path d="M7.8 10.8V7.8a4.2 4.2 0 0 1 8.4 0v3"/>',
  lockOpen:'<rect x="5" y="10.8" width="14" height="9.4" rx="2.2"/><path d="M7.8 10.8V7.8a4.2 4.2 0 0 1 7.7-2.3"/>'
};
/* ============================================================
   ★ EDIT YOUR NAMES HERE ★ — this is the only place you need to
   change to show your real names everywhere instead of "Mine"/"Hers".
   (Internally the app still uses "Mine"/"Hers" as data keys, so your
   saved info stays safe — this only changes what's displayed.)
============================================================ */
const NAMES = {
  Mine: 'Jae',        // <-- change to your name
  Hers: 'Mai'    // <-- change to her name
};
function dispName(key){ return NAMES[key] || key; }

function icon(name,cls){
  const p=ICON_PATHS[name]||ICON_PATHS.star;
  return `<span class="ico ${cls||''}"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg></span>`;
}

/* ============================================================
   DECORATIVE SCENE — falling petals + hydrangea flower clusters
============================================================ */
function buildPetals(){
  const wrap=document.getElementById('petals');
  if(!wrap) return;
  const count=16;
  for(let i=0;i<count;i++){
    const p=document.createElement('div');
    p.className='petal';
    const size=8+Math.random()*10;
    const left=Math.random()*100;
    const duration=9+Math.random()*10;
    const delay=-(Math.random()*18);
    const sway=(Math.random()*70+20)*(Math.random()<0.5?-1:1);
    const swayDur=3+Math.random()*3;
    p.style.width=size+'px';
    p.style.height=size+'px';
    p.style.left=left+'%';
    p.style.setProperty('--sway',sway+'px');
    p.style.animationDuration=duration+'s, '+swayDur+'s';
    p.style.animationDelay=delay+'s, '+(delay*0.5)+'s';
    wrap.appendChild(p);
  }
}
// a single hydrangea "floret" — four small petal-ellipses around a tiny center
function floretSVG(cx,cy,scale,hue){
  const c1=hue==='light'?'#ffe3ee':'#ffc7de';
  const c2=hue==='light'?'#ffd0e2':'#ff9dc4';
  const petal=(rot)=>`<ellipse cx="0" cy="-3.6" rx="2.6" ry="3.6" fill="${c1}" stroke="${c2}" stroke-width=".3" transform="rotate(${rot})"/>`;
  return `<g transform="translate(${cx} ${cy}) scale(${scale})">
    ${petal(0)}${petal(90)}${petal(180)}${petal(270)}
    <circle cx="0" cy="0" r="1.1" fill="#ffb6d3"/>
  </g>`;
}
// a cluster of florets arranged in a dome, like a real hydrangea bloom
function hydrangeaCluster(){
  const florets=[];
  const positions=[
    [0,0,1,'deep'],[10,-6,.85,'light'],[-10,-4,.85,'deep'],[8,8,.8,'light'],[-9,9,.85,'deep'],
    [0,-13,.75,'light'],[15,4,.7,'deep'],[-15,3,.7,'light'],[3,15,.7,'deep'],[-4,-14,.65,'light'],
    [16,-9,.6,'light'],[-16,-8,.6,'deep']
  ];
  positions.forEach(([x,y,s,h])=>florets.push(floretSVG(x,y,s,h)));
  return florets.join('');
}
function buildHydrangeas(){
  const bl=document.getElementById('hydrangeaBL');
  const tr=document.getElementById('hydrangeaTR');
  const svg=(vb)=>`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(35 35)">${hydrangeaCluster()}</g>
      <g transform="translate(60 60) scale(.6)">${hydrangeaCluster()}</g>
      <g transform="translate(10 65) scale(.5)">${hydrangeaCluster()}</g>
    </svg>`;
  if(bl) bl.innerHTML=svg('-20 -20 120 120');
  if(tr) tr.innerHTML=svg('-20 -20 120 120');
}
document.addEventListener('DOMContentLoaded',()=>{ buildPetals(); buildHydrangeas(); });

/* ============================================================
   FIREBASE — real backend so both of you sync in real time.
   Config comes from firebase-config.js (loaded before this file).
============================================================ */
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const dbFs = firebase.firestore();
const storage = firebase.storage();

let root, saveTimer;
let lastPayload = null;
let unsubscribeSnapshot = null;

function uid(){return 'id'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);}

function personShape(){
  return {
    fields:{
      name:{text:'',media:[]}, personality:{text:'',media:[]},
      posTraits:{text:'',media:[]}, negTraits:{text:'',media:[]},
      likes:{text:'',media:[]}, dislikes:{text:'',media:[]},
      hobbies:{text:'',media:[]}, comforts:{text:'',media:[]}
    },
    favorites:[
      {id:uid(),label:'Color',value:'',media:[]},
      {id:uid(),label:'Songs',value:'',media:[]},
      {id:uid(),label:'Anime',value:'',media:[]},
      {id:uid(),label:'Manga',value:'',media:[]},
      {id:uid(),label:'Manhwa',value:'',media:[]},
      {id:uid(),label:'Food — Main Dish',value:'',media:[]},
      {id:uid(),label:'Food — Sides/Desserts',value:'',media:[]},
      {id:uid(),label:'Food — Drinks',value:'',media:[]},
      {id:uid(),label:'Animal',value:'',media:[]},
      {id:uid(),label:'Place',value:'',media:[]},
      {id:uid(),label:'Flower',value:'',media:[]},
      {id:uid(),label:'Movie / Show',value:'',media:[]},
      {id:uid(),label:'Season',value:'',media:[]},
      {id:uid(),label:'Comfort Rewatch',value:'',media:[]},
      {id:uid(),label:'Scent / Perfume',value:'',media:[]}
    ]
  };
}
function defaultRoot(){
  return {
    pin:null,
    info:{ Mine:personShape(), Hers:personShape() },
    collections:{ Mine:[], Hers:[] },
    money:[
      {id:uid(),name:'Hobbies',notes:'',media:[]},
      {id:uid(),name:'Games',notes:'',media:[]}
    ],
    wantToGo:{ Mine:[], Hers:[] },
    traveled:[],
    memories:{
      games:[{id:uid(),name:'Valorant',notes:'',media:[]}],
      calls:[
        {id:uid(),name:'Discord',notes:'',media:[]},
        {id:uid(),name:'Messenger',notes:'',media:[]},
        {id:uid(),name:'Instagram',notes:'',media:[]}
      ],
      irlGeneral:[
        {id:uid(),name:'Arcades',notes:'',media:[]},
        {id:uid(),name:'Restos',notes:'',media:[]},
        {id:uid(),name:'House / Hotels',notes:'',media:[]},
        {id:uid(),name:'Cooking Together',notes:'',media:[]},
        {id:uid(),name:'Travel',notes:'',media:[]},
        {id:uid(),name:'Photobooth',notes:'',media:[]},
        {id:uid(),name:'Outfits',notes:'',media:[]}
      ],
      momento:[],
      funny:{ games:[], online:[], irl:[] },
      firsts:[
        {id:uid(),name:'First Meetup',notes:'',media:[]}
      ],
      sharedFoods:[]
    },
    letters:[]
  };
}

function flashSaved(){
  const f=document.getElementById('savedFlag');
  f.classList.add('show'); setTimeout(()=>f.classList.remove('show'),900);
}
function scheduleSave(){
  clearTimeout(saveTimer);
  saveTimer=setTimeout(async ()=>{
    const payload=JSON.stringify(root);
    lastPayload=payload; // mark as "our own change" so the snapshot echo doesn't re-render and steal focus
    try{
      await dbFs.collection('vault').doc('root').set({payload, updatedAt:Date.now()});
      flashSaved();
    }catch(e){
      console.error(e);
      alert('Could not sync that change — check your internet connection. ('+e.message+')');
    }
  },600);
}

function startApp(){
  buildNav();
  if(unsubscribeSnapshot) unsubscribeSnapshot();
  const docRef=dbFs.collection('vault').doc('root');
  unsubscribeSnapshot = docRef.onSnapshot(snap=>{
    if(!snap.exists){
      root=defaultRoot();
      lastPayload=JSON.stringify(root);
      docRef.set({payload:lastPayload, updatedAt:Date.now()});
      route(currentRoute);
      return;
    }
    const payload=snap.data().payload;
    if(payload===lastPayload) return; // our own write echoing back — nothing changed for us
    lastPayload=payload;
    try{ root=JSON.parse(payload); }catch(e){ root=defaultRoot(); }
    if(!root.letters) root.letters=[];
    root.letters.forEach(l=>{ if(!l.to) l.to = (l.from==='Mine'?'Hers':'Mine'); });
    route(currentRoute);
  }, err=>{
    console.error(err);
    alert('Sync error: '+err.message);
  });
}

function stopApp(){
  if(unsubscribeSnapshot){ unsubscribeSnapshot(); unsubscribeSnapshot=null; }
}

function doLogin(){
  const email=document.getElementById('loginEmail').value.trim();
  const pass=document.getElementById('loginPassword').value;
  const errBox=document.getElementById('loginError');
  errBox.textContent='';
  if(!email || !pass){ errBox.textContent='enter both email and password'; return; }
  auth.signInWithEmailAndPassword(email,pass).catch(err=>{
    errBox.textContent=err.message;
  });
}

/* ============================================================
   DOM HELPERS
============================================================ */
function el(tag,cls,html){const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e;}

function mediaThumb(item, mediaArr, idx, onDelete){
  const t=el('div','polaroid');
  const frame=el('div','frame');
  const isVideo=(item.type||'').startsWith('video');
  if(isVideo){
    const v=el('video'); v.src=item.url; v.muted=true;
    frame.appendChild(v);
  } else {
    const im=el('img'); im.src=item.url;
    frame.appendChild(im);
  }
  frame.onclick=()=>openLightbox(item.url, isVideo?'video':'img');
  t.appendChild(frame);
  const del=el('button','del',icon('trash'));
  del.onclick=(e)=>{
    e.stopPropagation();
    mediaArr.splice(idx,1);
    if(item.path){ storage.ref().child(item.path).delete().catch(()=>{}); }
    onDelete();
  };
  t.appendChild(del);
  return t;
}
function openLightbox(url,type){
  const lb=document.getElementById('lightbox');
  const inner=document.getElementById('lightboxInner');
  inner.innerHTML='';
  const frame=el('div','frame2');
  if(type==='video'){ const v=el('video'); v.src=url; v.controls=true; v.autoplay=true; frame.appendChild(v); }
  else { const im=el('img'); im.src=url; frame.appendChild(im); }
  inner.appendChild(frame);
  lb.classList.add('open');
}
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('lightbox').addEventListener('click',(e)=>{
    if(e.target.id==='lightbox'||e.target.closest('.close')){
      document.getElementById('lightbox').classList.remove('open');
      document.getElementById('lightboxInner').innerHTML='';
    }
  });
  document.getElementById('letterOverlay').addEventListener('click',(e)=>{
    if(e.target.id==='letterOverlay'){ closeLetterView(); }
  });
  document.querySelector('#lightbox .close').innerHTML=icon('close');
  document.getElementById('brandIcon').innerHTML=icon('letterHeart');
  document.getElementById('savedFlag').innerHTML=icon('star')+'saved';
  document.getElementById('loginIcon').innerHTML=icon('lock');
  document.getElementById('loginBtn').innerHTML=icon('lockOpen')+'sign in';
  document.getElementById('logoutBtn').innerHTML=icon('close')+'log out';

  document.getElementById('loginBtn').onclick=doLogin;
  document.getElementById('loginPassword').onkeydown=(e)=>{ if(e.key==='Enter') doLogin(); };
  document.getElementById('logoutBtn').onclick=()=>{ auth.signOut(); };

  document.getElementById('menuToggle').innerHTML=icon('menu');
  document.getElementById('menuToggle').onclick=()=>{
    document.getElementById('sidebar').classList.toggle('open');
  };

  auth.onAuthStateChanged(user=>{
    if(user){
      document.getElementById('loginScreen').style.display='none';
      document.getElementById('appWrap').style.display='';
      document.getElementById('userTag').textContent=user.email;
      startApp();
    } else {
      stopApp();
      document.getElementById('loginScreen').style.display='';
      document.getElementById('appWrap').style.display='none';
      document.getElementById('loginPassword').value='';
    }
  });
});

function renderGallery(container, mediaArr, rerenderFn){
  const wrap=el('div','gallery');
  mediaArr.forEach((item,idx)=>{
    wrap.appendChild(mediaThumb(item,mediaArr,idx,()=>{ scheduleSave(); rerenderFn(); }));
  });
  const add=el('label','addmedia', icon('image')+'<span>add</span>');
  const input=el('input'); input.type='file'; input.accept='image/*,video/*'; input.multiple=true;
  input.onchange=async ()=>{
    const files=[...input.files];
    if(!files.length) return;
    add.classList.add('uploading');
    const labelSpan=add.querySelector('span'); if(labelSpan) labelSpan.textContent='uploading...';
    for(const f of files){
      try{
        const mediaId=uid();
        const path='media/'+mediaId+'-'+encodeURIComponent(f.name||'file');
        const ref=storage.ref().child(path);
        await ref.put(f);
        const url=await ref.getDownloadURL();
        mediaArr.push({id:mediaId, url, path, type:f.type||'image/*', name:f.name});
      }catch(err){
        alert('Upload failed for '+f.name+': '+err.message);
      }
    }
    scheduleSave(); rerenderFn();
  };
  add.appendChild(input);
  wrap.appendChild(add);
  container.appendChild(wrap);
}

function fieldCard(container, label, fieldObj, rerenderFn, placeholder, iconName){
  const card=el('div','card');
  card.appendChild(el('h3',null, icon(iconName||'star')+label));
  const ta=el('textarea'); ta.placeholder=placeholder||`write about ${label.toLowerCase()}...`;
  ta.value=fieldObj.text||'';
  ta.oninput=()=>{ fieldObj.text=ta.value; scheduleSave(); };
  card.appendChild(ta);
  renderGallery(card, fieldObj.media, rerenderFn);
  container.appendChild(card);
}

function favoritesGrid(container, favArr, rerenderFn){
  const wrap=el('div');
  const grid=el('div','favgrid');
  favArr.forEach((fav,idx)=>{
    const c=el('div','favcard');
    const head=el('div','favlabel');
    const nameSpan=el('span',null,fav.label);
    head.appendChild(nameSpan);
    const rm=el('button','rm', icon('close')+'remove');
    rm.onclick=()=>{ favArr.splice(idx,1); scheduleSave(); rerenderFn(); };
    head.appendChild(rm);
    c.appendChild(head);
    const inp=el('input'); inp.type='text'; inp.placeholder='...'; inp.value=fav.value||'';
    inp.oninput=()=>{ fav.value=inp.value; scheduleSave(); };
    c.appendChild(inp);
    renderGallery(c, fav.media, rerenderFn);
    grid.appendChild(c);
  });
  wrap.appendChild(grid);
  const addBtn=el('button','addfavbtn', icon('plus')+'add favorite category');
  addBtn.onclick=()=>{
    const label=prompt('New favorite category name:');
    if(label && label.trim()){
      favArr.push({id:uid(),label:label.trim(),value:'',media:[]});
      scheduleSave(); rerenderFn();
    }
  };
  wrap.appendChild(addBtn);
  container.appendChild(wrap);
}

function repeatableList(container, arr, opts, rerenderFn){
  opts = opts||{};
  if(arr.length===0){
    container.appendChild(el('p','emptynote','nothing here yet — start adding your memories ♡'));
  }
  arr.forEach((item,idx)=>{
    const box=el('div','listitem');
    const top=el('div','itop');
    const nameInp=el('input'); nameInp.type='text'; nameInp.placeholder=opts.itemPlaceholder||'name...'; nameInp.value=item.name||'';
    nameInp.oninput=()=>{ item.name=nameInp.value; scheduleSave(); };
    top.appendChild(nameInp);
    const del=el('button','iconbtn', icon('trash'));
    del.onclick=()=>{ arr.splice(idx,1); scheduleSave(); rerenderFn(); };
    top.appendChild(del);
    box.appendChild(top);
    const ta=el('textarea'); ta.placeholder='notes / memories...'; ta.value=item.notes||'';
    ta.oninput=()=>{ item.notes=ta.value; scheduleSave(); };
    box.appendChild(ta);
    renderGallery(box, item.media, rerenderFn);
    container.appendChild(box);
  });
  const addBtn=el('button','addbtn '+(opts.silver?'silver':''), icon('plus')+(opts.addLabel||'add'));
  addBtn.onclick=()=>{
    arr.push({id:uid(),name:'',notes:'',media:[]});
    scheduleSave(); rerenderFn();
  };
  container.appendChild(addBtn);
}

/* ============================================================
   NAV
============================================================ */
const NAV=[
  {id:'home', label:'Home', icon:'home'},
  {id:'info', label:'Information Vault', icon:'letterHeart'},
  {id:'letters', label:'Letters / Inbox', icon:'mail'},
  {id:'collections', label:'Our Collections', icon:'gift'},
  {id:'money', label:'Where Our Money Goes', icon:'wallet'},
  {id:'wantToGo', label:'Places We Want To Go', icon:'plane'},
  {id:'traveled', label:'Places Traveled', icon:'mappin'},
  {id:'memories', label:'Memories', icon:'folderHeart', sub:[
      {id:'m_games', label:'Games'},
      {id:'m_calls', label:'Calls (Online)'},
      {id:'m_irl', label:'IRL Dates'},
      {id:'m_momento', label:'Memento Vault'},
      {id:'m_funny', label:'Funny Moments'},
      {id:'m_firsts', label:'All Firsts'},
      {id:'m_foods', label:'Shared Foods'}
  ]}
];
let currentRoute='home';
let travelUnlocked=false;
const UI={ infoWho:'Mine', collectionsWho:'Mine', wantToGoWho:'Mine', funnySub:'games', composeFrom:'Mine', draftMedia:[] };

function buildNav(){
  const nav=document.getElementById('mainnav');
  nav.innerHTML='';
  NAV.forEach(item=>{
    const a=el('div','navtab'); a.id='nav_'+item.id;
    a.innerHTML=`${icon(item.icon)}<span>${item.label}</span>`;
    a.onclick=()=>{
      if(item.sub){
        const sl=document.getElementById('sub_'+item.id);
        sl.classList.toggle('open');
        route(item.sub[0].id);
      } else { route(item.id); }
      if(window.innerWidth<=820) document.getElementById('sidebar').classList.remove('open');
    };
    nav.appendChild(a);
    if(item.sub){
      const sl=el('div','sublist'); sl.id='sub_'+item.id;
      item.sub.forEach(s=>{
        const sa=el('a',null,s.label); sa.id='nav_'+s.id;
        sa.onclick=(e)=>{ e.stopPropagation(); route(s.id); if(window.innerWidth<=820) document.getElementById('sidebar').classList.remove('open'); };
        sl.appendChild(sa);
      });
      nav.appendChild(sl);
    }
  });
}
function markActive(id){
  document.querySelectorAll('.navtab, .sublist a').forEach(a=>a.classList.remove('active'));
  const direct=document.getElementById('nav_'+id);
  if(direct) direct.classList.add('active');
  NAV.forEach(item=>{
    if(item.sub && item.sub.some(s=>s.id===id)){
      document.getElementById('nav_'+item.id).classList.add('active');
      document.getElementById('sub_'+item.id).classList.add('open');
    }
  });
}
function route(id){
  currentRoute=id;
  markActive(id);
  const main=document.getElementById('main');
  main.innerHTML='';
  const page=el('div','fadein');
  main.appendChild(page);
  RENDERERS[id](page);
}

/* ============================================================
   PAGE RENDERERS
============================================================ */
const RENDERERS={
  home:(page)=>{
    const intro=el('div','introcard');
    intro.innerHTML=`<h2>welcome back, ${dispName('Mine')} & ${dispName('Hers')} ♡</h2><p>a little home for everything the two of you are building together.</p>`;
    page.appendChild(intro);
    const grid=el('div','homegrid');
    const cards=[
      {ic:'letterHeart',t:'Information Vault',d:'names, personalities, favorites',go:'info'},
      {ic:'mail',t:'Letters / Inbox',d:'write each other little letters',go:'letters'},
      {ic:'gift',t:'Our Collections',d:'the things you both collect',go:'collections'},
      {ic:'wallet',t:'Where Our Money Goes',d:'hobbies, games, & more',go:'money'},
      {ic:'plane',t:'Places We Want To Go',d:'wishlist & plans',go:'wantToGo'},
      {ic:'mappin',t:'Places Traveled',d:'locked memories',go:'traveled'},
      {ic:'folderHeart',t:'Memories',d:'games, calls, dates, firsts...',go:'m_games'}
    ];
    cards.forEach(c=>{
      const hc=el('div','homecard');
      hc.innerHTML=`<div class="hic">${icon(c.ic)}</div><h4>${c.t}</h4><p>${c.d}</p>`;
      hc.onclick=()=>route(c.go);
      grid.appendChild(hc);
    });
    page.appendChild(grid);
  },

  info:(page)=>{
    page.appendChild(head('Information Vault','everything about the two of you, side by side.','letterHeart'));
    let who = UI.infoWho;
    const pills=pillTabs(who, (w)=>{ UI.infoWho=w; route('info'); });
    page.appendChild(pills);
    const person=root.info[who];
    const rerender=()=>route('info');

    const fieldDefs=[
      ['name','Name','star'],['personality','Personality','star'],
      ['posTraits','Positive Traits','star'],['negTraits','Negative Traits','star'],
      ['likes','Likes','heartpin'],['dislikes','Dislikes','heartpin'],
      ['hobbies','Hobbies','controller'],['comforts','Comforts','heartpin']
    ];
    fieldDefs.forEach(([k,label,ic])=>{
      fieldCard(page, label, person.fields[k], rerender, null, ic);
    });

    page.appendChild(el('hr','divider'));
    page.appendChild(el('h3',null, icon('star')+' All Favorites'));
    favoritesGrid(page, person.favorites, rerender);
  },

  letters:(page)=>{ renderLetters(page); },

  collections:(page)=>{
    page.appendChild(head('Our Collections','the things you each love to gather.','gift'));
    let who=UI.collectionsWho;
    page.appendChild(pillTabs(who,(w)=>{UI.collectionsWho=w; route('collections');}));
    repeatableList(page, root.collections[who], {addLabel:'add item', itemPlaceholder:'collection item...'}, ()=>route('collections'));
  },

  money:(page)=>{
    page.appendChild(head('Where Our Money Goes','hobbies, games, and everything else you spend on together.','wallet'));
    repeatableList(page, root.money, {addLabel:'add category', itemPlaceholder:'e.g. Hobbies, Games...'}, ()=>route('money'));
  },

  wantToGo:(page)=>{
    page.appendChild(head('Places We Want To Go','the wishlist & the plans.','plane'));
    let who=UI.wantToGoWho;
    page.appendChild(pillTabs(who,(w)=>{UI.wantToGoWho=w; route('wantToGo');}));
    repeatableList(page, root.wantToGo[who], {addLabel:'add place', itemPlaceholder:'place name...'}, ()=>route('wantToGo'));
  },

  traveled:(page)=>{
    if(!root.pin){ page.appendChild(lockScreen('setup')); return; }
    if(!travelUnlocked){ page.appendChild(lockScreen('enter')); return; }
    page.appendChild(head('Places / Countries Traveled','unlocked — your travel memories together.','lockOpen'));
    repeatableList(page, root.traveled, {addLabel:'add place', itemPlaceholder:'place / country...'}, ()=>route('traveled'));
    const relock=el('button','tinylink','lock this section again');
    relock.style.display='block';
    relock.onclick=()=>{ travelUnlocked=false; route('traveled'); };
    page.appendChild(relock);
  },

  m_games:(page)=>{ memPage(page,'Games','games',{addLabel:'add game'},'controller'); },
  m_calls:(page)=>{ memPage(page,'Calls (Online)','calls',{addLabel:'add platform'},'chat'); },
  m_irl:(page)=>{ memPage(page,'IRL Dates','irlGeneral',{addLabel:'add category'},'heartpin'); },
  m_momento:(page)=>{ memPage(page,'Memento Vault','momento',{addLabel:'add memento'},'archive'); },
  m_firsts:(page)=>{ memPage(page,'All Firsts','firsts',{addLabel:'add a first'},'star'); },
  m_foods:(page)=>{ memPage(page,'Shared Foods','sharedFoods',{addLabel:'add food memory'},'utensils'); },

  m_funny:(page)=>{
    page.appendChild(head('Funny Moments','the bits you\'ll be laughing about forever.','star'));
    let sub=UI.funnySub;
    const tabs=el('div','subtabs');
    [['games','Games','controller'],['online','Online','chat'],['irl','IRL','heartpin']].forEach(([k,l,ic])=>{
      const b=el('button',sub===k?'active':'', icon(ic)+l);
      b.onclick=()=>{ UI.funnySub=k; route('m_funny'); };
      tabs.appendChild(b);
    });
    page.appendChild(tabs);
    repeatableList(page, root.memories.funny[sub], {addLabel:'add funny moment', itemPlaceholder:'what happened...'}, ()=>route('m_funny'));
  }
};

function memPage(page,title,key,opts,ic){
  page.appendChild(head(title,'',ic));
  repeatableList(page, root.memories[key], Object.assign({itemPlaceholder:'name...'},opts), ()=>route(currentRoute));
}

function head(title,sub,ic){
  const h=el('div','pagehead');
  h.innerHTML=`<div class="pico">${icon(ic||'star')}</div><div><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}</div>`;
  return h;
}
function pillTabs(active,onChange,labelA,labelB){
  labelA=labelA||'Mine'; labelB=labelB||'Hers';
  const wrap=el('div','pilltabs');
  const mine=el('button', 'mine'+(active===labelA?' active':''), dispName(labelA));
  const hers=el('button', 'hers'+(active===labelB?' active':''), dispName(labelB));
  mine.onclick=()=>onChange(labelA);
  hers.onclick=()=>onChange(labelB);
  wrap.appendChild(mine); wrap.appendChild(hers);
  return wrap;
}
function lockScreen(mode){
  const wrap=el('div','lockwrap');
  if(mode==='setup'){
    wrap.innerHTML=`<div class="lic">${icon('lock')}</div><h3>Set a PIN for this section</h3>
      <p style="color:var(--ink-light);font-size:13px;">just a fun little lock between you two — not real security.</p>`;
    const inp=el('input'); inp.maxLength=8; inp.placeholder='••••'; inp.type='password';
    wrap.appendChild(inp);
    const btn=el('button','addbtn', icon('lockOpen')+'set pin & continue');
    btn.onclick=()=>{
      if(inp.value.trim().length<2){ alert('pick at least 2 characters'); return; }
      root.pin=inp.value.trim(); scheduleSave();
      travelUnlocked=true;
      route('traveled');
    };
    wrap.appendChild(btn);
    return wrap;
  } else {
    wrap.innerHTML=`<div class="lic">${icon('lock')}</div><h3>Enter your PIN</h3>`;
    const inp=el('input'); inp.maxLength=8; inp.placeholder='••••'; inp.type='password';
    wrap.appendChild(inp);
    const btn=el('button','addbtn', icon('lockOpen')+'unlock');
    const tryUnlock=()=>{
      if(inp.value.trim()===root.pin){ travelUnlocked=true; route('traveled'); }
      else { alert('wrong pin'); }
    };
    btn.onclick=tryUnlock;
    inp.onkeydown=(e)=>{ if(e.key==='Enter') tryUnlock(); };
    wrap.appendChild(btn);
    const forgot=el('button','tinylink','forgot pin? reset section');
    forgot.onclick=()=>{
      if(confirm('This will remove the PIN (your travel entries stay safe). Continue?')){
        root.pin=null; scheduleSave(); route('traveled');
      }
    };
    wrap.appendChild(forgot);
    return wrap;
  }
}

/* ============================================================
   LETTERS / INBOX
============================================================ */
function other(who){ return who==='Mine' ? 'Hers' : 'Mine'; }

function renderLetters(page){
  page.appendChild(head('Letters / Inbox','write one, and it lands straight in their inbox — not yours.','mail'));

  // compose box
  const compose=el('div','composebox');
  compose.appendChild(el('h3',null, icon('pen')+' write a letter'));
  compose.appendChild(el('p',null,'<span style="font-size:12.5px;color:var(--ink-light);">who\'s writing?</span>'));
  const pills=pillTabs(UI.composeFrom,(w)=>{ UI.composeFrom=w; route('letters'); });
  compose.appendChild(pills);
  compose.appendChild(el('p',null,`<span style="font-size:12.5px;color:var(--pink-deep);font-weight:700;">→ this will land in ${dispName(other(UI.composeFrom))}'s inbox</span>`));

  const row=el('div','row');
  const subjectInp=el('input'); subjectInp.type='text'; subjectInp.placeholder='subject...';
  subjectInp.value=UI.draftSubject||'';
  subjectInp.oninput=()=>{ UI.draftSubject=subjectInp.value; };
  row.appendChild(subjectInp);
  compose.appendChild(row);

  const bodyTa=el('textarea'); bodyTa.placeholder='write what\'s on your heart...';
  bodyTa.value=UI.draftBody||'';
  bodyTa.oninput=()=>{ UI.draftBody=bodyTa.value; };
  compose.appendChild(bodyTa);

  const galleryWrap=el('div');
  compose.appendChild(galleryWrap);
  function rerenderDraftGallery(){
    galleryWrap.innerHTML='';
    renderGallery(galleryWrap, UI.draftMedia, rerenderDraftGallery);
  }
  rerenderDraftGallery();

  const sendBtn=el('button','addbtn', icon('send')+'send to '+dispName(other(UI.composeFrom)));
  sendBtn.style.marginTop='12px';
  sendBtn.onclick=()=>{
    if(!subjectInp.value.trim() && !bodyTa.value.trim()){ alert('write a little something first ♡'); return; }
    root.letters.unshift({
      id:uid(), from: UI.composeFrom, to: other(UI.composeFrom),
      subject: subjectInp.value.trim() || '(no subject)',
      body: bodyTa.value,
      media: UI.draftMedia,
      date: new Date().toISOString(),
      read:false
    });
    UI.draftMedia=[]; UI.draftSubject=''; UI.draftBody='';
    UI.lettersView = other(UI.composeFrom); // jump to the recipient's inbox so you can see it land
    scheduleSave();
    route('letters');
  };
  compose.appendChild(sendBtn);
  page.appendChild(compose);

  page.appendChild(el('hr','divider'));

  // which inbox are we looking at
  const view = UI.lettersView || 'Mine';
  page.appendChild(el('h3',null, icon('mail')+` ${dispName(view)}'s Inbox`));
  const inboxPills = pillTabs(view, (w)=>{ UI.lettersView=w; route('letters'); }, 'Mine', 'Hers');
  page.appendChild(inboxPills);

  const inboxLetters = root.letters.filter(l => l.to === view);

  if(inboxLetters.length===0){
    page.appendChild(el('p','emptynote', dispName(view)+' has no letters yet ♡'));
  }
  inboxLetters.forEach(letter=>{
    const row=el('div','envelope'+(letter.read?'':' unread')+(letter.from==='Hers'?' fromHers':''));
    if(!letter.read) row.appendChild(el('span','dot'));
    const eico=el('div','eico', icon('mail'));
    row.appendChild(eico);
    const body=el('div','ebody');
    body.appendChild(el('div','esubject', escapeHtml(letter.subject)));
    body.appendChild(el('div','epreview', escapeHtml((letter.body||'').slice(0,60))));
    row.appendChild(body);
    const meta=el('div','emeta');
    meta.appendChild(el('span','efrom','From '+dispName(letter.from)));
    meta.appendChild(el('span','edate', formatDate(letter.date)));
    row.appendChild(meta);
    row.onclick=()=>openLetterView(letter, page);
    page.appendChild(row);
  });
}
function escapeHtml(s){
  return (s||'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function formatDate(iso){
  try{
    const d=new Date(iso);
    return d.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
  }catch(e){ return ''; }
}
function openLetterView(letter, page){
  letter.read=true; scheduleSave();
  const overlay=document.getElementById('letterOverlay');
  const inner=document.getElementById('letterInner');
  inner.innerHTML='';
  const paper=el('div','letterpaper');
  const actions=el('div','lp-actions');
  const delBtn=el('button',null, icon('trash'));
  delBtn.onclick=()=>{
    if(confirm('Delete this letter?')){
      const idx=root.letters.findIndex(l=>l.id===letter.id);
      if(idx>-1) root.letters.splice(idx,1);
      scheduleSave();
      closeLetterView();
      route('letters');
    }
  };
  const closeBtn=el('button',null, icon('close'));
  closeBtn.onclick=()=>{ closeLetterView(); route('letters'); };
  actions.appendChild(delBtn); actions.appendChild(closeBtn);
  paper.appendChild(actions);

  const top=el('div','lp-top');
  top.appendChild(el('span','lp-from','From '+dispName(letter.from)));
  paper.appendChild(top);
  paper.appendChild(el('h2',null, escapeHtml(letter.subject)));
  paper.appendChild(el('div','lp-date', formatDate(letter.date)));
  paper.appendChild(el('div','lp-body', escapeHtml(letter.body)));
  if(letter.media && letter.media.length){
    const gwrap=el('div','gallery');
    letter.media.forEach((item,idx)=>{
      gwrap.appendChild(mediaThumb(item, letter.media, idx, ()=>{ scheduleSave(); openLetterView(letter,page); }));
    });
    paper.appendChild(gwrap);
  }
  inner.appendChild(paper);
  overlay.classList.add('open');
}
function closeLetterView(){
  document.getElementById('letterOverlay').classList.remove('open');
  document.getElementById('letterInner').innerHTML='';
}


