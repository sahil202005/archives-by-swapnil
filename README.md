# Archives by Swapnil
Run: `npm install && npm run dev` · Build: `npm run build`
**Replace media:** edit `src/data/projects.js` (entries marked `placeholder:true`). Use direct MP4/WebM URLs or files in `public/videos` (`/videos/x.mp4`) and `public/images`. Instagram links go in `instagram` only.
**Add a project:** append an object (id, title, category, label, type, src, poster, instagram, ratio=width/height).
**Contact form:** without config it opens WhatsApp. For real submissions set `VITE_FORM_ENDPOINT` (e.g. Formspree URL) in `.env` / Vercel env vars.
**Deploy:** push to GitHub → Vercel → Import → Framework: Vite → Deploy.
**Test:** videos autoplay muted & pause off-screen; hover scales/unclips; filters; lightbox (Esc, arrows, backdrop); WhatsApp buttons; form; mobile 375px no horizontal scroll.
