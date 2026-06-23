const portfolio = {
  profile: {
    name: "Nicolás Amado",
    email: "Nikiamado123@gmail.com",
    phone: "11 5946 8048",
    linkedin: "https://www.linkedin.com/in/nicolas-martin-amado-4b1a251b3/",
    location: "Buenos Aires, Argentina"
  },

  metrics: [
    { value: "5+", label: "Years building web solutions" },
    { value: "70%", label: "Legal document reading time reduced with AI automation" },
    { value: "2023–2026", label: "AI model evaluation and training experience" },
    { value: "C1", label: "Advanced English proficiency" }
  ],

  focus: [
    {
      icon: "🧠",
      title: "AI Model Evaluation",
      text: "Structured LLM evaluation, rubric-based feedback, root-cause analysis and dataset quality improvement."
    },
    {
      icon: "⚙️",
      title: "Backend Architecture",
      text: "Secure and scalable REST/GraphQL APIs, authentication, authorization, validation and defensive coding."
    },
    {
      icon: "🚀",
      title: "Full-Stack Delivery",
      text: "Responsive products using JavaScript, React, Vue.js, backend services, testing and continuous delivery."
    },
    {
      icon: "🤖",
      title: "Automation Workflows",
      text: "Python tools for legal document summarization, case data extraction, reporting and business process optimization."
    }
  ],

  experiences: [
    {
      company: "OUTLIER.AI",
      title: "AI Training Model and Software Developer",
      location: "United States of America",
      period: "06/2023 – 01/2026",
      type: "AI Systems · Software Engineering",
      summary:
        "Contributed to AI model evaluation operations while developing and maintaining production-oriented web applications.",
      bullets: [
        "Developed and maintained Laravel and NestJS applications, delivering iterative enhancements and optimizing existing codebases.",
        "Contributed to AI systems operations as an AI Model Evaluator/Trainer: executed structured evaluations, performed error analysis and root-cause categorization, and produced high-quality feedback and datasets to improve model accuracy, safety and instruction-following.",
        "Implemented automated testing strategies and CI/CD pipelines to ensure consistent deployments, reduce regressions and improve engineering velocity through unit tests, integration tests, code reviews, linting and release automation.",
        "Built and optimized end-to-end features across the stack, including backend services and Vue.js frontend interfaces, improving UX, responsiveness and overall product quality.",
        "Architected and delivered secure, scalable REST and GraphQL APIs, including robust authentication, authorization, input validation and defensive coding practices aligned with best security standards."
      ],
      stack: ["AI Evaluation", "LLMs", "Rubrics", "Laravel", "NestJS", "Vue.js", "REST", "GraphQL", "CI/CD"]
    },
    {
      company: "AMADO & ASOCIADOS",
      title: "Web Developer",
      location: "San Justo, Buenos Aires",
      period: "03/2020 – 04/2023",
      type: "Full-Stack Development · LegalTech Automation",
      summary:
        "Designed internal tools, web applications and automation workflows for a legal practice environment.",
      bullets: [
        "Designed, built and maintained responsive, user-centric web applications using HTML, CSS, JavaScript and React, improving user experience and internal workflow.",
        "Managed MongoDB databases, handling schema design, optimization, data integrity maintenance and automated backup/recovery processes.",
        "Developed and integrated RESTful and GraphQL APIs to enable seamless frontend-backend communication and faster data exchange.",
        "Configured and maintained CI/CD pipelines for continuous testing, deployment and monitoring, enhancing delivery speed and reliability.",
        "Built a Legal Document Summarizer using Python and the OpenAI API to automatically summarize legal documents, reducing document reading time by approximately 70% for internal use.",
        "Automated case-data extraction and structuring using Python scripts, exporting data to Excel and Google Sheets for efficient legal reporting."
      ],
      stack: ["React", "JavaScript", "MongoDB", "Python", "OpenAI API", "Excel API", "REST", "GraphQL"]
    }
  ],

  projects: [
    {
      name: "Legal Document Summarizer",
      category: "AI Automation",
      impact: "Reduced document reading time by 70%",
      description:
        "Python + OpenAI API tool built to summarize legal documents automatically and extract relevant information for internal legal workflows.",
      tags: ["Python", "OpenAI API", "NLP", "Automation", "LegalTech"]
    },
    {
      name: "Case Data Automation Pipeline",
      category: "Data Operations",
      impact: "Improved reporting speed and consistency",
      description:
        "Automated extraction, normalization and export of case information to Excel and Google Sheets for better operational reporting.",
      tags: ["Python", "Excel API", "Google Sheets", "ETL", "Reporting"]
    },
    {
      name: "Scalable API Architecture",
      category: "Backend Engineering",
      impact: "Secure REST and GraphQL service design",
      description:
        "Designed API layers with authentication, authorization, input validation and defensive coding practices for scalable applications.",
      tags: ["NestJS", "Laravel", "REST", "GraphQL", "Security"]
    },
    {
      name: "AI Evaluation Workflows",
      category: "AI Training",
      impact: "Improved model quality, safety and instruction-following",
      description:
        "Structured evaluation workflows involving rubrics, root-cause analysis, error categorization and high-quality feedback datasets.",
      tags: ["LLMs", "Rubrics", "Data Annotation", "QA", "Model Evaluation"]
    }
  ],

  skillGroups: [
    {
      title: "AI & Machine Learning",
      skills: [
        "AI Model Evaluation",
        "AI Training",
        "LLMs",
        "NLP",
        "Computer Vision",
        "Prompt Engineering",
        "Data Annotation",
        "Dataset Curation",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Optimization",
        "Rubric-Based QA"
      ]
    },
    {
      title: "Backend & Architecture",
      skills: [
        "Node.js",
        "NestJS",
        "Laravel",
        "REST APIs",
        "GraphQL",
        "Authentication",
        "Authorization",
        "Input Validation",
        "Scalability",
        "Backend Optimization",
        "System Architecture"
      ]
    },
    {
      title: "Frontend & Product",
      skills: [
        "JavaScript",
        "React",
        "Vue.js",
        "HTML",
        "CSS",
        "Responsive Design",
        "UX Optimization",
        "Component Architecture",
        "Cross-Functional Collaboration"
      ]
    },
    {
      title: "Data, Cloud & DevOps",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
        "TensorFlow",
        "PyTorch",
        "MongoDB",
        "SQL",
        "CI/CD",
        "AWS",
        "GCP",
        "Azure",
        "Git",
        "GitHub",
        "GitLab",
        "Model Versioning",
        "Experiment Tracking",
        "Performance Monitoring"
      ]
    }
  ],

  education: [
    {
      institution: "UNLAM — University of La Matanza",
      credential: "Systems Engineering",
      period: "03/2022 – 03/2026"
    },
    {
      institution: "Coderhouse",
      credential: "Full Stack Developer Certificate",
      period: "03/2021 – 12/2023"
    },
    {
      institution: "Educación IT",
      credential:
        "Web Development with HTML, Introduction to Database and SQL, Introduction to the Object Paradigm, Java, Manual QA Testing",
      period: "03/2014 – 12/2018"
    },
    {
      institution: "Colegio Almafuerte",
      credential: "High-school diploma in Natural Sciences",
      period: "03/2015 – 12/2020"
    }
  ]
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createTagRow(tags) {
  return `<div class="tag-row">${tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>`;
}

