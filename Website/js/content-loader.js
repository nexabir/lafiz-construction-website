// ============================================================================
// CONTENT LOADER — Fetches site content from Firestore and renders the site
// ============================================================================
// If Firestore has data, the site renders from it.
// If Firestore is empty/unavailable, the site falls back to the static HTML.
// ============================================================================

(function() {
  'use strict';

  // Wait for Firebase to be ready
  function waitForFirebase(callback) {
    if (typeof firebase !== 'undefined' && typeof firebaseConfig !== 'undefined') {
      callback();
    } else {
      setTimeout(() => waitForFirebase(callback), 100);
    }
  }

  waitForFirebase(function() {
    // Init Firebase if not already done
    if (!window.firebaseApp) {
      try {
        window.firebaseApp = firebase.initializeApp(firebaseConfig);
        window.firebaseDB = firebase.firestore();
      } catch (e) {
        console.log('Firebase not configured — using static content');
        return;
      }
    }

    loadSiteContent();
  });

  async function loadSiteContent() {
    try {
      const doc = await window.firebaseDB.collection('siteContent').doc('main').get();
      if (!doc.exists) {
        console.log('No dynamic content found — using static HTML');
        return;
      }

      const data = doc.data();
      console.log('✅ Dynamic content loaded from Firestore');
      renderSite(data);
    } catch (err) {
      console.log('Content loader: using static content (' + err.message + ')');
    }
  }

  function renderSite(data) {
    // ── HERO SECTION ─────────────────────────────────────────────────
    if (data.hero) {
      const h = data.hero;
      setText('.hero-badge-text', h.tagline);
      setText('.hero-title-line-1', h.title1);
      setText('.hero-title-line-2', h.title2);
      setText('.hero-title-line-3', h.title3);
      setText('.hero-description', h.description);

      // Stats
      if (h.stats) {
        h.stats.forEach((stat, i) => {
          setText(`.hero-stat-value-${i}`, stat.value);
          setText(`.hero-stat-label-${i}`, stat.label);
        });
      }
    }

    // ── ABOUT SECTION ────────────────────────────────────────────────
    if (data.about) {
      const a = data.about;
      setText('.about-title', a.title);
      setText('.about-lead', a.lead);
      setText('.about-body', a.body);
    }

    // ── CLIENT LOGOS ─────────────────────────────────────────────────
    if (data.logos && data.logos.length > 0) {
      const slides = document.querySelectorAll('.trust-carousel-slide');
      slides.forEach(slide => {
        slide.innerHTML = data.logos.map(logo => `
          <img src="${logo.imageUrl}" alt="${logo.name}" class="trust-carousel-logo">
        `).join('');
      });
    }

    // ── TEAM ─────────────────────────────────────────────────────────
    if (data.team && data.team.length > 0) {
      const teamGrid = document.querySelector('.team-grid');
      if (teamGrid) {
        teamGrid.innerHTML = data.team.map(member => `
          <div class="team-card reveal-on-scroll">
            <div class="team-avatar">
              ${member.imageUrl
                ? `<img src="${member.imageUrl}" alt="${member.name}">`
                : `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="35" r="20" fill="#334155"/><ellipse cx="50" cy="85" rx="35" ry="25" fill="#334155"/></svg>`}
            </div>
            <h4>${member.name}</h4>
            <span class="team-role">${member.role}</span>
            <p>${member.description || ''}</p>
          </div>
        `).join('');
      }
    }

    // ── SERVICES ─────────────────────────────────────────────────────
    if (data.services) {
      setText('.services-heading', data.services.heading);
      setText('.services-description', data.services.description);
    }

    // ── CAD PORTFOLIO ────────────────────────────────────────────────
    if (data.cad) {
      setText('.cad-heading', data.cad.heading);
      setText('.cad-description', data.cad.description);
    }

    // ── PROJECTS ─────────────────────────────────────────────────────
    if (data.projects) {
      setText('.projects-heading', data.projects.heading);
      setText('.projects-description', data.projects.description);
    }

    // ── SECTORS ──────────────────────────────────────────────────────
    if (data.sectors) {
      setText('.sectors-heading', data.sectors.heading);
      setText('.sectors-description', data.sectors.description);
    }

    // ── CONTACT ──────────────────────────────────────────────────────
    if (data.contact) {
      const c = data.contact;
      setText('.contact-address', c.address);
      setText('.contact-phone1', c.phone1);
      setText('.contact-phone2', c.phone2);
      setText('.contact-email1', c.email1);
      setText('.contact-email2', c.email2);
      setText('.contact-incorp', c.incorporation);
      setText('.contact-trade', c.tradeLicense);
      setText('.contact-tin', c.tin);
      setText('.contact-hours', c.hours);
    }

    // ── FOOTER ───────────────────────────────────────────────────────
    if (data.footer) {
      setText('.footer-description', data.footer.description);
      setText('.footer-copyright', data.footer.copyright);
    }
  }

  function setText(selector, value) {
    if (!value) return;
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  }
})();
