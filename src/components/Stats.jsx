import {useEffect,useRef,useState} from 'react';import {useInView,useReducedMotion} from 'framer-motion';import {stats} from '../data/projects';
function Count({to}){const r=useRef(null);const v=useInView(r,{once:true,margin:'-60px'});const rm=useReducedMotion();const[n,setN]=useState(0);
useEffect(()=>{if(!v)return;if(rm){setN(to);return}let raf,t0;const step=t=>{t0??=t;const k=Math.min(1,(t-t0)/1800);setN(Math.round(to*(1-Math.pow(1-k,3))));if(k<1)raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step);return()=>cancelAnimationFrame(raf)},[v,to,rm]);
return<strong ref={r}>{n}+</strong>;}
export default function Stats(){return(<section className="stats" aria-label="Portfolio numbers">{stats.map(s=><div key={s.label}><Count to={s.value}/><span>{s.label}</span></div>)}</section>);}