function renderMetrics() {
  const container = $("#metrics");
  container.innerHTML = portfolio.metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <strong>${escapeHTML(metric.value)}</strong>
          <span>${escapeHTML(metric.label)}</span>
        </article>
      `
    )
    .join("");
}

function renderFocus() {
  const container = $("#focus-grid");
  container.innerHTML = portfolio.focus
    .map(
      (item) => `
        <article class="focus-card glass-card">
          <div class="focus-icon" aria-hidden="true">${escapeHTML(item.icon)}</div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderExperienceSelector(activeIndex = 0) {
  const selector = $("#experience-selector");
  selector.innerHTML = portfolio.experiences
    .map(
      (experience, index) => `
        <button class="experience-button ${index === activeIndex ? "active" : ""}" data-index="${index}" type="button">
          <strong>${escapeHTML(experience.company)}</strong>
          <span>${escapeHTML(experience.period)}</span>
        </button>
      `
    )
    .join("");

  $$(".experience-button", selector).forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      renderExperienceSelector(index);
      renderExperienceDetail(index);
    });
  });
}

function renderExperienceDetail(index = 0) {
  const experience = portfolio.experiences[index];
  const detail = $("#experience-detail");

  detail.innerHTML = `
    <p class="experience-type">${escapeHTML(experience.type)}</p>
    <h3>${escapeHTML(experience.title)}</h3>
    <div class="experience-meta">
      <span>${escapeHTML(experience.company)}</span>
      <span>${escapeHTML(experience.location)}</span>
      <span>${escapeHTML(experience.period)}</span>
    </div>
    <p>${escapeHTML(experience.summary)}</p>
    <ul class="bullet-list">
      ${experience.bullets.map((bullet) => `<li>${escapeHTML(bullet)}</li>`).join("")}
    </ul>
    ${createTagRow(experience.stack)}
  `;
}

