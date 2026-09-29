# TEHRI — Contemporary Luxury Fashion

> Editorial, modern e-commerce flagship for **TEHRI**. Contemporary clothing shaped by form, movement, and everyday expression.

---

## ✦ Brand System

TEHRI is designed as a digital flagship store for an editorial contemporary clothing label:
- **Palette**:
  - Primary Wine / Burgundy: `#98323F` (sampled from official circular mark)
  - Dark Wine: `#681F29`
  - Deep Charcoal: `#151515`
  - Soft Black: `#1E1E1E`
  - Warm Ivory: `#F8F5EF`
  - Off-White: `#FCFAF7`
  - Muted Beige: `#DDD4C9`
  - Soft Burgundy Highlight: `#B75D69`
- **Typography**:
  - Display & Headlines: **Instrument Serif** & **Cormorant Garamond**
  - Navigation & Body: **Manrope**
  - Numeric Data: Tabular numerals for luxury pricing in INR (₹)
- **Visual Identity**:
  - Official circular insignia and custom serif wordmark matching high-contrast ligatures and sweeping cuts.

---

## ✦ Key Features

1. **Cinematic Preloader Sequence (`IntroExperience`)**:
   - Deep wine curtain entrance with line animation and custom letter mask reveal of the TEHRI logotype.
   - Session-aware persistence so it doesn't interrupt internal navigation.

2. **Scroll & Motion System (`SmoothScroll` & Framer Motion)**:
   - **Lenis Smooth Inertia Scrolling** across desktop and touch viewports.
   - Hairline scroll progress indicator in signature burgundy along the viewport top.
   - **ScrollTextReveal**: Progressively illuminates philosophy copy word-by-word as you scroll.
   - **Parallax Depth**: Vertical parallax on editorial atelier photography and campaign banners.
   - **PageTransition**: Smooth fade-and-slide transitions across routes (`home`, `shop`, `women`, `men`, `collections`, `story`, `wishlist`, `account`).
   - **Shared Layout Navigation Underline**: Animated indicator using Framer Motion `layoutId="navIndicator"`.
   - **Bouncing Spring Badges**: Live responsive cart and wishlist counters with pop physics.

3. **Curated Product Detail View (PDP)**:
   - Multi-angle vertical image gallery with zoom stage.
   - Color swatch selection, size selector (`XS`–`XXL`), and live Size Guide modal with `CM` / `IN` conversion.
   - Expandable accordions for Craftsmanship, Fit Guidance, and Material & Care.
   - "Complete the Look" editorial pairings.

4. **Commerce Architecture**:
   - **Slide-over Cart Drawer**: Quantity adjusters, itemized calculations, and a dynamic progress bar toward complimentary worldwide shipping (threshold ₹2,999).
   - **Quick Add Modal**: Instant size/color picker straight from the product grid.
   - **Full-Screen Search Overlay**: Live instant query matching garments, silhouettes, and collections.
   - **Multi-Step Atelier Checkout**: Support for Instant UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (COD) with order confirmation receipts and tracking codes.
   - **Wishlist & Client Portal**: Saved items management, past order tracking, address book, and saved sizing preferences.

---

## ✦ Directory Structure

```
├── src/
│   ├── assets/
│   │   └── images/                # High-fidelity campaign & collection photography
│   │       ├── tehri_hero_campaign_*.jpg
│   │       ├── tehri_editorial_split_*.jpg
│   │       ├── tehri_campaign_film_*.jpg
│   │       ├── tehri_collection_women_*.jpg
│   │       └── tehri_collection_men_*.jpg
│   ├── components/
│   │   ├── common/
│   │   │   └── TehriLogo.tsx       # Vector SVG mark & circular insignia
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── IntroExperience.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── NewArrivals.tsx
│   │   │   ├── EditorialSplit.tsx
│   │   │   ├── ShopGenderSplit.tsx
│   │   │   ├── FeaturedCollection.tsx
│   │   │   ├── HorizontalLookbook.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── CampaignFilm.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   ├── InstagramFeed.tsx
│   │   │   └── Newsletter.tsx
│   │   ├── commerce/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductDetailModal.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── QuickAddModal.tsx
│   │   │   ├── SearchModal.tsx
│   │   │   ├── SizeGuideModal.tsx
│   │   │   └── CheckoutModal.tsx
│   │   ├── motion/
│   │   │   ├── SmoothScroll.tsx    # Lenis smooth scrolling wrapper
│   │   │   ├── ScrollMotion.tsx    # Parallax, ScrollFadeUp, ScrollTextReveal
│   │   │   ├── PageTransition.tsx  # Framer Motion page switchers
│   │   │   └── FramerComponents.tsx # Spring badges and stagger utilities
│   │   └── views/
│   │       ├── ShopView.tsx        # Filterable collection archive
│   │       ├── OurStoryView.tsx    # Magazine brand manifesto
│   │       ├── WishlistView.tsx    # Saved pieces
│   │       └── AccountView.tsx     # Client orders and profiles
│   ├── context/
│   │   └── ShopContext.tsx         # Global cart, wishlist, and modal state
│   ├── data/
│   │   └── products.ts             # Atelier product catalog and lookbook data
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ✦ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The app will be accessible at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## ✦ Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation**: Framer Motion (`framer-motion`) + Motion (`motion`)
- **Smooth Scroll**: Lenis (`lenis`)
- **Icons**: Lucide React (`lucide-react`)
