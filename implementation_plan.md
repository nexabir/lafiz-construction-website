# Lafiz Construction & Consultant Ltd. - Website Implementation Plan

Build a modern, high-performance, responsive corporate website for **LAFIZ Construction & Consultant** in the new `Website/` directory, translating the exact design language, layout, typography, color palette, and component system from the inspiration UI (`Inspariation/7 Full website.png`) and incorporating real company data, projects, and CAD drawings from `All Company works and Profiles/`.

---

## User Review Required

> [!IMPORTANT]
> **Design & Architecture Alignment**
> - **Architecture**: We will implement a high-speed, modern web application using semantic HTML5, custom CSS design system (tokens, glassmorphism, micro-animations), and modular vanilla JavaScript. This ensures instantaneous page loads, zero build friction, and smooth animated routing across all sections (Home, About, Services, Projects, Case Study, Engineering & CAD, Sectors, Capabilities, and Contact).
> - **Visual Identity**: The website will use the **Modern Crimson & Navy brand identity** (`#BA1C1D` emblem + `#0E1E2B` typography + `#F8FAFC` slate backgrounds) established in the inspiration UI, with the scalable SVG logo assets we extracted.
> - **Real Portfolio Data**: We will integrate actual company achievements from the 33-page corporate profile and CAD drawings (PGCB Complex Aricha, Sreenagar Toll Plaza, Rajuk-approved residential/commercial towers, Jalsheri Fuel Pump, etc.).

---

## Proposed Changes

### 1. Project Directory Structure (`Website/`)

We will create a clean, maintainable structure under `c:\Abir\Projects\My Web Projects\Lafiz Constraction and Consultant LTD\Website`:

```
Website/
├── index.html                 # Complete modern application entry point with semantic navigation
├── css/
│   ├── main.css              # Design tokens, typography (Plus Jakarta Sans/Inter), layout, components
│   └── animations.css        # Smooth transitions, scroll reveals, modal overlays, hover micro-interactions
├── js/
│   ├── app.js                # Core app controller, interactive routing, mobile drawer, smooth scroll
│   ├── portfolio.js          # Interactive category filtering, search, pagination, dynamic modal views
│   ├── case-study.js         # Comprehensive project case study viewer (Challenge, Scope, Approach, Gallery)
│   └── proposal.js           # Multi-step "Request a Proposal" interactive modal & contact inquiry handler
└── assets/
    ├── logos/                # Vector SVGs (primary, white, icon) and high-res PNGs
    ├── projects/             # Real project photographs extracted from company profile
    └── cad/                  # Architectural drawings, blueprints, and engineering plans
```

---

### 2. Detailed Component & Section Specifications

#### [NEW] [index.html](file:///c:/Abir/Projects/My%20Web%20Projects/Lafiz%20Constraction%20and%20Consultant%20LTD/Website/index.html)
- **Top Navigation Bar**:
  - Sticky glassmorphic header with modern vector logo (`lafiz-logo-primary.svg` and `lafiz-logo-white.svg` on dark scroll)
  - Desktop nav items: *About, Services, Projects, Engineering & CAD, Sectors, Capabilities, Insights, Contact*
  - *"Request a Proposal"* prominent CTA button
  - Mobile hamburger toggle with sliding navigation drawer
- **Hero Section**:
  - Headline: *"Engineering. Construction. Consultancy."*
  - Subhead: *"Technical expertise and project delivery for buildings, infrastructure and industrial development."*
  - Dual action CTAs: *"Request a Proposal"* (Primary Red) & *"Explore Our Projects"* (Ghost Button)
  - Animated Key Metric Counters:
    - **2011** (Established)
    - **41+** (Technical & Support Personnel)
    - **Multidisciplinary** (Engineering Expertise)
    - **Public & Private** (Project Experience)
- **Company Overview & Core Values**:
  - History since 2011 (Dhaka City Corporation registered engineering firm)
  - Core Pillars: *Excellence, Integrity, Innovation, Collaboration*
  - Infrastructure commitment and disaster-resilient engineering focus
