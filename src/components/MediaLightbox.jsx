import {useEffect} from 'react';import {AnimatePresence,motion} from 'framer-motion';import {X,ChevronLeft,ChevronRight,ExternalLink} from 'lucide-react';
export default function MediaLightbox({list,index,setIndex}){const open=index!==null&&list[index];const n=list.length;
let tx=0;const go=d=>setIndex(i=>(i+d+n)%n);
useEffect(()=>{if(!open)return;const k=e=>{if(e.key==='Escape')setIndex(null);if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1);};window.addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{window.removeEventListener('keydown',k);document.body.style.overflow='';};},[open,n]);
const p=open?list[index]:null;
return(<AnimatePresence>{p&&<motion.div className="lb" role="dialog" aria-modal="true" aria-label={p.title} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setIndex(null)} onTouchStart={e=>{tx=e.touches[0].clientX}} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>60)go(d<0?1:-1)}}>
<button className="lb-x" aria-label="Close" onClick={()=>setIndex(null)}><X/></button>
<button className="lb-n l" aria-label="Previous" onClick={e=>{e.stopPropagation();go(-1)}}><ChevronLeft/></button>
<button className="lb-n r" aria-label="Next" onClick={e=>{e.stopPropagation();go(1)}}><ChevronRight/></button>
<motion.figure key={p.id} initial={{scale:.94,opacity:0}} animate={{scale:1,opacity:1}} onClick={e=>e.stopPropagation()}>
{p.type==='video'?<video src={p.src} poster={p.poster} controls autoPlay loop muted playsInline/>:<img src={p.src} alt={p.title}/>}
<figcaption><span className="cnt">{index+1}/{n}</span><b>{p.title}</b><span>{p.category}</span><a href={p.instagram} target="_blank" rel="noreferrer">View on Instagram <ExternalLink size={14}/></a></figcaption></motion.figure></motion.div>}</AnimatePresence>);}
