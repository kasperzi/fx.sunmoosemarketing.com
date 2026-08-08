function initCountrySelect(root, opts) {
  opts = opts || {};
  if (!root) return null;

  const toggle = root.querySelector('.country-toggle');
  const dropdown = root.querySelector('.country-dropdown');
  const search = root.querySelector('.country-search input');
  const list = root.querySelector('.country-list');
  const empty = root.querySelector('.country-empty');
  const valueEl = root.querySelector('.select-value');
  const options = Array.from(list.querySelectorAll('.country-option'));

  function isOpen() {
    return root.classList.contains('is-open');
  }

  function open() {
    root.classList.add('is-open');
    dropdown.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    if (search) {
      search.value = '';
      filterOptions('');
      search.focus();
    }
  }

  function close() {
    root.classList.remove('is-open');
    dropdown.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function filterOptions(query) {
    const q = query.trim().toLowerCase();
    let visibleCount = 0;
    options.forEach((opt) => {
      const matches = opt.dataset.name.toLowerCase().includes(q);
      opt.hidden = !matches;
      if (matches) visibleCount++;
    });
    if (empty) empty.hidden = visibleCount !== 0;
  }

  function selectOption(opt) {
    options.forEach((o) => o.classList.remove('country-option--selected'));
    opt.classList.add('country-option--selected');
    valueEl.textContent = opt.dataset.name;

    const flagEl = root.querySelector('.flag');
    if (flagEl && opt.dataset.code) {
      const img = document.createElement('img');
      img.src = 'https://flagcdn.com/w160/' + opt.dataset.code.toLowerCase() + '.png';
      img.width = 20;
      img.height = 15;
      img.alt = '';
      img.className = 'flag';
      if (flagEl.id) img.id = flagEl.id;
      flagEl.replaceWith(img);
    }

    close();
    if (opts.onSelect) opts.onSelect(opt);
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen() ? close() : open();
  });

  if (search) search.addEventListener('input', () => filterOptions(search.value));

  list.addEventListener('click', (e) => {
    const opt = e.target.closest('.country-option');
    if (opt) selectOption(opt);
  });

  document.addEventListener('click', (e) => {
    if (isOpen() && !root.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close();
  });

  return {
    selectByCode: function(code) {
      var opt = options.find(function(o) { return o.dataset.code === code; });
      if (opt) selectOption(opt);
    },
    getSelectedCode: function() {
      var sel = options.find(function(o) { return o.classList.contains('country-option--selected'); });
      return sel ? sel.dataset.code : null;
    }
  };
}

var countrySelectCtrl = initCountrySelect(document.getElementById('countrySelect'));
initCountrySelect(document.getElementById('languageSelect'));
var panelCountryCtrl = initCountrySelect(document.getElementById('panelCountrySelect'));
initCountrySelect(document.getElementById('filterCountrySelect'));
initCountrySelect(document.getElementById('wizardCountrySelect'));
initCountrySelect(document.getElementById('reviewCountrySelect'));

// Initialize country selects from saved preference or IP detection
// localStorage.fx_country_pref = user explicitly confirmed (permanent)
// sessionStorage.fx_country    = IP-detected this session (only saved if real detection succeeded)
// window.__fxCountry           = Promise started in <head> script before page renders
(function initCountryFromStorage() {
  try { localStorage.removeItem('fx_country'); } catch(e) {} // remove old stale key

  var pref = null, session = null;
  try { pref = localStorage.getItem('fx_country_pref'); } catch(e) {}
  try { session = sessionStorage.getItem('fx_country'); } catch(e) {}

  function isValidCode(code) {
    return code && code.length === 2 && /^[A-Z]{2}$/.test(code);
  }

  function applyCode(code) {
    if (!isValidCode(code)) return;
    if (panelCountryCtrl) panelCountryCtrl.selectByCode(code);
    if (countrySelectCtrl) countrySelectCtrl.selectByCode(code);
  }

  function saveAndApply(code) {
    if (!isValidCode(code)) return;
    try { sessionStorage.setItem('fx_country', code); } catch(e) {}
    applyCode(code);
  }

  // Client-side fallback: ask ipapi.co directly (works even when server can't see real IP)
  function detectClientSide() {
    fetch('https://ipapi.co/country/')
      .then(function(r) { return r.text(); })
      .then(function(text) {
        var code = text.trim().toUpperCase();
        if (isValidCode(code)) saveAndApply(code);
      })
      .catch(function() {});
  }

  if (pref) {
    // User explicitly chose a country — always honour it
    applyCode(pref.toUpperCase());
  } else if (session) {
    // IP-detected this session — apply without re-detecting
    applyCode(session.toUpperCase());
  } else {
    // No preference and no session — detect via server, fall back to client-side
    var promise = window.__fxCountry || fetch('/api/country').then(function(r) { return r.json(); }).then(function(d) { return d.country ? d.country.toUpperCase() : null; });
    promise.then(function(code) {
      if (isValidCode(code)) {
        saveAndApply(code);
      } else {
        // Server couldn't detect (private IP behind proxy) — try directly from browser
        detectClientSide();
      }
    }).catch(function() {
      detectClientSide();
    });
  }
})();

function initBrokerSelect(root) {
  if (!root) return;

  const toggle = root.querySelector('.broker-toggle');
  const dropdown = root.querySelector('.broker-dropdown');
  const search = root.querySelector('.country-search input');
  const list = root.querySelector('.broker-list');
  const empty = root.querySelector('.country-empty');
  const valueEl = root.querySelector('.select-value');
  const iconEl = root.querySelector('.broker-toggle__icon');
  const options = Array.from(list.querySelectorAll('.broker-option'));

  function isOpen() {
    return root.classList.contains('is-open');
  }

  function open() {
    root.classList.add('is-open');
    dropdown.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    if (search) {
      search.value = '';
      filterOptions('');
      search.focus();
    }
  }

  function close() {
    root.classList.remove('is-open');
    dropdown.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function filterOptions(query) {
    const q = query.trim().toLowerCase();
    let visibleCount = 0;
    options.forEach((opt) => {
      const matches = opt.dataset.name.toLowerCase().includes(q);
      opt.hidden = !matches;
      if (matches) visibleCount++;
    });
    if (empty) empty.hidden = visibleCount !== 0;
  }

  function selectOption(opt) {
    options.forEach((o) => o.classList.remove('country-option--selected'));
    opt.classList.add('country-option--selected');
    valueEl.textContent = opt.dataset.name;
    valueEl.classList.remove('broker-toggle__placeholder');
    if (iconEl && opt.dataset.logo) {
      iconEl.src = opt.dataset.logo;
      iconEl.className = 'broker-option__logo';
    }
    close();
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen() ? close() : open();
  });

  if (search) search.addEventListener('input', () => filterOptions(search.value));

  list.addEventListener('click', (e) => {
    const opt = e.target.closest('.broker-option');
    if (opt) selectOption(opt);
  });

  document.addEventListener('click', (e) => {
    if (isOpen() && !root.contains(e.target)) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close();
  });
}

initBrokerSelect(document.getElementById('compareFirstBroker'));
initBrokerSelect(document.getElementById('compareSecondBroker'));

const navDropdowns = [];

function initHoverPinWidget({ widget, toggle, panel, onOpen, onClose }) {
  if (!widget) return null;

  let pinned = false;
  let closeTimer = null;

  function isOpen() {
    return widget.classList.contains('is-open');
  }

  function show() {
    clearTimeout(closeTimer);
    navDropdowns.forEach((other) => {
      if (other.isOpen !== isOpen && other.isOpen()) other.hide();
    });
    widget.classList.add('is-open');
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    if (onOpen) onOpen();
  }

  function hide() {
    widget.classList.remove('is-open');
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    pinned = false;
    if (onClose) onClose();
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (pinned) {
      hide();
    } else {
      pinned = true;
      show();
    }
  });

  // Hover-to-open only when the pointer actually supports hovering (mouse/trackpad)
  // AND the layout is at desktop width. Checked live on every event (not just once
  // at load) so shrinking/resizing the browser window switches to click-only too.
  function hoverAllowed() {
    return window.matchMedia('(hover: hover)').matches && window.matchMedia('(min-width: 701px)').matches;
  }

  widget.addEventListener('mouseenter', () => {
    if (!pinned && hoverAllowed()) show();
  });

  widget.addEventListener('mouseleave', () => {
    if (pinned || !hoverAllowed()) return;
    closeTimer = setTimeout(() => {
      if (!pinned) hide();
    }, 150);
  });

  document.addEventListener('click', (e) => {
    if (isOpen() && !widget.contains(e.target) && !panel.contains(e.target)) hide();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) hide();
  });

  const controls = { show, hide, isOpen };
  navDropdowns.push(controls);
  return controls;
}

