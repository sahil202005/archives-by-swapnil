// Central config. Replace PLACEHOLDER entries with real media (direct MP4/WebM or /images, /videos files).
// Instagram URLs are only used as "view original" links, never as video sources.
export const IG='https://instagram.com/archivesbyswapnil';
export const WA='https://wa.me/917721946182';
export const waLink=(m='Hi Swapnil, I found your portfolio and would like to discuss a project.')=>`${WA}?text=${encodeURIComponent(m)}`;
export const categories=['All Work','Photography','Reels & Videos','Promotional Content','Brand Collaborations','Food & Restaurant Shoots'];
const V='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const img=(s,w,h)=>`https://picsum.photos/seed/${s}/${w}/${h}`;
// PLACEHOLDER projects — swap for real work. ratio = width/height.
const base=[
{id:1,title:'Golden Hour Portraits',category:'Photography',label:'Photography',type:'image',src:img('a1',800,1000),poster:img('a1',800,1000),instagram:IG,ratio:0.8,description:'Sample portrait set.',placeholder:true},
{id:2,title:'Flavour in Motion',category:'Reels & Videos',label:'Reel',type:'video',src:V,poster:img('a2',800,1000),instagram:IG,ratio:0.8,description:'Sample short-form reel.',placeholder:true},
{id:3,title:'Street Frames',category:'Photography',label:'Photography',type:'image',src:img('a3',1200,800),poster:img('a3',1200,800),instagram:IG,ratio:1.5,description:'Sample landscape photograph.',placeholder:true},
{id:4,title:'Brand Launch Teaser',category:'Promotional Content',label:'Brand Campaign',type:'video',src:V,poster:img('a4',1200,800),instagram:IG,ratio:1.5,description:'Sample promo cut.',placeholder:true},
{id:5,title:'The Plated Story',category:'Food & Restaurant Shoots',label:'Food Shoot',type:'image',src:img('a5',900,900),poster:img('a5',900,900),instagram:IG,ratio:1,description:'Sample food photograph.',placeholder:true},
{id:6,title:'Collab Diaries',category:'Brand Collaborations',label:'Collaboration',type:'image',src:img('a6',800,1100),poster:img('a6',800,1100),instagram:IG,ratio:0.73,description:'Sample collaboration shot.',placeholder:true},
{id:7,title:'Kitchen After Dark',category:'Food & Restaurant Shoots',label:'Film',type:'video',src:V,poster:img('a7',900,900),instagram:IG,ratio:1,description:'Sample restaurant film.',placeholder:true},
{id:8,title:'Quiet Corners',category:'Photography',label:'Photography',type:'image',src:img('a8',1200,800),poster:img('a8',1200,800),instagram:IG,ratio:1.5,description:'Sample landscape photograph.',placeholder:true}];

const cats=[['Photography','Photography'],['Reels & Videos','Reel'],['Promotional Content','Brand Campaign'],['Brand Collaborations','Collaboration'],['Food & Restaurant Shoots','Food Shoot']];
const rs=[0.8,1,1.5,0.73,1.2];
// More PLACEHOLDER samples — delete or replace with real work.
const extra=Array.from({length:16},(_,i)=>{const[category,label]=cats[i%5];const ratio=rs[(i*2)%5];const w=600,h=Math.round(w/ratio);const vid=label==='Reel';
return{id:9+i,title:`Sample ${label} ${i+1}`,category,label,type:vid?'video':'image',src:vid?V:img('b'+i,w,h),poster:img('b'+i,w,h),instagram:IG,ratio,description:'Placeholder sample.',placeholder:true};});
export const projects=[...base,...extra];

// Portfolio counters — PLACEHOLDER numbers, edit to your real totals. "+" is added automatically.
export const stats=[{label:'Reels',value:120},{label:'Short Films',value:10},{label:'Photographs',value:500},{label:'Brand Shoots',value:25}];
