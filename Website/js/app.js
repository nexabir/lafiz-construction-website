/**
 * LAFIZ Construction & Consultant Ltd.
 * Main Application Script
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initStatsCounters();
  renderServices();
  renderCadBlueprints();
  renderProjects();
  renderSectors();
  renderPillars();
  initModals();
  initForms();
  initScrollReveals();
  initBackToTop();
});

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerClose = document.getElementById("drawerClose");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  let touchStartX = 0;
  let touchEndX = 0;

  // Scroll detection
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile drawer
  function openDrawer() {
    mobileDrawer.classList.add("open");
    drawerBackdrop.classList.add("active");
    menuToggle.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (menuToggle) menuToggle.addEventListener("click", function(e) {
    e.stopPropagation();
    if (mobileDrawer.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // Touch swipe to close drawer
  mobileDrawer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  mobileDrawer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
      closeDrawer();
    }
  }, { passive: true });

  // Close drawer on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   STATS COUNTERS
   ========================================================================== */
function initStatsCounters() {
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute("data-target"), 10);
          const prefix = num.getAttribute("data-prefix") || "";
          const suffix = num.getAttribute("data-suffix") || "";
          animateValue(num, 0, target, 1800, prefix, suffix);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("heroStats");
  if (statsSection) observer.observe(statsSection);
}

function animateValue(obj, start, end, duration, prefix = "", suffix = "") {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(easeOutQuad * (end - start) + start);
    obj.textContent = `${prefix}${current}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = `${prefix}${end}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

/* ==========================================================================
   RENDER SERVICES
   ========================================================================== */
function renderServices() {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = LAFIZ_DATA.services.map((svc, idx) => `
    <div class="service-card${idx === 0 ? ' reveal-on-scroll' : ''}">
      <span class="service-tag">${svc.tag}</span>
      <div class="service-icon-box">${svc.icon}</div>
      <h3 class="service-title">${svc.title}</h3>
      <div class="service-subtitle">${svc.subtitle}</div>
      <p class="service-desc">${svc.description}</p>
      <ul class="service-deliverables">
        ${svc.deliverables.map(d => `<li>${d}</li>`).join("")}
      </ul>
      <a href="#contact" class="service-link" onclick="openProposalModal('${svc.title}')">
        Consult on ${svc.title}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  `).join("");
}

/* ==========================================================================
   ENGINEERING & CAD CAPABILITY (Matches Inspiration Panel 7)
   ========================================================================== */
let activeCadFilter = "All";

function renderCadBlueprints() {
  const filterContainer = document.getElementById("cadFilterBar");
  const grid = document.getElementById("cadGrid");
  if (!grid || !filterContainer) return;

  const categories = ["All", "Architectural", "Structural", "Construction", "Masterplan", "Civil & Site"];
  
  filterContainer.innerHTML = categories.map(cat => `
    <button class="cad-filter-btn ${cat === activeCadFilter ? "active" : ""}" data-category="${cat}">
      ${cat}
    </button>
  `).join("");

  filterContainer.querySelectorAll(".cad-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCadFilter = btn.getAttribute("data-category");
      filterContainer.querySelectorAll(".cad-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateCadCards();
    });
  });

  updateCadCards();
}

