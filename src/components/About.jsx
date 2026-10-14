import {Instagram} from 'lucide-react';import {IG} from '../data/projects';
export default function About(){return(<section id="about" className="sec tint about"><div className="portrait" role="img" aria-label="Portrait of Swapnil (placeholder)">Add profile photo<br/>public/images/swapnil.jpg</div><div><h2>About Swapnil</h2>
<p className="lead">I create visual stories through photography, cinematic video, and creative content. My focus is on capturing details, communicating ideas, and helping brands present themselves with confidence.</p>
<a className="btn" href={IG} target="_blank" rel="noreferrer"><Instagram size={18}/> Follow on Instagram</a></div></section>);}