(function initLangWidget() {
  const widget = document.getElementById('langWidget');
  if (!widget) return;

  const toggle = document.getElementById('langWidgetToggle');
  const panel = document.getElementById('langPanel');
  const icon = toggle.querySelector('img');

  function isMobile() {
    return window.matchMedia('(max-width: 700px)').matches;
  }

  let closeBtn = panel.querySelector('.lang-panel__close');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lang-panel__close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';
    panel.prepend(closeBtn);
  }

  let backdrop = document.getElementById('langPanelBackdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'langPanelBackdrop';
    backdrop.className = 'lang-panel-backdrop';
    backdrop.hidden = true;
    document.body.appendChild(backdrop);
  }

  const controls = initHoverPinWidget({
    widget,
    toggle,
    panel,
    onOpen: () => {
      if (icon) icon.src = 'assets/images/icon-globe-active.svg';
      backdrop.hidden = false;
      if (isMobile()) {
        // On mobile: move panel to body so its z-index beats the backdrop.
        document.body.appendChild(panel);
        document.body.style.overflow = 'hidden';
      }
      // On desktop: panel stays inside .lang-widget and is positioned via CSS
      // (position: absolute; top: calc(100% + 40px); right: 0) — no JS needed.
    },
    onClose: () => {
      if (icon) icon.src = 'assets/images/icon-globe.svg';
      backdrop.hidden = true;
      document.body.style.overflow = '';
      if (isMobile() && panel.parentElement === document.body) {
        // Move panel back inside lang-widget so CSS positions it correctly on desktop.
        widget.appendChild(panel);
      }
    },
  });

  closeBtn.addEventListener('click', controls.hide);

  const confirmBtn = panel.querySelector('.lang-panel__confirm');
  if (confirmBtn && controls) {
    confirmBtn.addEventListener('click', function() {
      var code = panelCountryCtrl ? panelCountryCtrl.getSelectedCode() : null;
      if (code) {
        try { localStorage.setItem('fx_country_pref', code); } catch(e) {}
        try { sessionStorage.setItem('fx_country', code); } catch(e) {}
        window.dispatchEvent(new CustomEvent('fx:countryChange', { detail: code }));
        // Also sync the hero form country select
        if (countrySelectCtrl) countrySelectCtrl.selectByCode(code);
      }
      controls.hide();
    });
  }
})();

