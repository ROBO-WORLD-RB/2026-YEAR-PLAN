# ISI 2026 Year Plan 🚀

A world-class, futuristic web application showcasing Intelligent Systems Inc.'s 2026 Year Plan. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and featuring an interactive 3D globe.

![ISI 2026](https://img.shields.io/badge/ISI-2026%20Year%20Plan-00f5ff?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🌟 Hero Section
- Animated particle network background
- Letter-by-letter text reveal animation
- Live countdown timer to Q1 milestone
- Glowing CTA button with smooth scroll

### 📊 Stats Dashboard
- Animated number counters (count up on scroll)
- 2026 targets: 100K users, 5 AI models, 50+ communities

### 🎯 Strategy Section
- Problem → Solution → Technology cards
- Glassmorphism effects with hover animations
- Icon animations and glow effects

### 🗓️ Roadmap Timeline
- Q1-Q4 quarterly milestones
- Progress tracking with animated bars
- Current period highlight with pulse

### 👥 Team Section
- 8 team member cards with filterable departments
- Expandable modal with full bio, mission, and Q1 goals
- Department color coding

### 📈 Projects Showcase
- ISI HealthAI, ISI EduAI, Hybrid Sync Protocol
- Progress bars with status badges
- Team member assignments

### 🌐 3D Interactive Globe
- **Interactive 3D globe** using react-globe.gl
- Location markers (HQ, Pilots, Future)
- Animated connection arcs
- Click to zoom and view details
- Auto-rotation with play/pause controls

### 📋 Footer
- Navigation links
- Social media
- Newsletter signup
- Multi-language toggle (EN/TWI/FR)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling with custom cyberpunk theme |
| **Framer Motion** | Animations and transitions |
| **react-globe.gl** | 3D interactive globe |
| **Lucide React** | Icons |
| **Zustand** | State management |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd isi-2026-plan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
isi-2026-plan/
├── app/
│   ├── globals.css          # Global styles & theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── effects/             # Visual effects
│   │   ├── ParticleBackground.tsx
│   │   └── AnimatedCounter.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Strategy.tsx
│   │   ├── Roadmap.tsx
│   │   ├── Team.tsx
│   │   ├── Projects.tsx
│   │   ├── Globe.tsx        # 3D Globe
│   │   └── Footer.tsx
│   └── ui/                  # Reusable components
│       ├── Card.tsx
│       ├── Button.tsx
│       ├── Modal.tsx
│       ├── Badge.tsx
│       └── Avatar.tsx
├── data/                    # Static data
│   ├── team.ts
│   ├── locations.ts
│   ├── stats.ts
│   ├── roadmap.ts
│   └── projects.ts
├── hooks/                   # Custom React hooks
│   └── useAnimations.ts
└── lib/                     # Utilities
    └── utils.ts
```

## 🎨 Design System

### Colors
- **Deep Space:** `#0a0a1a` (Background)
- **Neon Cyan:** `#00f5ff` (Primary accent)
- **Electric Purple:** `#8b5cf6` (Secondary accent)
- **Warm Orange:** `#f97316` (Tertiary accent)
- **Success Green:** `#10b981` (Status)

### Typography
- **Headings:** Space Grotesk
- **Body:** Inter

## 🤝 Team

| Name | Role | Department |
|------|------|------------|
| Jerry Justice Nii Borteye Borketey | Founder & CEO | Leadership |
| Darko Anita Firdaus | Lead Engineer | Engineering |
| Danso Daniel Effum | Senior Engineer | Engineering |
| Nana Kow Seniagya | Cloud Engineer | Infrastructure |
| Prince Ozor | Design Lead | Design |
| Godlove Owusu | Research Specialist | Research |
| Clement Gbagba | Marketing Manager | Marketing |
| Patrick Darko | Security Lead | Security |

## 📝 License

© 2026 Intelligent Systems Inc. All rights reserved.

---

<p align="center">
  <strong>Built with ❤️ for Africa's Future</strong>
</p>
