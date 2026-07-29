// Scroll-reveal: fade+rise each `.reveal` element in with a small stagger.
function initReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.setAttribute("data-visible", "true"));
    return;
  }

  const groups = new Map<Element | null, HTMLElement[]>();
  for (const el of items) {
    const parent = el.parentElement;
    const list = groups.get(parent) ?? [];
    list.push(el);
    groups.set(parent, list);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const siblings = groups.get(el.parentElement) ?? [el];
        const index = siblings.indexOf(el);
        el.style.animationDelay = `${Math.min(index, 8) * 90}ms`;
        el.setAttribute("data-visible", "true");
        observer.unobserve(el);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

// Spotlight cards: track pointer position as CSS custom properties.
function initSpotlight() {
  const cards = document.querySelectorAll<HTMLElement>(".spotlight");
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });
  });
}

// Mobile menu open/close + close-on-link-click.
function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");
  if (!toggle || !panel) return;

  const setOpen = (open: boolean) => {
    panel.dataset.open = String(open);
    toggle.setAttribute("aria-expanded", String(open));
    document.documentElement.style.overflow = open ? "hidden" : "";
  };

  toggle.addEventListener("click", () => {
    setOpen(panel.dataset.open !== "true");
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

// Theme toggle: flips `.light` on <html> and persists the choice.
function initThemeToggle() {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.toggle("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  });
}

// Active section highlight in the nav while scrolling.
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));
  if (!links.length) return;

  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.split("#")[1];
      return id ? document.getElementById(id) : null;
    })
    .filter((el): el is HTMLElement => Boolean(el));

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link) => {
          const active = link.getAttribute("href")?.endsWith(`#${entry.target.id}`);
          link.toggleAttribute("data-active", Boolean(active));
        });
      }
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// Hero terminal line: type, pause, delete, move to the next line.
function initTypewriter() {
  const el = document.querySelector<HTMLElement>("[data-typewriter]");
  if (!el) return;

  let lines: string[] = [];
  try {
    lines = JSON.parse(el.dataset.typewriter ?? "[]");
  } catch {
    return;
  }
  if (!lines.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = lines[0];
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = lines[lineIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
      setTimeout(tick, 38);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 22);
    }
  };

  tick();
}

// Contact form: submit via fetch, no page reload, with loading/success/error states.
function initContactForm() {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const submitLabel = form.querySelector<HTMLElement>("[data-submit-label]");
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const idleLabel = submitLabel?.textContent ?? "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const payload = Object.fromEntries(new FormData(form).entries());
    button?.setAttribute("disabled", "true");
    if (submitLabel) submitLabel.textContent = form.dataset.sending ?? idleLabel;
    if (status) {
      status.textContent = "";
      status.removeAttribute("data-state");
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("request failed");
      if (status) {
        status.textContent = form.dataset.success ?? "";
        status.dataset.state = "success";
      }
      form.reset();
    } catch {
      if (status) {
        status.textContent = form.dataset.error ?? "";
        status.dataset.state = "error";
      }
    } finally {
      button?.removeAttribute("disabled");
      if (submitLabel) submitLabel.textContent = idleLabel;
    }
  });
}

function initAll() {
  initReveal();
  initSpotlight();
  initMobileMenu();
  initThemeToggle();
  initScrollSpy();
  initTypewriter();
  initContactForm();
}

document.addEventListener("astro:page-load", initAll);