(function initNavMega() {
  const widget = document.getElementById('brokerReviewsMega');
  if (!widget) return;

  initHoverPinWidget({
    widget,
    toggle: document.getElementById('brokerReviewsToggle'),
    panel: document.getElementById('brokerReviewsPanel'),
  });
})();

(function initFiltersWidget() {
  const widget = document.getElementById('filtersWidget');
  if (!widget) return;

  initHoverPinWidget({
    widget,
    toggle: document.getElementById('filtersToggle'),
    panel: document.getElementById('filtersPanel'),
  });
})();

(function () {
  document.querySelectorAll('.pill-row').forEach((row) => {
    row.addEventListener('click', (e) => {
      const pill = e.target.closest('.pill');
      if (!pill || !row.contains(pill)) return;
      row.querySelectorAll('.pill').forEach((p) => p.classList.remove('pill--active'));
      pill.classList.add('pill--active');
    });
  });
})();

(function initFaqAccordion() {
  const grid = document.querySelector('.faq-grid');
  if (!grid) return;
  const items = Array.from(grid.querySelectorAll('.faq-item'));

  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const wasOpen = item.classList.contains('is-open');
      items.forEach((i) => i.classList.remove('is-open'));
      if (!wasOpen) item.classList.add('is-open');
    });
  });
})();

