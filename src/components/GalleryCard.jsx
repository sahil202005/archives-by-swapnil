import {useEffect,useRef,useState} from 'react';import {motion} from 'framer-motion';import {Image as Img,Play,Video,ArrowUpRight} from 'lucide-react';
export default function GalleryCard({p,onOpen}){const r=useRef(null);const[err,setErr]=useState(false);const[pe,setPe]=useState(false);const isV=p.type==='video'&&!err;
useEffect(()=>{const v=r.current;if(!v)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting)v.play().catch(()=>{});else v.pause();},{rootMargin:'150px'});io.observe(v);return()=>io.disconnect();},[isV]);
return(<motion.article className="card" style={{aspectRatio:p.ratio}} initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}} transition={{duration:.35}}>
<button className="card-b" onClick={()=>onOpen(p)} aria-label={`Open ${p.title}`}>
<div className="media">{isV?<video ref={r} src={p.src} poster={p.poster} muted loop playsInline preload="metadata" autoPlay onError={()=>setErr(true)}/>:
(pe?<div className="fallback">Media unavailable</div>:<img src={err?p.poster:p.src} alt={p.title} loading="lazy" onError={()=>setPe(true)}/>)}</div>
<span className="tag">{p.type==='video'?<Video size={12}/>:<Img size={12}/>}{p.label}</span>{p.type==='video'&&<span className="play"><Play size={14} fill="currentColor"/></span>}
<div className="info"><div><h3>{p.title}</h3><small>{p.category}</small></div><ArrowUpRight size={18}/></div></button></motion.article>);}
