Redesign the Simulation Engine screen for CarbonPilot AI to improve usability.

Goal:
Make results clearly visible and make controls always accessible.

Style:
Dark luxury enterprise SaaS.
Background #0B0F14, cards #121821, accent gradient #00C6FF→#00FFB2, clean typography (Inter/SF Pro).
No marketing content. Feature-only UI.

LAYOUT (Single Screen, No hidden panels):

TOP SECTION — Header
Title: “Simulation Engine”
Small badge: “AI Predicted Impact • Confidence: High”
Close button top-right.

MAIN CONTENT — 4 Separate Charts (Small Multiples)
Replace the single multi-metric chart with FOUR separate line charts in a 2x2 grid.
Each chart must show two lines:
- Current (baseline) as dashed line
- Simulated as solid glowing line
Each chart has clear y-axis scale and tooltip.

Chart 1: Energy Usage (kWh)
Chart 2: Total Emissions (tCO2e)
Chart 3: Carbon per Unit (kgCO2e/unit)
Chart 4: Cost (THB)

Each chart should display a small delta label in the corner:
Example: “-8.2%” in green or “+3.1%” in orange.

MID SECTION — Before vs After Summary Cards
Below charts, add 4 KPI cards showing:
- Carbon per Unit: current → simulated + delta %
- Energy: current → simulated + delta %
- Emissions: current → simulated + delta %
- Cost: current → simulated + delta %

BOTTOM SECTION — ALWAYS VISIBLE Scenario Controls (No collapse, no slide-up)
Add a fixed visible control area at the bottom of the page (inside the main layout, not hidden).
Controls include:

- Production Volume slider (50%–150%) with % value on the right
- Efficiency Improvement slider (0%–30%) with % value on the right
- Peak Load Shift toggle (ON/OFF) + optional “Shift %” slider when ON
- Renewable Energy Input slider (0%–100%) with % value on the right

Add a small “Reset to Baseline” button and “Save Scenario” button.

Interactions:
When user adjusts any control, all 4 charts and KPI cards update immediately (real-time).
No hidden drawers, no expansion required.

UX Details:
- Keep the floating AI Copilot icon bottom-right.
- Ensure spacing is clean and controls are easy to reach without scrolling too much.
- Use subtle glow hover effects and smooth micro-animations.