function updateCadCards() {
  const grid = document.getElementById("cadGrid");
  if (!grid) return;

  const filtered = activeCadFilter === "All" 
    ? LAFIZ_DATA.cadBlueprints 
    : LAFIZ_DATA.cadBlueprints.filter(item => item.category.toLowerCase().includes(activeCadFilter.toLowerCase()));

  grid.innerHTML = filtered.map((item, idx) => `
    <div class="cad-card${idx === 0 ? ' reveal-on-scroll' : ''}" onclick="openCadModal('${item.id}')">
      <div class="cad-thumb-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="cad-overlay-badge">${item.category}</div>
      </div>
      <div class="cad-info">
        <span class="cad-sheet">${item.sheet}</span>
        <h4 class="cad-title">${item.title}</h4>
        <p class="cad-desc">${item.description}</p>
        <div class="cad-card-footer">
          <span>${item.project}</span>
          <span>View Blueprint →</span>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   SELECTED PROJECT EXPERIENCE (Filterable Portfolio)
   ========================================================================== */
let activeProjFilter = "all";

function renderProjects() {
  const filterContainer = document.getElementById("projectsFilterBar");
  const grid = document.getElementById("projectsGrid");
  if (!grid || !filterContainer) return;

  const categories = [
    { label: "All Projects", key: "all" },
    { label: "Residential", key: "residential" },
    { label: "Commercial", key: "commercial" },
    { label: "Industrial", key: "industrial" },
    { label: "Infrastructure", key: "infrastructure" },
    { label: "Transportation", key: "transportation" },
    { label: "Power & Energy", key: "power" }
  ];

  filterContainer.innerHTML = categories.map(cat => `
    <button class="proj-filter-btn ${cat.key === activeProjFilter ? "active" : ""}" data-filter="${cat.key}">
      ${cat.label}
    </button>
  `).join("");

  filterContainer.querySelectorAll(".proj-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeProjFilter = btn.getAttribute("data-filter");
      filterContainer.querySelectorAll(".proj-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateProjectCards();
    });
  });

  updateProjectCards();
}

function updateProjectCards() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const filtered = activeProjFilter === "all"
    ? LAFIZ_DATA.projects
    : LAFIZ_DATA.projects.filter(p => p.category.includes(activeProjFilter));

  grid.innerHTML = filtered.map((p, idx) => `
    <div class="project-card${idx === 0 ? ' reveal-on-scroll' : ''}">
      <div class="project-img-wrap" onclick="openCaseStudyModal('${p.id}')" style="cursor: pointer;">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="project-category-badge">${p.sector}</div>
      </div>
      <div class="project-info">
        <div class="project-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${p.location}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-meta-pills">
          <span class="meta-pill">📅 ${p.year}</span>
          <span class="meta-pill">🏢 ${p.client.split('(')[0]}</span>
        </div>
        <div class="project-card-action">
          <button class="view-case-btn" onclick="openCaseStudyModal('${p.id}')">
            View Case Study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER SECTORS & PILLARS
   ========================================================================== */
function renderSectors() {
  const grid = document.getElementById("sectorsGrid");
  if (!grid) return;

  grid.innerHTML = LAFIZ_DATA.sectors.map((sec, idx) => `
    <div class="sector-item${idx < 4 ? ' reveal-on-scroll' : ''}">
      <span class="sector-badge-count">${sec.count}</span>
      <h3 class="sector-name">${sec.title}</h3>
      <p class="sector-desc">${sec.desc}</p>
    </div>
  `).join("");
}

function renderPillars() {
  const grid = document.getElementById("pillarsGrid");
  if (!grid) return;

  grid.innerHTML = LAFIZ_DATA.values.map((v, idx) => `
    <div class="pillar-card${idx === 0 ? ' reveal-on-scroll' : ''}">
      <div class="pillar-icon-box">0${idx + 1}</div>
      <h3 class="pillar-title">${v.title}</h3>
      <p class="pillar-desc">${v.desc}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   MODAL CONTROLLER (Case Study, CAD Blueprint & Proposal)
   ========================================================================== */
function initModals() {
  const modalBackdrop = document.getElementById("mainModalBackdrop");
  const modalClose = document.getElementById("modalCloseBtn");
  let touchStartY = 0;

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  // Touch swipe down to close modal
  const modalDialog = document.getElementById("mainModalDialog");
  if (modalDialog) {
    modalDialog.addEventListener("touchstart", (e) => {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    modalDialog.addEventListener("touchmove", (e) => {
      const touchY = e.changedTouches[0].screenY;
      if (touchY - touchStartY > 80) {
        closeModal();
      }
    }, { passive: true });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function closeModal() {
  const modalBackdrop = document.getElementById("mainModalBackdrop");
  const modalDialog = document.getElementById("mainModalDialog");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (modalDialog) modalDialog.className = "modal-dialog";
    }, 300);
  }
}

// Open Project Case Study Modal
window.openCaseStudyModal = function(projectId) {
  const project = LAFIZ_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById("mainModalBackdrop");
  const modalDialog = document.getElementById("mainModalDialog");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalDialog.className = "modal-dialog";
  modalTitle.textContent = project.title;

  modalContent.innerHTML = `
    <div class="case-study-modal-content">
      <div class="case-hero-img" style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 420px; object-fit: cover;">
      </div>
      
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 32px; margin-bottom: 30px;">
        <div>
          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--primary);">Project Overview</h4>
          <p style="margin-bottom: 20px; color: var(--text-body); line-height: 1.7;">${project.summary}</p>
          
          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--primary);">The Engineering Challenge</h4>
          <p style="margin-bottom: 20px; color: var(--text-body); line-height: 1.7;">${project.challenge}</p>

          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--primary);">LAFIZ Technical Approach</h4>
          <p style="margin-bottom: 20px; color: var(--text-body); line-height: 1.7;">${project.solution}</p>

          <h4 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--primary);">Delivered Outcome</h4>
          <p style="color: var(--text-body); line-height: 1.7;">${project.outcome}</p>
        </div>

        <div style="background: var(--bg-light); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; height: fit-content;">
          <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">Project Specifications</h5>
          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">SECTOR</div>
            <div style="font-weight: 700; color: var(--text-dark);">${project.sector}</div>
          </div>
          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">CLIENT</div>
            <div style="font-weight: 700; color: var(--text-dark);">${project.client}</div>
          </div>
          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">LOCATION</div>
            <div style="font-weight: 700; color: var(--text-dark);">${project.location}</div>
          </div>
          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">TIMELINE</div>
            <div style="font-weight: 700; color: var(--text-dark);">${project.year}</div>
          </div>
          <div>
            <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600;">SERVICES DELIVERED</div>
            <div style="font-weight: 600; font-size: 0.88rem; color: var(--primary);">${project.scope}</div>
          </div>
        </div>
      </div>

      <div style="text-align: right; border-top: 1px solid var(--border); padding-top: 20px;">
        <button class="btn btn-primary" onclick="openProposalModal('${project.title}')">
          Inquire About Similar Project
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Open CAD Blueprint Modal
window.openCadModal = function(cadId) {
  const item = LAFIZ_DATA.cadBlueprints.find(c => c.id === cadId);
  if (!item) return;

  const modalBackdrop = document.getElementById("mainModalBackdrop");
  const modalDialog = document.getElementById("mainModalDialog");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalDialog.className = "modal-dialog cad-modal";
  modalTitle.textContent = `${item.title} (${item.sheet})`;

  modalContent.innerHTML = `
    <div>
      <div class="cad-modal-img-wrap">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <div style="color: #FF6B6B; font-weight: 700; font-size: 0.85rem; margin-bottom: 4px;">${item.category} • ${item.project}</div>
          <p style="color: #CBD5E1; font-size: 0.95rem; max-width: 700px;">${item.description}</p>
        </div>
        <div>
          <a href="${item.image}" target="_blank" class="btn btn-secondary btn-sm" download>
            Download Blueprint (JPG)
          </a>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Open Proposal Modal
window.openProposalModal = function(presetService = "") {
  const modalBackdrop = document.getElementById("mainModalBackdrop");
  const modalDialog = document.getElementById("mainModalDialog");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modalDialog.className = "modal-dialog";
  modalTitle.textContent = "Request a Technical Proposal";

  modalContent.innerHTML = `
    <form id="modalProposalForm" onsubmit="handleProposalSubmit(event)" action="https://formsubmit.co/lafiz.cc@gmail.com" method="POST">
      <!-- FormSubmit.co config -->
      <input type="hidden" name="_subject" value="New Proposal Request – LAFIZ Website">
      <input type="hidden" name="_captcha" value="true">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_next" value="">
      <input type="text" name="_honey" style="display:none">

      <p style="color: var(--text-muted); margin-bottom: 24px;">
        Provide details regarding your upcoming architectural, structural, or construction project. Our lead engineers will review and respond within 24 hours.
      </p>

      <div class="form-row">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" name="name" class="form-control" required placeholder="e.g. Engr. Tanvir Ahmed">
        </div>
        <div class="form-group">
          <label>Organization / Firm</label>
          <input type="text" name="organization" class="form-control" placeholder="Company / Client Name">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Phone Number *</label>
          <input type="tel" name="phone" class="form-control" required placeholder="+880 17XXXXXXXX">
        </div>
        <div class="form-group">
          <label>Email Address *</label>
          <input type="email" name="email" class="form-control" required placeholder="name@domain.com">
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Service Domain *</label>
          <select name="service" class="form-control" required>
            <option value="Consultancy" ${presetService.includes('Consultancy') ? 'selected' : ''}>Architectural & Engineering Consultancy</option>
            <option value="Construction" ${presetService.includes('Construction') ? 'selected' : ''}>Civil & Building Construction</option>
            <option value="Renovation" ${presetService.includes('Renovation') ? 'selected' : ''}>Renovation & Structural Retrofitting</option>
            <option value="Interior" ${presetService.includes('Interior') ? 'selected' : ''}>Commercial & Residential Interior Design</option>
            <option value="CAD" ${presetService.includes('CAD') ? 'selected' : ''}>Technical CAD & Regulatory Approval</option>
          </select>
        </div>
        <div class="form-group">
          <label>Project Location</label>
          <input type="text" name="location" class="form-control" placeholder="e.g. Dhaka, Gazipur, Chittagong">
        </div>
      </div>

      <div class="form-group">
        <label>Brief Project Description & Requirements *</label>
        <textarea name="message" class="form-control" rows="4" required placeholder="Provide project scale, floor area, structural requirements, or target timeline..."></textarea>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 14px; margin-top: 24px;">
        <button type="button" class="btn btn-outline-dark" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit Proposal Request</button>
      </div>
    </form>
  `;

  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
};

/* ==========================================================================
   FORM HANDLERS
   ========================================================================== */
function initForms() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          contactForm.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 18px auto;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 style="font-size: 1.4rem; margin-bottom: 8px;">Message Received</h3>
              <p style="color: var(--text-muted); max-width: 440px; margin: 0 auto 20px auto;">
                Thank you for contacting LAFIZ Construction & Consultant. Your inquiry has been delivered to our engineering office. Our team will respond within 24 hours.
              </p>
              <p style="font-size: 0.88rem; color: var(--text-dark); font-weight: 600;">
                Urgent inquiries: <a href="tel:+8801718581900" style="color: var(--primary);">+880 1718581900</a>
              </p>
            </div>
          `;
        } else {
          throw new Error("Submission failed");
        }
      } catch (err) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        alert("Something went wrong. Please try again or call us directly at +880 1718581900.");
      }
    });
  }
}

