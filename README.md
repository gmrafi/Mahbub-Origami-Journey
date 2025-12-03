# Origami Journey — Professional E-Book Website

A modern, professional one-page landing site for "The Origami Journey" 40-page e-book, built with clean HTML, CSS, and JavaScript.

**Designed & Developed by**: Md. Mahabub Alam Towhid (BBA 12, Alpha)

## Features

- Modern, professional design aligned with PDF color palette
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Interactive 3D book mockup
- PDF preview modal
- Scroll-triggered animations
- Payment integration ready (bKash/SSLCommerz)

## Color Palette (from PDF)

- **Primary**: `#DC6B7F` (coral/rose)
- **Accent**: `#F39C6B` (warm orange)
- **Text**: `#2D2D2D` (dark charcoal)
- **Background**: `#FFFFFF` / `#FFF9F5` (white/soft)

## Quick Start

### View in Browser
```powershell
Start-Process d:\Projects\Origami-Journey\index.html
```

### Local Server (Optional)
```powershell
Push-Location d:\Projects\Origami-Journey
python -m http.server 8080
Pop-Location
```
Then visit http://localhost:8080

## Structure

- `index.html` — Clean semantic HTML with professional sections
- `styles.css` — Modern CSS with design system and PDF colors
- `script.js` — Smooth interactions, animations, modal, navigation
- `origami book (8.3 x 11.7 in) (3).pdf` — The e-book (preview enabled)

## Sections

1. **Hero** — Eye-catching intro with 3D book visual and CTAs
2. **About** — Book overview and mission
3. **Features** — Three main sections (Kids, Engineering, Business Origami)
4. **Pricing** — Transparent pricing and financial breakdown
5. **CTA** — Final conversion section

## Payment Integration

Replace the placeholder in `script.js` with your payment gateway:

### bKash Example
```javascript
function initiatePayment(data) {
  // bKash Merchant API integration
}
```

### SSLCommerz Example
```javascript
function initiatePayment(data) {
  // SSLCommerz Hosted Checkout
}
```

## Customization

All colors are CSS variables in `:root` — easy to adjust:
```css
:root {
  --primary: #DC6B7F;
  --accent: #F39C6B;
  /* ... */
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Origami Journey. All rights reserved.

