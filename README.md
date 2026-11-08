# Maison Kitchen — Premium Dining Website

> **Portfolio Demonstration Project**  
> An Apple-inspired, luxury hospitality editorial digital experience created for **Maison Kitchen**, a fine dining restaurant situated along the Victoria Island waterfront in Lagos, Nigeria.

---

## 1. Creative Direction & Brand Philosophy

Maison Kitchen is conceived as an architectural sanctuary where West African culinary soul meets the restrained precision of French haute cuisine. The digital identity blends:

- **Apple-Inspired Minimalism**: Generous whitespace, precise typographic hierarchy, intentional pacing, and frictionless interactions.
- **Editorial Luxury**: Distinct, high-resolution photography of plated culinary art and warm architectural interiors, balancing the minimal interface. Every dish features unique, non-repetitive art-directed imagery.
- **Selective Glassmorphism**: Glass effects are strictly reserved for navigation (`glass-nav`), floating detail pills (`glass-pill`), and subtle status overlays—preventing visual noise and keeping the culinary photography as the focal point.
- **Restrained Color Palette**:
  - **Background**: `#F5F5F7` (Apple system grey/white)
  - **Surfaces**: `#FFFFFF`
  - **Main Text**: `#171717` (Deep charcoal obsidian)
  - **Secondary Text**: `#777777`
  - **Warm Accent**: `#B99A75` (Muted brass / champfered gold)
  - **Soft Cream**: `#F1EBDD` / `#FBF9F5`
- **Typography**:
  - **Headings**: `Manrope` (clean, contemporary geometric sans-serif)
  - **Body**: `Inter` (neutral, ultra-legible humanist sans-serif)
  - **Quotes/Accents**: `Playfair Display` (editorial serif flair)

---

## 2. Website Architecture & Pages

The application is a multi-page Single Page Application (SPA) built with React Router:

| Route | Page | Purpose & Refined Features |
|---|---|---|
| `/` | **Home** | Atmospheric candlelight hero (*"A little more than just a meal."*), interactive Fast-Booking dock (Date, Time, Party Size selector linking directly into Reservations), press acclaim strip, brand manifesto, 4 distinct signature dishes, 7-Course Lagos Waterfront Tasting Journey spotlight, category shortcuts, spatial experience bento, architectural mosaic gallery, Lagos hours/location teaser, and reservation call-to-action. |
| `/menu` | **Our Menu** | 24-item culinary collection across 6 categories (Starters, Main Courses, Pasta, Seafood, Desserts, Drinks). Features live search, active filter chips with one-click dismissal, dietary filtering, and an instant view switcher between **Card Grid** and **Editorial Menu Book List**. |
| `/menu/:id` | **Item Details** | Dedicated dish showcase with high-res photograph, culinary profile, full ingredients composition, executive chef's technique notes, sommelier cellar pairing, prep time & calorie metadata, and a direct *"Reserve a Table for This Dish"* link passing prefilled dish notes to the booking form. |
| `/about` | **Our Story** | The genesis of Maison Kitchen, dual profiles of Executive Chef Adebayo Thorne and Head Sommelier Nia Lawson, Terroir & Provenance grid (Niger Delta fisheries, Jos highlands produce, Badagry sea salt, Kano botanicals), architectural silence, and fictional industry accolades. |
| `/reservations` | **Reservations** | Interactive booking concierge. Reads URL search params (`date`, `time`, `guests`, `dish`). Validates dates (past dates prohibited; Mondays flagged for culinary R&D), party size (1–16 guests), seating areas, and contact info. Saves simulated bookings to `localStorage` with a receipt printer, `.ics` calendar file generator, and individual booking cancellation manager. |
| `/contact` | **Contact** | Concierge inquiry form (General, Private Dining Salon, Press, Sommelier), clipboard address copy button, detailed Lagos arrival & valet instructions, water-taxi dock details, and an interactive vector map with switchable location pins (Main Entrance, Valet Staging, Boat Jetty). |

---

## 3. Demonstration Data & Transparency Notice

To maintain strict ethical standards and transparency, **Maison Kitchen is clearly presented as a portfolio demonstration project**:

1. **Simulated Location**: `18 Walter Carrington Crescent, Victoria Island, Lagos, Nigeria` (Fictional demonstration address overlooking Five Cowries Creek).
2. **Demo Contact Details**: Phone (`+234 1 892 4000`) and Email (`concierge@maisonkitchen-lagos.demo`) are non-operational placeholders.
3. **Prices in NGN**: All dishes reflect realistic upscale Lagos fine dining pricing in Nigerian Naira (`₦9,500` – `₦58,000`), explicitly marked as fictional demo figures.
4. **Local Booking Storage**: Submitted reservations generate an authenticated reference code (e.g. `MK-78294`) and persist in browser `localStorage`. No credit cards or real personal data are collected.
5. **Dismissible Top Banner**: An informational notice bar at the top of the viewport informs reviewers and clients of the project's portfolio demonstration nature.

---

## 4. Tech Stack & Motion System

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6 / Rolldown](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (`react-router-dom`)
- **Motion & Interactions**: [Framer Motion 12](https://www.framer.com/motion/) with custom luxury bezier easing (`[0.22, 1, 0.36, 1]`) and strict `prefers-reduced-motion` compliance.
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Manrope`, `Inter`, `Playfair Display`)

---

## 5. Getting Started & Installation

### Prerequisites
- Node.js `v18.0.0` or higher (Tested on `v24.11.1`)
- npm `v9.0.0` or higher (Tested on `11.6.2`)

### 1. Navigate to Project
```bash
cd "C:\Users\Hp\.gemini\antigravity\scratch\maison-kitchen"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://127.0.0.1:5173/` or `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `/dist` directory.

---

## 6. Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or push the repository to GitHub.
2. Connect the repository in the Vercel Dashboard.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Add SPA rewrite rule (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploy to Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add `public/_redirects` with `/* /index.html 200` to support client-side routing.

---

## 7. External Service Requirements & Future Commercial Integration Points

In a production deployment for a live commercial restaurant, the following external services would seamlessly replace the demo modules:

1. **Live Reservations**:
   - Integration with **SevenRooms**, **Resy OS**, or **OpenTable API** for live table seating grids and SMS confirmations.
2. **Payment & Booking Deposits (Nigeria)**:
   - Integration with **Paystack** or **Flutterwave** for weekend tasting menu reservations requiring pre-authorized debit card deposits in NGN.
3. **Transactional Messaging**:
   - Integration with **Resend** or **SendGrid** to deliver automated calendar `.ics` invites and bespoke email confirmations.
4. **Headless CMS**:
   - Headless CMS like **Sanity.io** or **Contentful** allowing the sommelier and pastry chef to dynamically update daily specials and cellar availability without redeploying code.
