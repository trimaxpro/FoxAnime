# 🦊 FoxAnime - Modern Anime Streaming Landing Page

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Sakugabooru API](https://img.shields.io/badge/Sakugabooru-API-FF4081?style=for-the-badge&logo=anime&logoColor=white)](https://www.sakugabooru.com/help/api)

> A high-performance, dark-themed landing page and feature showcase for the **FoxAnime** desktop streaming client. Features real-time Sakugabooru animation background video streaming, glassmorphism UI components, interactive showcase tabs, and technical architecture visualizations.

---

## ✨ Features

- 🍿 **Zero Ad Interruptions**: Showcase for full HD 1080p anime streaming with no ad interruptions.
- 🎬 **Sakugabooru Background Video Engine**:
  - Live API integration fetching high-definition anime animation clips (`rating: safe`).
  - Seamless dual-video crossfader architecture (`videoRef0` and `videoRef1`) with 0ms startup delay.
  - Dynamic backdrop blur (`backdrop-blur-md` / `backdrop-blur-lg`) and vignette gradient overlays for optimal text contrast and legibility.
  - Multi-tier fallback pipeline (Direct API $\rightarrow$ AllOrigins CORS Proxy $\rightarrow$ Curated HD fallback clips).
- 🎨 **Fox Red Design System**:
  - Dark mode aesthetic (`#0a0a0a` backdrop with `#E50914` brand red accents).
  - Custom typography stack using Google Fonts (*Oswald, Inter, Lato, Ubuntu, Nunito Sans*).
  - Interactive comic pill radio buttons, glowing star GitHub buttons, animated like counters, and glassmorphic cards.
- 💻 **Windows Desktop Downloads**: Dedicated call-to-action buttons featuring custom 🪟 Windows SVG icons.
- 📱 **Responsive Showcase Tabs & Bento Grid**: Mobile-first grid layouts presenting application features, player highlights, and technical architecture specs.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://reactjs.org/) + [TypeScript 5](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 5](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **API Integration** | [Sakugabooru Booru API](https://www.sakugabooru.com/help/api) |

---

## 📁 Project Structure

```text
Website/
├── public/
│   └── assets/                  # Brand logos & application preview screenshots
├── src/
│   ├── components/
│   │   ├── AppShowcaseTabs.tsx  # Interactive app tab preview switcher
│   │   ├── DownloadSection.tsx  # Windows Desktop client download section
│   │   ├── FeatureBentoGrid.tsx # Bento grid detailing core client features
│   │   ├── Footer.tsx           # Footer with legal modal links
│   │   ├── Hero.tsx             # Main hero section with Sakugabooru background
│   │   ├── LegalModal.tsx       # Privacy, Terms, and DMCA dialog modals
│   │   ├── Navbar.tsx           # Fixed blur navigation header with GitHub star button
│   │   ├── SakugabooruBackground.tsx # Dual-video seamless crossfade background engine
│   │   └── SearchModal.tsx      # Real-time title search preview modal
│   ├── services/
│   │   └── sakugabooru.ts       # Sakugabooru API fetcher, CORS proxy, & fallbacks
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Design system tokens, grid masks, & custom utilities
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML document template
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Tailwind configuration & color themes
└── vite.config.ts               # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/trimaxpro/FoxAnime.git
   cd FoxAnime
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📜 Attribution & License

- Sakugabooru video clips are served via the [Sakugabooru API](https://www.sakugabooru.com/help/api) under fair-use animation preview guidelines.
- Created for **FoxAnime**. Open source under the [MIT License](LICENSE).
