// Basic interactivity for Origami Journey site

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Mobile nav toggle
const navToggle = $(".nav-toggle");
const navList = $(".nav-list");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const open = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  // Close on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth scroll for nav links
$$('.nav-list a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Footer year
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Toast helper
const toast = $('#toast');
function showToast(message, ms = 2500) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), ms);
}

// Modal preview
const previewBtn = $('#previewBtn');
const previewModal = $('#previewModal');
const previewFrame = $('#previewFrame');
const modalClose = $('.modal-close');

function openPreview(src) {
  if (!previewModal) return;
  previewFrame.src = src;
  previewModal.classList.add('open');
}
function closePreview() {
  if (!previewModal) return;
  previewModal.classList.remove('open');
  previewFrame.src = '';
}
if (previewBtn) {
  previewBtn.addEventListener('click', () => {
    // Open the provided e-book PDF for preview
    openPreview('origami book (8.3 x 11.7 in) (3).pdf');
  });
}
if (modalClose) modalClose.addEventListener('click', closePreview);
window.addEventListener('keydown', e => { if (e.key === 'Escape') closePreview(); });
previewModal?.addEventListener('click', e => { if (e.target === previewModal) closePreview(); });

// Buy buttons
$$('[data-buy], #buyBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Payment integration placeholder
    // Replace with real gateway initialization code
    showToast('Redirecting to payment…');
    // Example stubs
    // initBkashCheckout({ amount: 80, item: 'Origami Journey e-book' });
    // or initSSLCommerz({ amount: 80, item: 'Origami Journey e-book' });
  });
});

// Color extraction placeholder from PDF
// If you share the PDF path, we can programmatically extract a palette
// and update CSS variables at runtime.

// Palette loader: if colors.json exists, apply to CSS variables
async function applyPalette() {
  try {
    const res = await fetch('colors.json', { cache: 'no-cache' });
    if (!res.ok) return; // file may not exist yet
    const palette = await res.json();
    const root = document.documentElement;
    for (const [key, value] of Object.entries(palette)) {
      root.style.setProperty(`--${key}`, value);
    }
    showToast('Theme updated from PDF palette');
  } catch (e) {
    // ignore
  }
}
applyPalette();
