# 🌍 CarbonPilotAI — Frontend
### Web App for SME painpoint for Carbon Trend

> A modern, fast, and user-friendly dashboard for measuring emissions, tracking reduction actions, and generating SME-ready reports.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000000)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=ffffff)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=ffffff)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff)

---

## ✨ Overview

This frontend powers the **CarbonPilotAI Web Dashboard**, designed for Thai SMEs to:

- Input activity data (electricity, fuel, logistics, production)
- Calculate **Scope 1 & 2** emissions
- Compare against **industry benchmarks**
- Receive **AI reduction recommendations**
- Export SME-friendly reports (PDF/CSV via backend)

---

## 🎯 Key Features

- **Carbon Dashboard**: emissions trend, intensity, and breakdown  
- **Activity Input Forms**: clean UX with unit validation  
- **Benchmark View**: compare your carbon intensity vs industry  
- **Recommendations UI**: actionable reduction cards + expected impact  
- **Report Export**: one-click export (handled by backend)  
- **Responsive Layout**: desktop-first, mobile-ready  

---


## 📁 Project Structure

```text
.
├── guidelines/            # Project documentation and design guidelines
├── public/                # Static public files (served as-is)
├── src/                   # Main source code
│   ├── app/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── figma/     # Components imported from Figma
│   │   │   └── ui/        # Custom UI components (buttons, cards, etc.)
│   │   └── pages/         # Application pages (Dashboard, Data Input, etc.)
│   ├── assets/            # Images, icons, and media files
│   ├── imports/           # Shared imports / config modules
│   └── styles/            # Global styles (Tailwind / CSS)
├── index.html             # Vite entry HTML
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
├── postcss.config.mjs     # PostCSS configuration
├── vite.config.ts         # Vite configuration
└── ATTRIBUTIONS.md        # Asset / library attributions
