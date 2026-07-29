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

// Stack graph: draggable category nodes with SVG edges + synced legend cards.
function initStackGraph() {
  const root = document.querySelector<HTMLElement>("[data-stack-graph]");
  if (!root) return;

  const nodes = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-node]"));
  const lines = Array.from(root.querySelectorAll<SVGLineElement>("line[data-edge]"));
  const legendCards = Array.from(document.querySelectorAll<HTMLElement>("[data-legend]"));
  if (!nodes.length) return;

  const center = (node: HTMLElement) => {
    const rect = node.getBoundingClientRect();
    const parentRect = root.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - parentRect.left,
      y: rect.top + rect.height / 2 - parentRect.top
    };
  };

  const updateEdges = () => {
    for (const line of lines) {
      const [a, b] = (line.dataset.edge ?? "").split("-").map(Number);
      const nodeA = nodes[a];
      const nodeB = nodes[b];
      if (!nodeA || !nodeB) continue;
      const posA = center(nodeA);
      const posB = center(nodeB);
      line.setAttribute("x1", String(posA.x));
      line.setAttribute("y1", String(posA.y));
      line.setAttribute("x2", String(posB.x));
      line.setAttribute("y2", String(posB.y));
    }
  };

  const setActive = (index: number | null) => {
    nodes.forEach((node, i) => node.toggleAttribute("data-active", i === index));
    legendCards.forEach((card, i) => card.toggleAttribute("data-active", i === index));
    lines.forEach((line) => {
      const [a, b] = (line.dataset.edge ?? "").split("-").map(Number);
      line.toggleAttribute("data-active", index !== null && (a === index || b === index));
    });
  };

  nodes.forEach((node, index) => {
    let dragging = false;

    node.addEventListener("pointerenter", () => setActive(index));
    node.addEventListener("focus", () => setActive(index));
    node.addEventListener("pointerleave", () => {
      if (!dragging) setActive(null);
    });
    node.addEventListener("blur", () => setActive(null));

    node.addEventListener("pointerdown", (event) => {
      dragging = true;
      node.setPointerCapture(event.pointerId);
    });

    node.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const parentRect = root.getBoundingClientRect();
      const x = Math.min(96, Math.max(4, ((event.clientX - parentRect.left) / parentRect.width) * 100));
      const y = Math.min(94, Math.max(6, ((event.clientY - parentRect.top) / parentRect.height) * 100));
      node.style.left = `${x}%`;
      node.style.top = `${y}%`;
      updateEdges();
    });

    const release = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      node.releasePointerCapture(event.pointerId);
    };
    node.addEventListener("pointerup", release);
    node.addEventListener("pointercancel", release);
  });

  requestAnimationFrame(updateEdges);
  new ResizeObserver(updateEdges).observe(root);
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

// Ambient background field: nudge the blurred blobs with pointer + scroll.
function initAmbientField() {
  const field = document.querySelector<HTMLElement>("[data-ambient-field]");
  if (!field) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let raf = 0;
  let targetX = 0;
  let targetY = 0;

  const apply = () => {
    field.style.setProperty("--ax", targetX.toFixed(1));
    field.style.setProperty("--ay", targetY.toFixed(1));
    raf = 0;
  };

  const schedule = () => {
    if (raf) return;
    raf = requestAnimationFrame(apply);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 70;
      targetY = (event.clientY / window.innerHeight - 0.5) * 70;
      schedule();
    },
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    () => {
      targetY += Math.min(window.scrollY * 0.01, 40);
      schedule();
    },
    { passive: true }
  );
}

// Hero terminal: a tiny real REPL — whoami, stack, projects <slug>, etc.
interface TerminalConfig {
  prompt: string;
  placeholder: string;
  intro: string;
  notFound: string;
  projectNotFound: string;
  commands: {
    help: string[];
    whoami: string[];
    stack: string[];
    projects: string[];
    experience: string[];
    contact: string[];
  };
}

const PROJECT_SLUGS = ["pague-safe", "convert-text", "handyman"];

function initTerminal() {
  const root = document.querySelector<HTMLElement>("[data-terminal]");
  const input = root?.querySelector<HTMLInputElement>("[data-terminal-input]");
  const output = root?.querySelector<HTMLElement>("[data-terminal-output]");
  if (!root || !input || !output) return;

  let config: TerminalConfig;
  try {
    config = JSON.parse(root.dataset.terminalConfig ?? "null");
  } catch {
    return;
  }
  if (!config) return;

  const printLines = (lines: string[], tone: "in" | "out" = "out") => {
    for (const line of lines) {
      const p = document.createElement("p");
      p.textContent = line;
      p.className = tone === "in" ? "text-ink" : "text-ink-dim";
      output.appendChild(p);
    }
    output.scrollTop = output.scrollHeight;
  };

  const printEcho = (cmd: string) => {
    const p = document.createElement("p");
    p.className = "text-ink";
    const prompt = document.createElement("span");
    prompt.className = "text-amber";
    prompt.textContent = "> ";
    p.append(prompt, document.createTextNode(cmd));
    output.appendChild(p);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const flashProject = (slug: string) => {
    const card = document.querySelector<HTMLElement>(`[data-project="${slug}"]`);
    if (!card) return false;
    scrollToSection("projects");
    card.classList.add("project-flash");
    window.setTimeout(() => card.classList.remove("project-flash"), 1600);
    return true;
  };

  const run = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    printEcho(trimmed);

    const [cmd, ...rest] = trimmed.toLowerCase().split(/\s+/);
    const arg = rest.join(" ");

    switch (cmd) {
      case "help":
        printLines(config.commands.help);
        break;
      case "whoami":
        printLines(config.commands.whoami);
        break;
      case "stack":
        printLines(config.commands.stack);
        scrollToSection("stack");
        break;
      case "experience":
        printLines(config.commands.experience);
        scrollToSection("experience");
        break;
      case "contact":
        printLines(config.commands.contact);
        scrollToSection("contact");
        break;
      case "projects":
        if (arg && PROJECT_SLUGS.includes(arg)) {
          flashProject(arg);
        } else if (arg) {
          printLines([config.projectNotFound]);
        } else {
          printLines(config.commands.projects);
        }
        break;
      case "clear":
        output.innerHTML = "";
        break;
      default:
        printLines([config.notFound]);
    }
  };

  printLines([config.intro]);

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const value = input.value;
    input.value = "";
    run(value);
  });

  root.addEventListener("click", () => input.focus());
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
  initAmbientField();
  initStackGraph();
  initTerminal();
  initContactForm();
}

document.addEventListener("astro:page-load", initAll);
