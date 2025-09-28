// script.js
// Basic JS to ensure X link is set and to slightly randomize orbit radii for variety.

(() => {
  const xLink = document.getElementById('x-link');
  // Ensure your provided URL is used (already set in HTML but we enforce here)
  const communityUrl = 'https://x.com/i/communities/1972087756521123954';
  if (xLink) {
    xLink.setAttribute('href', communityUrl);
    xLink.addEventListener('click', (e) => {
      // default behavior opens in new tab due to target="_blank"
      // keep analytics or tracking-free.
    });
  }

  // Slightly randomize orbit radii and animation speeds for each bill for a lively look
  const bills = document.querySelectorAll('.bill');
  bills.forEach((b, idx) => {
    const base = (idx % 2 === 0) ? 220 : 280;
    const jitter = Math.round((Math.random() - 0.5) * 60); // -30..+30 px
    const radius = base + jitter;
    // set transform-origin dynamically (keeps CSS fallback)
    b.style.transformOrigin = `${-radius}px center`;
    // randomize duration a bit
    const dur = 7.2 + Math.random() * 2.4; // 7.2s - 9.6s
    b.style.animationDuration = `${dur}s`;
  });

  // Optional: make center text accessible (aria)
  const centerText = document.getElementById('center-text');
  if (centerText) {
    centerText.setAttribute('role','heading');
    centerText.setAttribute('aria-level','1');
  }

  // Keyboard accessibility: make interactive elements focusable
  document.querySelectorAll('.interactive').forEach(el => {
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        el.click?.();
      }
    });
  });

})();
