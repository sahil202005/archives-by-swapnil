import {Instagram,Menu,X,Sun,Moon} from 'lucide-react';import {useState,useEffect} from 'react';import {IG} from '../data/projects';
const links=['Home','Work','Services','About','Contact'];
export default function Navbar(){const[o,setO]=useState(false);const[th,setTh]=useState(()=>{try{return localStorage.getItem('theme')||'dark'}catch{return'dark'}});
useEffect(()=>{document.documentElement.dataset.theme=th;try{localStorage.setItem('theme',th)}catch{}},[th]);
return(<header className="nav"><a href="#home" className="logo">ARCHIVES<span> by Swapnil</span></a>
<nav className={o?'open':''} aria-label="Main">{links.map(l=><a key={l} href={`#${l==='Home'?'home':l.toLowerCase()}`} onClick={()=>setO(false)}>{l}</a>)}</nav>
<div className="nav-r"><button className="icon-b" aria-label="Toggle theme" onClick={()=>setTh(th==='dark'?'light':'dark')}>{th==='dark'?<Sun size={20}/>:<Moon size={20}/>}</button><a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20}/></a>
<a className="btn sm" href="#contact">Let's Work Together</a>
<button className="burger" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></div></header>);}