(function initFiltersAccordion() {
  const list = document.querySelector('.filters-list');
  if (!list) return;

  list.querySelectorAll('.filters-item').forEach((item) => {
    const row = item.querySelector('.filters-row');
    const content = item.querySelector('.filters-content');
    if (!row || !content) return;

    row.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.classList.toggle('is-open', !isOpen);
      content.hidden = isOpen;
    });
  });
})();

(function initDepositRange() {
  const min = document.getElementById('depositRangeMin');
  const max = document.getElementById('depositRangeMax');
  const fill = document.getElementById('depositRangeFill');
  const minLabel = document.getElementById('depositRangeMinLabel');
  const maxLabel = document.getElementById('depositRangeMaxLabel');
  if (!min || !max || !fill) return;

  function pct(input) {
    const range = parseInt(input.max, 10) - parseInt(input.min, 10);
    return ((parseInt(input.value, 10) - parseInt(input.min, 10)) / range) * 100;
  }

  function update() {
    let minVal = parseInt(min.value, 10);
    let maxVal = parseInt(max.value, 10);
    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal];
    }

    const leftPct = pct(min);
    const rightPct = pct(max);
    fill.style.left = leftPct + '%';
    fill.style.width = (rightPct - leftPct) + '%';

    if (minLabel) {
      minLabel.style.left = leftPct + '%';
      minLabel.textContent = '$' + minVal;
    }
    if (maxLabel) {
      maxLabel.style.left = rightPct + '%';
      maxLabel.textContent = '$' + maxVal + '+';
    }
  }

  min.addEventListener('input', update);
  max.addEventListener('input', update);
  update();
})();

(function initMiniDropdowns() {
  document.querySelectorAll('[data-mini-dropdown]').forEach((widget) => {
    const toggle = widget.querySelector('.mini-dropdown__toggle');
    const panel = widget.querySelector('.mini-dropdown__panel');
    const label = widget.querySelector('.mini-dropdown__label');
    if (!toggle || !panel) return;

    function close() {
      widget.classList.remove('is-open');
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    function open() {
      widget.classList.add('is-open');
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      widget.classList.contains('is-open') ? close() : open();
    });

    panel.addEventListener('click', (e) => {
      const opt = e.target.closest('.mini-dropdown__option');
      if (!opt) return;
      panel.querySelectorAll('.mini-dropdown__option').forEach((o) => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      if (label) label.textContent = opt.textContent;
      close();
    });

    document.addEventListener('click', (e) => {
      if (widget.classList.contains('is-open') && !widget.contains(e.target)) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && widget.classList.contains('is-open')) close();
    });
  });
})();

