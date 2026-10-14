import {useState,useMemo} from 'react';import {AnimatePresence} from 'framer-motion';import {Search} from 'lucide-react';import {categories,projects} from '../data/projects';import GalleryCard from './GalleryCard';import MediaLightbox from './MediaLightbox';
const STEP=12;
export default function Gallery(){const[c,setC]=useState('All Work');const[q,setQ]=useState('');const[t,setT]=useState('all');const[n,setN]=useState(STEP);const[i,setI]=useState(null);
const all=useMemo(()=>projects.filter(p=>(c==='All Work'||p.category===c)&&(t==='all'||p.type===t)&&(p.title+p.category).toLowerCase().includes(q.toLowerCase())),[c,q,t]);
const list=all.slice(0,n);const reset=f=>v=>{f(v);setN(STEP)};
return(<section id="work" className="sec"><h2>Selected Work</h2>
<div className="filters" role="tablist">{categories.map(k=><button key={k} role="tab" aria-selected={c===k} className={c===k?'on':''} onClick={()=>reset(setC)(k)}>{k}</button>)}</div>
<div className="tools"><label className="search"><Search size={16}/><input value={q} onChange={e=>reset(setQ)(e.target.value)} placeholder="Search work…" aria-label="Search work"/></label>
<div className="filters">{[['all','All'],['image','Photos'],['video','Videos']].map(([k,l])=><button key={k} className={t===k?'on':''} onClick={()=>reset(setT)(k)}>{l}</button>)}</div>
<span className="muted2">{all.length} items</span></div>
<div className="masonry"><AnimatePresence mode="popLayout">{list.map((p,k)=><GalleryCard key={p.id} p={p} onOpen={()=>setI(k)}/>)}</AnimatePresence></div>
{all.length===0&&<p>No projects match.</p>}
{n<all.length&&<div className="row" style={{justifyContent:'center'}}><button className="btn" onClick={()=>setN(n+STEP)}>Load more</button></div>}
<MediaLightbox list={list} index={i} setIndex={setI}/></section>);}
