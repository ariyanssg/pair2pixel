# Pair2Pixel

The website for **Pair2Pixel**, a creative and branding agency (*"pair every pixel with purpose"*). Its product work is shown as interactive 3D models: earbuds, a mouse and a power bank you can rotate right on the page.

## Highlights

- **3D product showcase:** GLB models rendered with React Three Fiber and Drei, with lighting and orbit controls
- **Video hero:** full-bleed background video with animated headline and call to action
- **Motion throughout:** section reveals and hover states with Framer Motion
- **Sections:** about, services, "why it matters", team, offers, testimonials and contact
- **Contact form:** submits through Web3Forms, so no backend is needed
- **WhatsApp button:** a floating quick-chat link
- **Responsive:** sidebar navigation on mobile, layouts tuned from phone to desktop

## Tech stack

| | |
| --- | --- |
| Framework | React 19, Vite |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Styling | Tailwind CSS, MUI |
| Motion | Framer Motion |
| Icons | Lucide, Heroicons, React Icons |
| Hosting | Netlify |

## Project structure

```
src/
  components/
    Hero.jsx               video hero
    ProductShowcase.jsx    3D model viewer
    EarbudsModel.jsx       GLB models (earbuds, mouse, power bank)
    MouseModel.jsx
    PowerbankModelAlt.jsx
    ServicesSection.jsx    plus About, Team, Testimonial, OfferSection...
    Contact.jsx            Web3Forms contact form
    WhatsAppButton.jsx
public/models/             .glb assets
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```

Deploys to Netlify with the settings in `netlify.toml`.

---

Built by [Mahmudul Hassan](https://github.com/ariyanssg)