(function initWizard() {
  const card = document.querySelector('.wizard-card');
  if (!card) return;

  const steps = Array.from(card.querySelectorAll('.wizard-step'));
  const panels = Array.from(card.querySelectorAll('.wizard-content'));
  const backBtn = card.querySelector('.wizard-actions__back');
  const nextBtn = card.querySelector('.wizard-actions__next');
  const actionsRow = card.querySelector('.wizard-actions');
  let current = 1;

  function render() {
    steps.forEach((s) => {
      const n = parseInt(s.dataset.step, 10);
      s.classList.toggle('is-active', n === current);
      s.classList.toggle('is-done', n < current);
    });
    panels.forEach((p) => {
      p.hidden = parseInt(p.dataset.panel, 10) !== current;
    });
    backBtn.classList.toggle('is-invisible', current === 1);
    actionsRow.hidden = current === 7;
  }

  nextBtn.addEventListener('click', () => {
    if (current < 7) {
      current++;
      render();
      card.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });

  backBtn.addEventListener('click', () => {
    if (current > 1) {
      current--;
      render();
      card.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });

  card.querySelectorAll('[data-adjust-answers]').forEach((btn) => {
    btn.addEventListener('click', () => {
      current = 1;
      render();
      card.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  });

  function setOptionSelected(opt, selected) {
    opt.classList.toggle('is-selected', selected);
    const icon = opt.querySelector('.wizard-option__icon');
    if (icon) icon.src = 'assets/images/icon-circle-' + (selected ? 'dot' : 'big') + '.svg';
  }

  card.querySelectorAll('.wizard-option-list').forEach((list) => {
    const multi = list.dataset.multi === 'true';
    list.addEventListener('click', (e) => {
      const opt = e.target.closest('.wizard-option');
      if (!opt || !list.contains(opt)) return;
      if (multi) {
        setOptionSelected(opt, !opt.classList.contains('is-selected'));
      } else {
        list.querySelectorAll('.wizard-option').forEach((o) => setOptionSelected(o, o === opt));
      }
    });
  });

  render();
})();

(function initOnPageNav() {
  const nav = document.querySelector('.rv-onpage');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('.rv-onpage__link'));
  const sections = links
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  function setActive(id) {
    links.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
})();

(function initMobileNavPanel() {
  const toggle = document.getElementById('mobileMenuToggle');
  const panel = document.getElementById('mobileNavPanel');
  if (!toggle || !panel) return;

  const closeBtn = panel.querySelector('.mobile-nav-panel__close');
  const screens = panel.querySelectorAll('.mobile-nav-panel__screen');
  const mainScreen = panel.querySelector('[data-nav-screen="main"]');

  function showScreen(target) {
    screens.forEach((s) => {
      s.hidden = s !== target;
    });
  }

  function open() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    showScreen(mainScreen);
  }

  function close() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    if (panel.hidden) open();
    else close();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  panel.querySelectorAll('[data-nav-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.getAttribute('data-nav-open'));
      if (target) showScreen(target);
    });
  });

  panel.querySelectorAll('[data-nav-back]').forEach((btn) => {
    btn.addEventListener('click', () => showScreen(mainScreen));
  });
})();

function initCardCarousel(track, cardSelector, prevBtn, nextBtn) {
  if (!track) return;

  function pageStep() {
    const card = track.querySelector(cardSelector);
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const cardWidth = card.getBoundingClientRect().width + gap;
    const visibleCards = Math.max(1, Math.round(track.clientWidth / cardWidth));
    return cardWidth * visibleCards;
  }

  function updateButtons() {
    if (!prevBtn || !nextBtn) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.disabled = track.scrollLeft <= 1;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -pageStep(), behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: pageStep(), behavior: 'smooth' });
    });
  }

  track.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  updateButtons();

  // Autoplay: on mobile, auto-advance one card at a time and loop back at the end.
  let autoplayTimer = null;
  function isMobile() {
    return window.matchMedia('(max-width: 700px)').matches;
  }
  function advance() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 1) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: pageStep(), behavior: 'smooth' });
    }
  }
  function startAutoplay() {
    if (autoplayTimer || !isMobile()) return;
    autoplayTimer = setInterval(advance, 4000);
  }
  function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
  window.addEventListener('resize', () => {
    if (isMobile()) startAutoplay();
    else stopAutoplay();
  });
  startAutoplay();

  // Drag-to-scroll for mouse only. Touch/pen keep native scrolling (overflow-x:
  // auto + scroll-snap already handles swipe) — iOS Safari's pointer capture
  // fights the native touch-scroll gesture, which is what broke swipe there.
  let isDragging = false;
  let dragMoved = false;
  let dragStartX = 0;
  let dragScrollStart = 0;

  track.addEventListener('pointerdown', (e) => {
    stopAutoplay();
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    isDragging = true;
    dragMoved = false;
    dragStartX = e.clientX;
    dragScrollStart = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
    track.classList.add('is-dragging');
  });
  track.addEventListener('touchstart', stopAutoplay, { passive: true });

  track.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 4) dragMoved = true;
    track.scrollLeft = dragScrollStart - dx;
  });

  function snapToNearestCard() {
    const card = track.querySelector(cardSelector);
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    const cardWidth = card.getBoundingClientRect().width + gap;
    if (!cardWidth) return;
    const index = Math.round(track.scrollLeft / cardWidth);
    const maxScroll = track.scrollWidth - track.clientWidth;
    const target = Math.min(maxScroll, Math.max(0, index * cardWidth));
    track.scrollTo({ left: target, behavior: 'smooth' });
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
    if (dragMoved) snapToNearestCard();
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  // Suppress the click on "Visit Broker" / "Read Review" etc. if the pointer actually dragged.
  track.addEventListener(
    'click',
    (e) => {
      if (dragMoved) {
        e.preventDefault();
        e.stopPropagation();
        dragMoved = false;
      }
    },
    true
  );
}

