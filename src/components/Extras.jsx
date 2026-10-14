import {useEffect,useState} from 'react';import {ArrowUp} from 'lucide-react';
export default function Extras(){const[p,setP]=useState(0);
useEffect(()=>{const f=()=>{const h=document.documentElement;setP(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight))};f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
return(<><div className="prog" style={{transform:`scaleX(${p})`}}/>{p>.15&&<button className="top" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><ArrowUp size={20}/></button>}</>);}
