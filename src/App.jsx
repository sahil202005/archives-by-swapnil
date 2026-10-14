import {MotionConfig} from 'framer-motion';
import Navbar from './components/Navbar';import Hero from './components/Hero';import Gallery from './components/Gallery';
import Services from './components/Services';import Packages from './components/Packages';import About from './components/About';
import Contact from './components/Contact';import Extras from './components/Extras';import Stats from './components/Stats';import Footer from './components/Footer';
export default function App(){return(<MotionConfig reducedMotion="user"><Navbar/><main><Hero/><Stats/><Gallery/><Services/><Packages/><About/><Contact/></main><Footer/><Extras/></MotionConfig>);}