function renderProjects(filter = "All") {
  const container = $("#projects-grid");
  const projects =
    filter === "All" ? portfolio.projects : portfolio.projects.filter((project) => project.category === filter);

  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card glass-card">
          <p class="project-category">${escapeHTML(project.category)}</p>
          <h3>${escapeHTML(project.name)}</h3>
          <p class="project-impact">${escapeHTML(project.impact)}</p>
          <p>${escapeHTML(project.description)}</p>
          ${createTagRow(project.tags)}
        </article>
      `
    )
    .join("");
}

function renderSkills(query = "") {
  const normalized = query.trim().toLowerCase();
  const grid = $("#skills-grid");
  let visibleSkillCount = 0;

  const groupsHTML = portfolio.skillGroups
    .map((group) => {
      const skills = group.skills.filter((skill) => {
        if (!normalized) return true;
        return `${group.title} ${skill}`.toLowerCase().includes(normalized);
      });

      visibleSkillCount += skills.length;

      if (skills.length === 0) return "";

      return `
        <article class="skill-group glass-card">
          <h3>${escapeHTML(group.title)}</h3>
          ${createTagRow(skills)}
        </article>
      `;
    })
    .join("");

  grid.innerHTML = groupsHTML || `<article class="skill-group glass-card"><h3>No skills found</h3><p>Try another search term.</p></article>`;
  $("#skill-count").textContent = `${visibleSkillCount} skill${visibleSkillCount === 1 ? "" : "s"} shown`;
}

function renderEducation() {
  const container = $("#education-grid");
  container.innerHTML = portfolio.education
    .map(
      (item) => `
        <article class="education-card glass-card">
          <span>${escapeHTML(item.period)}</span>
          <h3>${escapeHTML(item.institution)}</h3>
          <p>${escapeHTML(item.credential)}</p>
        </article>
      `
    )
    .join("");
}

function setupNavigation() {
  const nav = $("#nav");
  const menuButton = $("#mobile-menu-button");

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  $$("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  const sections = $$("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const activeId = visible.target.id;
      $$("a", nav).forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupScrollEffects() {
  const progress = $(".scroll-progress");
  const spotlight = $(".spotlight");

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progress.style.setProperty("--progress", `${Math.min(100, Math.max(0, ratio))}%`);
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  window.addEventListener(
    "pointermove",
    (event) => {
      spotlight.style.setProperty("--x", `${event.clientX}px`);
      spotlight.style.setProperty("--y", `${event.clientY}px`);
    },
    { passive: true }
  );
}

function setupRevealAnimations() {
  const items = $$(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupProjectFilters() {
  $$(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function setupSkillSearch() {
  const input = $("#skill-search");
  input.addEventListener("input", () => renderSkills(input.value));
}

function showToast(message) {
  const existingToast = $(".toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 1800);
}

async function setupCopyEmail() {
  const button = $("#copy-email-button");

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(portfolio.profile.email);
      showToast("Email copied to clipboard");
    } catch {
      showToast(portfolio.profile.email);
    }
  });
}

function setupCommandPalette() {
  const dialog = $("#command-dialog");
  const openButton = $("#command-button");
  const closeButton = $("#close-command");
  const input = $("#command-input");
  const results = $("#command-results");

  const actions = [
    { label: "Go to About", detail: "Profile and positioning", action: () => navigateTo("about") },
    { label: "Go to Experience", detail: "Professional experience", action: () => navigateTo("experience") },
    { label: "Go to Projects", detail: "Selected work and business impact", action: () => navigateTo("projects") },
    { label: "Go to Skills", detail: "Technical stack", action: () => navigateTo("skills") },
    { label: "Go to Education", detail: "Academic and technical training", action: () => navigateTo("education") },
    { label: "Go to Contact", detail: "Email, phone and LinkedIn", action: () => navigateTo("contact") },
    { label: "Send email", detail: portfolio.profile.email, action: () => window.location.assign(`mailto:${portfolio.profile.email}`) },
    { label: "Open LinkedIn", detail: portfolio.profile.linkedin, action: () => window.open(portfolio.profile.linkedin, "_blank", "noopener,noreferrer") },
    ...portfolio.skillGroups.flatMap((group) =>
      group.skills.map((skill) => ({
        label: skill,
        detail: `Skill · ${group.title}`,
        action: () => {
          navigateTo("skills");
          $("#skill-search").value = skill;
          renderSkills(skill);
        }
      }))
    )
  ];

  function navigateTo(id) {
    dialog.close();
    $(`#${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderCommandResults(query = "") {
    const normalized = query.trim().toLowerCase();
    const filtered = actions
      .filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(normalized))
      .slice(0, 10);

    results.innerHTML = filtered
      .map(
        (item, index) => `
          <button class="command-result" type="button" data-index="${index}">
            ${escapeHTML(item.label)}
            <span>${escapeHTML(item.detail)}</span>
          </button>
        `
      )
      .join("");

    $$(".command-result", results).forEach((button) => {
      button.addEventListener("click", () => filtered[Number(button.dataset.index)].action());
    });
  }

  function openDialog() {
    if (!dialog.open) dialog.showModal();
    input.value = "";
    renderCommandResults();
    setTimeout(() => input.focus(), 0);
  }

  openButton.addEventListener("click", openDialog);
  closeButton.addEventListener("click", () => dialog.close());
  input.addEventListener("input", () => renderCommandResults(input.value));

  window.addEventListener("keydown", (event) => {
    const isCommandShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

    if (isCommandShortcut) {
      event.preventDefault();
      openDialog();
    }

    if (event.key === "Escape" && dialog.open) {
      dialog.close();
    }
  });

  renderCommandResults();
}

function setupContactYear() {
  $("#current-year").textContent = new Date().getFullYear();
}

function runSelfCheck() {
  const requiredSelectors = [
    "#metrics",
    "#focus-grid",
    "#experience-selector",
    "#experience-detail",
    "#projects-grid",
    "#skills-grid",
    "#education-grid",
    "#nav",
    "#command-dialog"
  ];

  const missing = requiredSelectors.filter((selector) => !$(selector));

  if (missing.length) {
    console.error("Portfolio self-check failed. Missing selectors:", missing);
    return false;
  }

  console.info("Portfolio self-check passed: all core modules mounted correctly.");
  return true;
}

function initPortfolio() {
  renderMetrics();
  renderFocus();
  renderExperienceSelector(0);
  renderExperienceDetail(0);
  renderProjects("All");
  renderSkills("");
  renderEducation();

  setupNavigation();
  setupScrollEffects();
  setupRevealAnimations();
  setupProjectFilters();
  setupSkillSearch();
  setupCopyEmail();
  setupCommandPalette();
  setupContactYear();

  runSelfCheck();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
