import {motion} from 'framer-motion';import {projects} from '../data/projects';
const f=(d)=>({animate:{y:[0,-12,0]},transition:{repeat:Infinity,duration:5+d,ease:'easeInOut'}});
export default function Hero(){const t=[projects[0],projects[1],projects[4]];
return(<section id="home" className="hero"><motion.span className="blob b1" {...f(0)}/><motion.span className="blob b2" {...f(1)}/>
<motion.div className="hero-t" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
<p className="eyebrow">Photographer · Video Editor · Content Creator</p><h1>Stories in Every Frame.</h1>
<p className="lead">Photography, films and creative content that make brands impossible to ignore.</p>
<div className="row"><a className="btn" href="#work">Explore My Work</a><a className="btn ghost" href="#contact">Book a Shoot</a></div></motion.div>
<div className="hero-m">{t.map((p,i)=><motion.img key={p.id} src={p.poster} alt={p.title} className={`hm hm${i}`} loading="eager" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.3+i*.15}}/>)}</div></section>);}
