// Professional interactivity for Origami Journey

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Mobile nav toggle
const navToggle = $(".nav-toggle");
const navList = $(".nav-list");
if (navToggle && navList) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  
  // Close on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (navList.classList.contains('open') && 
        !navList.contains(e.target) && 
        !navToggle.contains(e.target)) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Close on nav link click (mobile)
  $$('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll for nav links
$$('.nav-list a, a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
const modalOverlay = $('.modal-overlay');

function openPreview(src) {
  if (!previewModal) return;
  previewFrame.src = src;
  previewModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  if (!previewModal) return;
  previewModal.classList.remove('open');
  previewFrame.src = '';
  document.body.style.overflow = '';
}

if (previewBtn) {
  previewBtn.addEventListener('click', () => {
    openPreview('origami book (8.3 x 11.7 in) (3).pdf');
  });
}

if (modalClose) modalClose.addEventListener('click', closePreview);
if (modalOverlay) modalOverlay.addEventListener('click', closePreview);
window.addEventListener('keydown', e => { 
  if (e.key === 'Escape') closePreview(); 
});

// Buy buttons
$$('[data-buy], #buyBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Payment integration placeholder
    showToast('Redirecting to payment gateway...');
    
    // TODO: Integrate bKash or SSLCommerz
    // Example:
    // initiatePayment({ amount: 80, product: 'Origami Journey E-Book' });
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

$$('.feature-card, .financial-card, .section-header').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