- **Integrated Engineering & Construction Services**:
  - 4 core service cards with hover-elevation effects and details:
    1. *Consultancy* (Architectural & Engineering Design, Project Management, Regulatory Compliance)
    2. *Construction* (Residential, Commercial, Industrial, Turnkey Execution)
    3. *Renovation & Restoration* (Historic preservation, structural rehabilitation, modern retrofit)
    4. *Interior Design* (Aesthetic & functional interior environments)
- **Engineering & CAD Capability Showcase**:
  - Dark-mode technical engineering showcase matching inspiration panel #7
  - Interactive technical drawing tabs: *Floor Plans, Elevations, Structural Plans, Electrical Layouts, HVAC Layouts, Site Plans*
  - Clickable blueprints opening high-resolution CAD viewer modal
- **Selected Project Experience (Filterable Portfolio)**:
  - Category filters: *All, Residential, Commercial, Institutional, Industrial, Infrastructure, Transportation, Power & Energy*
  - Grid cards featuring real photos (PGCB Complex Manikganj, Sreenagar Toll Plaza, Rajuk Towers, Purbachal Fuel Pump)
  - Metadata pills: Year, Sector, Location, Service Scope
- **Built-Environment Sectors Grid**:
  - 8-grid sector layout matching inspiration panel #8
- **Why Project Teams Choose LAFIZ**:
  - 5-column benefit matrix: *Multidisciplinary Expertise, Practical Engineering, Project Experience, Technical Documentation, Collaborative Delivery*
- **International Partnership Callout**:
  - Dedicated banner: *"Looking for a reliable engineering & construction partner in Bangladesh?"*
- **Interactive Modals**:
  - **Project Case Study Modal**: Deep dive into individual projects (The Challenge, LAFIZ Scope, Technical Approach, Project Outcome, Photo Gallery)
  - **Request a Proposal Modal**: Interactive quotation inquiry workflow
- **Contact & Inquiry Section**:
  - Office: *House #25/5-A (1st Floor), Block-F, Aziz Mohollah, Mohammadpur, Dhaka-1207*
  - Direct lines: `+880 1718581900`, `+880 1715508576`
  - Emails: `lafiz.cc@gmail.com`, `lafiz.cc20@gmail.com`
  - Fully functional inquiry form with instant validation

#### [NEW] [main.css](file:///c:/Abir/Projects/My%20Web%20Projects/Lafiz%20Constraction%20and%20Consultant%20LTD/Website/css/main.css)
- Design token system based on inspiration board:
  - `--color-primary: #BA1C1D` (Crimson brand accent)
  - `--color-primary-hover: #9E1617`
  - `--color-navy: #0E1E2B` (Dark Slate / Charcoal)
  - `--color-navy-dark: #07121B`
  - `--color-surface: #FFFFFF`
  - `--color-bg-light: #F8FAFC`
  - `--color-border: #E2E8F0`
  - `--color-text-muted: #64748B`
  - Modern fonts: `'Plus Jakarta Sans'`, `'Inter'`, sans-serif
- Responsive typography, CSS grid layouts, glassmorphism cards, and micro-interactions

#### [NEW] [app.js](file:///c:/Abir/Projects/My%20Web%20Projects/Lafiz%20Constraction%20and%20Consultant%20LTD/Website/js/app.js) & supporting JS
- Smooth scrolling and active section tracking
- Dynamic category filtering and search for projects
- Animated metric count-up upon scrolling into view
- Full modal manager for case studies and CAD blueprints
- Form submission simulation with immediate feedback

---

## Verification Plan

### Automated Verification
- Start a local development HTTP server in `Website/` using Python:
  `python -m http.server 8080` (or `npx serve Website -p 8080`)
- Verify all assets, CSS, and JS files load with HTTP 200 without console errors or broken links.

### Manual Verification via Browser Subagent
- Launch the browser subagent to navigate to `http://localhost:8080`.
- Verify:
  1. Sticky navigation, branding logo, and hero section appearance.
  2. Filter tabs on the Projects portfolio (clicking *Residential*, *Commercial*, *Infrastructure* filters correctly).
  3. Clicking a project card opens the detailed Case Study modal.
  4. Clicking a CAD plan opens the Blueprint viewer modal.
  5. Clicking *"Request a Proposal"* opens the interactive quotation form.
  6. Mobile responsive layout check at 375px width.
