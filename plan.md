
---

## 5. Single-Page Layout Structure

The website is **one page**, scroll-based, with anchor navigation.

### Sections (Top → Bottom)

1. Hero / System Map
2. About (Input Layer)
3. Vision Module (Computer Vision)
4. Language & Reasoning Module (LLMs)
5. Systems & MLOps Module
6. Experience (Impact)
7. Projects
8. Publications
9. Contact (Output Layer)

---

## 6. Hero Section: AI System Map

### Purpose
Create a strong first impression and define the site metaphor.

### Content
- Name: **Soubhi Hadri**
- Title: **Senior AI / Data Scientist**
- One-line summary
- Central AI system diagram (SVG)

### Visual
- Dark background
- Central node: “AI System”
- Surrounding nodes:
  - Vision
  - LLMs & NLP
  - Agents & RAG
  - Systems & MLOps
  - Research
  - Experience

### Interaction
- Hover on node → glow + short label
- Click node → smooth scroll to section
- Subtle animated dots moving along connections

---

## 7. Section Specifications

### 7.1 About (Input Layer)

**Purpose:** Establish identity

**Content**
- Photo: `me.png`
- Short professional summary (2–3 lines)

**Visual**
- Photo with subtle border or glow
- Minimal animation on hover

---

### 7.2 Vision Module (Computer Vision)

**Focus**
- Computer Vision
- Real-time systems
- GPU & WebGL
- C++ / OpenCV / PCL

**Visual**
- Grid-based layout
- Light pixel or feature-map style background

---

### 7.3 Language & Reasoning Module (LLMs)

**Focus**
- LLMs, RAG, Agents
- Multimodal systems
- Enterprise AI

**Visual**
- Text blocks with animated connectors
- Highlight key concepts on hover

---

### 7.4 Systems & MLOps Module

**Focus**
- End-to-end AI pipelines
- CI/CD
- Cloud (Azure, AWS, Databricks)

**Visual**
- Left-to-right pipeline layout
- Each stage animates into view on scroll

---

### 7.5 Experience (Impact)

**Format**
- Grouped by career phase, not timeline:
  - Foundations
  - Specialization
  - Enterprise & Scale

**Each role includes**
- Problem solved
- Tech stack
- Outcome

---

### 7.6 Projects

**Project Card Structure**
- Project name
- Problem
- Solution
- Technologies
- Outcome

**Projects to include**
- SHISEIDO Virtual Makeup
- OttoFly
- Gesture-based Drone Control
- Multimodal / RAG Systems

---

### 7.7 Publications

**Format**
- Cards grouped by theme:
  - RAG
  - Multimodal AI
  - Computer Vision

**Each publication**
- Title
- One-line takeaway
- Practical relevance

---

### 7.8 Contact (Output Layer)

**Content**
- Email
- GitHub
- LinkedIn
- Optional resume link

**Visual**
- Minimal
- “System Output Generated Successfully” style message

---

## 8. Visual Design Rules

### Colors
- Background: Near-black or deep navy
- Text: Light gray / off-white
- Accent: One color only (cyan or blue)

### Typography
- Main font: Clean sans-serif
- Secondary font: Monospace (labels only)

---

## 9. Animation Rules

- Slow and subtle
- CSS-first animations
- JavaScript only for:
  - Scroll detection
  - Class toggling
  - SVG animation triggers

❌ No heavy animation libraries

---

## 10. Accessibility & Performance

- Mobile responsive
- Contrast ratio ≥ WCAG AA
- Lighthouse score ≥ 90
- No unnecessary JavaScript

---

## 11. Development Steps (Checklist)

1. Create GitHub repo
2. Add basic HTML skeleton
3. Implement dark theme CSS
4. Add system map SVG
5. Implement hover + scroll interactions
6. Populate sections with content
7. Optimize for mobile
8. Deploy via GitHub Pages

---

## 12. Success Criteria

A visitor should immediately think:

> “This person designs real AI systems at enterprise scale.”

If that reaction happens, the site is successful.
