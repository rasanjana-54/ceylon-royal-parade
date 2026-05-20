# 👑 Ceylon Royal Parade — Premium Wedding Fleet Showcase

[![Live Demo](https://img.shields.io/badge/Live-Demo-c5a880?style=for-the-badge)](https://github.com/rasanjana-54/ceylon-royal-parade)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)

A modern, premium landing page and booking registry showcase designed for **Ceylon Royal Parade**, Sri Lanka's premier wedding carriage rental service. 

Inspired by high-end aesthetic designs, this application features a sleek dark mode UI, bespoke gold typography (`#c5a880`), responsive layouts, and a seamless checkout experience that sends booking details straight to WhatsApp.

---

## ✨ Features

* **🎭 Premium Auto-Sliding Hero Carousel**  
  An elegant, full-screen slideshow showcasing the luxury fleet in real-world contexts, overlaid with cinematic, serif headers and quick call-to-actions.

* **🚗 Dynamic Categorized Showroom**  
  A filterable grid separating **Sedans**, **SUVs**, and **Vintage / Convertibles**. Each card renders high-quality local photography, custom key taglines, pricing information, and structural specifications.

* **🔍 Showroom Specs Pop-up**  
  A detailed, overlay lightbox panel highlighting vehicle passenger seating limits, fuel configurations, color palettes, and standard floral decor options.

* **📋 WhatsApp Booking Registry**  
  A simplified, client-oriented booking request registry. Validates inputs like names, pick-up locations, venue addresses, and custom notes, compiling them into a beautifully formatted draft directly sent to your business WhatsApp.

* **💎 Tailored Sri Lankan Context**  
  Copy and tags tailored specifically to match Sri Lankan wedding traditions (e.g., Nilame space considerations, custom drapes, and speed-tested decorations).

---

## 🛠️ Tech Stack

* **Frontend Library**: [React 19](https://react.dev/) (Functional components, hooks, custom state coordination)
* **Programming Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type definition profiles)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Sophisticated backdrop-blur glassmorphism, responsive grids, custom CSS animations)
* **Icons**: [Lucide React](https://lucide.dev/) (Crisp vector icons)
* **Bundler & Dev Server**: [Vite](https://vite.dev/) (Rapid HMR and clean production tree-shaking)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rasanjana-54/ceylon-royal-parade.git
   cd ceylon-royal-parade
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.*

4. **Compile production build bundle:**
   ```bash
   npm run build
   ```
   *This outputs optimized, static assets into the `dist/` directory, ready to be hosted.*

---

## 🌐 Deployment & Hosting

### Option A: Netlify Drop (Fastest)
1. Build the production files using `npm run build`.
2. Navigate to [Netlify Drop](https://app.netlify.com/drop).
3. Drag & drop the generated `dist/` folder.
4. Add your custom domain (e.g. `www.ceylonroyalparade.com`) under Site Settings.

### Option B: Traditional Hosting (cPanel / Hostinger)
1. Run `npm run build` to compile the static folder.
2. Upload the contents of the `dist/` directory into the `public_html` folder using your Host File Manager or FTP client.
