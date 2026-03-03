# 🌍 CarbonPilotAI — Frontend
### Luxury Web Dashboard for SME Carbon Intelligence

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

## 🏗 Frontend Architecture

```text
pages/         → route-level pages (Dashboard, Inputs, Reports)
components/    → reusable UI components
features/      → domain modules (calculator, benchmark, recommendation)
services/      → API client + request layer
store/         → state management (if used)
utils/         → helpers (unit convert, formatting, validators)
```
## 📂 Project Structure
```bash
carbonpilotai-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   └── charts/
│   ├── features/
│   │   ├── calculator/
│   │   ├── benchmarks/
│   │   ├── recommendations/
│   │   └── reports/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── ActivityInput.tsx
│   │   ├── Benchmarks.tsx
│   │   └── Reports.tsx
│   ├── services/
│   │   ├── api.ts
│   │   └── endpoints.ts
│   ├── utils/
│   │   ├── unit.ts
│   │   ├── format.ts
│   │   └── validate.ts
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
└── README.md
```
