# Origami Journey — One-Page E-Book Site

A simple, mobile-first landing page to sell the 40-page "The Origami Journey" e-book.

## Structure
- `index.html` — Content and sections (Hero, Value, About, Pricing, CTA)
- `styles.css` — Mobile-first styles with CSS variables (palette placeholders)
- `script.js` — Interactivity: nav, smooth scroll, modal preview, toast, buy stubs
- `assets/` — Place badges and preview PDF/images here

## Run Locally (Windows PowerShell)
```powershell
# Open in default browser
Start-Process d:\Projects\Origami-Journey\index.html
```

For a local server (optional):
```powershell
# Using Python 3
Push-Location d:\Projects\Origami-Journey; python -m http.server 8080; Pop-Location
```
Then visit http://localhost:8080

## Payment Integration
Replace the buy button stubs in `script.js` with either:
- bKash Merchant Checkout
- SSLCommerz Hosted Checkout

Create a small module (e.g., `payments.js`) and call `initBkashCheckout` or `initSSLCommerz` from buy buttons.

## Color Palette from PDF
If you provide the e-book PDF path, we can extract its dominant colors and update CSS variables. Options:
- Manual: pick colors and set in `:root` in `styles.css`
- Programmatic: extract via a Node/Python script and write to a generated CSS file

## Notes
- All text comes from your supplied script.
- Badges are placeholders; add SVGs or images to `assets/`.
- Update `assets/sample-preview.pdf` to point to your real preview.