window.handleProposalSubmit = async function(e) {
  e.preventDefault();
  const form = document.getElementById("modalProposalForm");
  if (!form) return;

  const submitBtn = form.querySelector("button[type='submit']");
  const originalText = submitBtn ? submitBtn.textContent : "";
  if (submitBtn) { submitBtn.textContent = "Submitting..."; submitBtn.disabled = true; }

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      form.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto;">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Proposal Request Submitted</h3>
          <p style="color: var(--text-muted); line-height: 1.6; max-width: 480px; margin: 0 auto 24px auto;">
            Your proposal request has been delivered to our Project Planning & Estimation Department. A formal response and consultation slot will be confirmed within 24 hours.
          </p>
          <p style="font-size: 0.88rem; color: var(--text-dark); font-weight: 600; margin-bottom: 16px;">
            Urgent inquiries: <a href="tel:+8801718581900" style="color: var(--primary);">+880 1718581900</a>
          </p>
          <button class="btn btn-primary" onclick="closeModal()">Done</button>
        </div>
      `;
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    if (submitBtn) { submitBtn.textContent = originalText; submitBtn.disabled = false; }
    alert("Something went wrong. Please try again or call us directly at +880 1718581900.");
  }
};

/* ==========================================================================
   SCROLL REVEALS
   ========================================================================== */
function initScrollReveals() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
