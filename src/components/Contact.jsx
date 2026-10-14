import {useState} from 'react';import {Instagram,MessageCircle} from 'lucide-react';import {IG,waLink} from '../data/projects';
const ENDPOINT=import.meta.env.VITE_FORM_ENDPOINT; // e.g. https://formspree.io/f/xxxx
export default function Contact(){const[st,setSt]=useState(null);
const submit=async e=>{e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f));
if(!ENDPOINT){window.open(waLink(`Hi Swapnil, I'm ${d.name} (${d.email}). Service: ${d.service}. ${d.details}`),'_blank');setSt({m:'No form service configured — opened WhatsApp with your details instead.'});return;}
setSt({m:'Sending…'});try{const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;f.reset();setSt({m:'Thanks! Your message was sent.'});}catch{setSt({m:'Sending failed. Please use WhatsApp instead.',err:1});}};
return(<section id="contact" className="sec contact"><h2>Have a story to tell? Let's create it.</h2>
<form onSubmit={submit}><input name="name" placeholder="Name" required/><input name="email" type="email" placeholder="Email" required/>
<select name="service" required defaultValue=""><option value="" disabled>Service required</option>{['Photography','Videography','Promotional Content','Reels','Video Editing','Food Shoot','Brand Collaboration'].map(s=><option key={s}>{s}</option>)}</select>
<textarea name="details" rows="4" placeholder="Project details" required/><button className="btn">Send</button>{st&&<p role="status" className={st.err?'err':''}>{st.m}</p>}</form>
<div className="row"><a className="btn" href={waLink()} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Book on WhatsApp</a><a className="btn ghost" href={IG} target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a></div></section>);}