initCardCarousel(
  document.getElementById('brokerCarousel'),
  '.broker-card',
  document.getElementById('brokerCarouselPrev'),
  document.getElementById('brokerCarouselNext')
);

document.querySelectorAll('.blog-cards').forEach((track) => {
  initCardCarousel(track, '.blog-card');
});

initCardCarousel(document.getElementById('relatedCarousel'), '.rv-related-card');

(function initViewToggle() {
  document.querySelectorAll('.view-toggle').forEach((toggle) => {
    const buttons = Array.from(toggle.querySelectorAll('button'));
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn || !buttons.includes(btn)) return;
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });
})();

(function initProsConsToggle() {
  document.querySelectorAll('.rv-proscons-toggle').forEach((toggle) => {
    const panel = toggle.closest('.rv-block') || document;
    const buttons = Array.from(toggle.querySelectorAll('.rv-proscons-toggle__btn'));
    const cols = Array.from(panel.querySelectorAll('.rv-proscons__col'));
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('.rv-proscons-toggle__btn');
      if (!btn || !buttons.includes(btn)) return;
      const target = btn.getAttribute('data-proscons-target');
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      cols.forEach((col) => col.classList.toggle('is-active', col.getAttribute('data-proscons-panel') === target));
    });
  });
})();

(function initFeeTableToggle() {
  document.querySelectorAll('.rv-fee-toggle').forEach((toggle) => {
    const table = toggle.closest('.rv-block')?.querySelector('.rv-fee-table');
    if (!table) return;
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('.rv-proscons-toggle__btn');
      if (!btn) return;
      table.classList.toggle('show-note', btn.getAttribute('data-fee-target') === 'note');
    });
  });
})();

(function initFilterChips() {
  document.querySelectorAll('.filter-chips').forEach((row) => {
    row.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.filter-chip button');
      if (removeBtn) {
        removeBtn.closest('.filter-chip').remove();
        return;
      }
      if (e.target.closest('.filter-chips__clear')) {
        row.querySelectorAll('.filter-chip').forEach((chip) => chip.remove());
      }
    });
  });
})();

(function initSimpleSelects() {
  document.querySelectorAll('.simple-select').forEach((wrap) => {
    const toggle = wrap.querySelector('.simple-select__toggle');
    const value = wrap.querySelector('.simple-select__value');
    const list = wrap.querySelector('.simple-select__list');
    if (!toggle || !list) return;
    function close() {
      wrap.classList.remove('is-open');
      list.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', () => {
      const isOpen = wrap.classList.contains('is-open');
      if (isOpen) {
        close();
      } else {
        wrap.classList.add('is-open');
        list.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
    list.querySelectorAll('.simple-select__option').forEach((opt) => {
      opt.addEventListener('click', () => {
        list.querySelectorAll('.simple-select__option').forEach((o) => o.classList.remove('simple-select__option--selected'));
        opt.classList.add('simple-select__option--selected');
        value.textContent = opt.textContent.trim();
        close();
      });
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) close();
    });
  });
})();

(function initFooterAccordion() {
  document.querySelectorAll('.footer__col').forEach((col) => {
    const toggle = col.querySelector('.footer__col-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      col.classList.toggle('is-open');
    });
  });
})();

(function initStatCounters() {
  var els = document.querySelectorAll('.stat__number[data-count-to]');
  if (!els.length) return;

  function animateCounter(el) {
    var target = parseFloat(el.dataset.countTo);
    var suffix = el.dataset.suffix || '';
    var decimals = parseInt(el.dataset.decimals || '0', 10);
    var duration = 1200;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;
      el.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  els.forEach(function(el) { observer.observe(el); });
})();
