# LogicPrompt AI Website

## Overview
LogicPrompt AI provides AI Workflow Automation solutions. This website is structured to guide visitors through a **story-like journey**, using behavioral design and Jordan Belfort’s Straight Line Persuasion (SLP):

**Visitor Journey Flow:**  
**TRUST → RAPPORT → PROBLEM AWARENESS → LOGIC EXPLANATION → DEMO/PROOF → CERTAINTY → DECISION**

Pages:

1. **Home (`index.html`)** – Overview, problem awareness, founder introduction.  
2. **Solutions (`solutions.html`)** – Demo videos, screenshot gallery of automation flows.  
3. **Research & Specs (`case-studies.html`)** – Detailed PoC case studies, technical stacks, proof of work.  

---

## Pages Structure

### 1. `index.html` – Home
- Introduces **LogicPrompt AI**, founder (Klyde), and high-level workflow automation solutions.
- Key sections:
  - Hero / Introduction
  - Problem awareness: challenges businesses face
  - Logic overview: short explanation of AI workflow solutions
  - Call-to-Action: "Map your system live"

### 2. `solutions.html` – Demo & Portfolio
- Video demos embedded from YouTube
- Screenshots organized in a **gallery** with **lightbox feature**
- Key functionalities:
  - Clicking images opens lightbox  
  - Esc or X closes lightbox
- Videos display in **responsive grid**
- CTA buttons visually highlighted

### 3. `case-studies.html` – Research & Specs
- Each PoC shows:
  - Challenge  
  - Logic & Technical Stack  
  - Validation & Testing  
  - Scalability Notes  
  - Visual logic flow diagrams  
  - Real-world benefit
- Emphasis on **proof & credibility**
- CTA: Map your system live

---

## Key Functionalities

### ROI Calculator & Lead Capture
- Inputs: Weekly Hours, Hourly Rate, Name, Email, Business Name  
- Output: Annual Capital Leakage Identified  
- Lead is captured via **SheetDB API**:
  - API Name: `LogicPrompt_Leads`  
  - Endpoint: `https://sheetdb.io/api/v1/m43zmyhch2qvd`
- Leads submitted with `submitLead()` function in `script.js`
- Validation:
  - Must include `@` in email  
  - Name & business name required
- Error handling alerts user if API fails

### Gallery & Lightbox
- Screenshots displayed in a **grid**  
- Clicking opens **lightbox modal**
- Close via **Esc key** or **X button**
- Lightbox image source set dynamically

### Dark Mode
- Toggle button at bottom-right
- Switches `data-theme` between `light` and `dark`
- CSS variables control **background, text, accents, cards**

---

## Visual & Behavioral Design

### Color Palette
- **Primary Base:** Deep Slate / Charcoal `#1F2933`  
- **Secondary Base:** Soft Off-White `#F5F7FA`  
- **Accent Colors:**  
  - Blue / Blue-Teal `#3B82F6 / #2F8F9D` for headings & CTAs  
  - Amber `#F5C26B` for highlights & validation boxes

### Typography & Layout
- Font: `Inter, sans-serif`  
- Headings: Bold, 2–3 line spacing  
- Sections spaced for **one idea per scroll**  
- Fade-in animations via Intersection Observer  
- CTA buttons clearly visible, responsive, and color-highlighted

---

## Scripts (`script.js`)
- **ROI Calculator:** `calculateSavings()`, `submitLead()`  
- **Lightbox:** `openLightbox()`, `closeLightbox()`  
- **Fade-in animations:** Intersection Observer  
- **Dark Mode:** Toggle button appended dynamically

---

## How to Update

1. **Add new PoC / Case Study**
   - Add a `div.project-card` in `case-studies.html`
   - Include challenge, logic, stack, validation, scalability, diagram, benefit

2. **Add a new demo video**
   - Add `<iframe>` inside `video-container` in `solutions.html`
   - Ensure YouTube embed link is correct

3. **Update screenshots**
   - Add images in `assets/screenshots/`
   - Update `<img>` tags in `solutions.html` gallery

4. **Maintain ROI Calculator**
   - Update `script.js` if input fields change
   - Ensure SheetDB endpoint remains correct

---

## Contact & Scheduling
- Email: [logicprompt.ai@gmail.com](mailto:logicprompt.ai@gmail.com)  
- Google Calendar: [Book Audit](https://calendar.app.google/eCpgothwnWzbKZvT6)  
- CTA Buttons: consistent across pages for scheduling or system mapping

---

## API Reference

| API Name         | Endpoint                                   | Purpose                     |
|-----------------|-------------------------------------------|-----------------------------|
| LogicPrompt_Leads | https://sheetdb.io/api/v1/m43zmyhch2qvd | Capture ROI Calculator leads |

---

## Recommended Next Steps
1. Populate **case studies** with real technical diagrams and screenshots.  
2. Verify **ROI Calculator** functionality and leads capture.  
3. Confirm **dark mode toggle** works and maintains readability.  
4. Organize **Solutions page** images into a proper grid for readability.  
5. Add **Technical Deep Dive** for PoC #01 if needed.

---

## Behavioral & SLP Notes
- Each scroll should answer a **single question** for the visitor
- Highlight **logic & proof**, not just marketing claims
- CTA buttons encourage **safe exploratory actions**, not sales pressure
- Colors, spacing, and typography guide **attention & trust**

---

## Credits
- Developed by **Klyde Alan Miguel Del Castillo**  
- Inspired by **SLP (Straight Line Persuasion)**, UX, and behavioral psychology principles
