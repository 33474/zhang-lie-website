const bi = (zh, en) => `<span class="bi"><span class="zh">${zh}</span><span class="en">${en}</span></span>`;
const pad = (n) => String(n).padStart(2, "0");

const NAV_ITEMS = [
  ["about", "关于", "Profile"],
  ["works", "作品", "Works"],
  ["practice", "研究与实践", "Practice"],
  ["publications", "学术档案", "Academic"],
  ["honors", "荣誉", "Honors"],
  ["contact", "联系", "Contact"],
];

const works = WORKS.map((work, index) => {
  const id = WORK_IDS[index];
  const detail = WORK_DETAILS[id] || {};
  return {
    id,
    slug: id,
    year: work.y,
    yearLabel: work.ys,
    titleZh: work.zh,
    titleEn: work.en,
    typeZh: work.tzh,
    typeEn: work.ten,
    category: detail.category || CATEGORY_MAP[work.tzh] || "Museum",
    area: work.scale || "",
    locationZh: detail.locationZh || "中国",
    locationEn: detail.locationEn || "China",
    summaryZh: detail.summaryZh || "以空间叙事、展陈设计与媒体体验回应文化遗产的当代表达。",
    summaryEn: detail.summaryEn || "A contemporary interpretation of cultural heritage through spatial narrative, exhibition design and media experience.",
    overviewZh: detail.overviewZh || "",
    overviewEn: detail.overviewEn || "",
    innovationZh: detail.innovationZh || "",
    innovationEn: detail.innovationEn || "",
    impactZh: detail.impactZh || "",
    impactEn: detail.impactEn || "",
    awardsZh: detail.awardsZh || [],
    awardsEn: detail.awardsEn || [],
    coverImage: detail.coverImage || "",
    galleryImages: detail.galleryImages || [],
    videoUrl: detail.videoUrl || "",
    videoPoster: detail.videoPoster || "",
    projectUrl: "",
    status: "materials-pending",
  };
});

const sectionHead = (index, zh, en, introZh = "", introEn = "") => `
  <header class="section-head reveal">
    <div class="section-label">${index} / ${en}</div>
    <div>
      <h2 class="section-title">${bi(zh, en)}</h2>
      ${introZh ? `<p class="section-intro">${bi(introZh, introEn)}</p>` : ""}
    </div>
  </header>`;

function workVisual(work, index, modal = false) {
  const image = work.coverImage
    ? `<img src="${work.coverImage}" alt="${work.titleZh} / ${work.titleEn}" loading="lazy" onload="this.classList.add('available')" onerror="this.remove()">`
    : "";
  return `${image}<div class="work-placeholder"><b>${work.year}</b><span>${work.category}<br>ARCHIVE ${pad(index + 1)}</span></div>${modal ? "" : `<span class="work-number">${pad(index + 1)}</span><span class="work-view">${bi("查看项目", "VIEW PROJECT")}</span>`}`;
}

function buildWorkCard(work, index) {
  return `<article class="work-card reveal" tabindex="0" role="button" data-project="${work.id}" data-year="${work.year}" data-category="${work.category}">
    <div class="work-media">${workVisual(work, index)}</div>
    <div class="work-meta"><span>${work.yearLabel} · ${work.category}</span><span>${work.area || work.locationEn}</span></div>
    <h3 class="work-title">${bi(work.titleZh, work.titleEn)}</h3>
    <p class="work-summary">${bi(work.summaryZh, work.summaryEn)}</p>
  </article>`;
}

function editorialRows(items, limit, formatter) {
  return items.slice(0, limit).map((item, index) => `
    <div class="editorial-row reveal">
      <span class="index">${pad(index + 1)}</span>
      <div>${formatter(item)}</div>
    </div>`).join("");
}

function buildPage() {
  document.getElementById("siteNav").innerHTML = NAV_ITEMS.map(([id, zh, en]) => `<a href="#${id}">${bi(zh, en)}</a>`).join("");
  document.getElementById("heroNews").innerHTML = RECENT_NEWS.map((item) => `
    <div class="hero-news-item">
      <span class="hero-news-date">${bi(item.dateZh, item.dateEn)}</span>
      <span class="hero-news-title">${bi(item.titleZh, item.titleEn)}</span>
      <span class="hero-news-type">${bi(item.typeZh, item.typeEn)}</span>
    </div>`).join("");
  const featured = works.filter((work) => FEATURED_IDS.has(work.id));
  const categories = ["All", ...new Set(works.map((work) => work.category))];
  const years = ["All", ...new Set(works.map((work) => work.year))];

  document.getElementById("main").innerHTML = `
    <section class="section" id="about">
      <div class="wrap">
        ${sectionHead("01", "关于", "Profile")}
        <div class="profile-grid">
          <div>
            <p class="profile-lead reveal">${bi(
              "张烈，清华大学美术学院长聘教授、博士生导师。二十余年来持续工作于大型文化展馆、遗址保护展示、文化遗产数字化与交互媒体的交汇处，以研究、策划、设计和工程实践构建面向公众的文化体验。",
              "Zhang Lie is a Tenured Professor and Doctoral Supervisor at Tsinghua University. For more than two decades, his research and practice have connected large-scale cultural venues, heritage display, digitization and interactive media."
            )}</p>
            <div class="focus-list reveal">
              ${FOCUS.slice(0, 5).map((item, index) => `<div class="focus-row"><span>${pad(index + 1)}</span><strong>${bi(item.zh, item.en)}</strong><span>RESEARCH / PRACTICE</span></div>`).join("")}
            </div>
          </div>
          <aside class="profile-side reveal">
            <div class="portrait">
              <img src="assets/images/profile/portrait.jpg" alt="张烈教授 / Professor Zhang Lie" onload="this.classList.add('available')" onerror="this.remove()">
              <div class="portrait-placeholder">张</div><small>ZHANG LIE / PORTRAIT</small>
            </div>
            <div class="facts">
              <div class="fact"><strong>20+</strong><span>${bi("年研究与实践", "Years of research & practice")}</span></div>
              <div class="fact"><strong>30k m²</strong><span>${bi("大型展馆尺度", "Large-scale venue")}</span></div>
              <div class="fact"><strong>2025</strong><span>${bi("全国高被引学者前 5%", "Top-5% highly cited scholar")}</span></div>
              <div class="fact"><strong>2000—</strong><span>${bi("任职清华大学美术学院", "Tsinghua AAD")}</span></div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" id="works">
      <div class="wrap">
        ${sectionHead("02", "代表作品", "Selected Works", "以项目档案的方式呈现大型展馆、遗址保护展示与数字文化实践。", "An archive of museums, heritage display and digital-cultural practice.")}
        <div class="archive-intro reveal">
          <div class="section-label">FILTER / ARCHIVE</div>
          <div class="filters">
            <div class="filter-group" data-filter-group="category">${categories.map((item) => `<button class="filter-button ${item === "All" ? "active" : ""}" type="button" data-filter="${item}">${item}</button>`).join("")}</div>
            <div class="filter-group" data-filter-group="year">${years.slice(0, 7).map((item) => `<button class="filter-button ${item === "All" ? "active" : ""}" type="button" data-filter="${item}">${item}</button>`).join("")}</div>
          </div>
        </div>
        <div class="featured-grid" id="featuredWorks">${featured.map((work) => buildWorkCard(work, works.indexOf(work))).join("")}</div>
        <div class="archive-list" id="archiveList">
          ${works.map((work, index) => `<div class="archive-row reveal" tabindex="0" role="button" data-project="${work.id}" data-year="${work.year}" data-category="${work.category}">
            <span class="mono">${work.year}</span><span>${bi(work.titleZh, work.titleEn)}</span><span class="mono archive-type">${work.category}</span><span class="mono">↗</span>
          </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section dark" id="practice">
      <div class="wrap">
        ${sectionHead("03", "研究与实践", "Research & Practice")}
        <div class="practice-grid reveal">
          ${[
            ["01", "博物馆展陈", "Museum Exhibition"],
            ["02", "文化遗产数字化", "Heritage Digitization"],
            ["03", "交互媒体", "Interactive Media"],
            ["04", "空间叙事", "Spatial Narrative"],
            ["05", "公共文化体验", "Public Cultural Experience"],
          ].map(([n, zh, en]) => `<article class="practice-item"><small>${n} / FIELD</small><h3>${bi(zh, en)}</h3></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="publications">
      <div class="wrap">
        ${sectionHead("04", "学术档案", "Academic Archive", "论文、国家课题、行业标准与报告。", "Selected writing, funded research, standards and reports.")}
        <div class="editorial-grid">
          <article class="editorial-block">
            <h3>${bi("论文与著述", "Publications")}</h3>
            <div class="editorial-list">${editorialRows(PUBS, 10, (p) => `<strong>${bi("《" + p.zh + "》", p.en)}</strong><small>${bi(p.vzh, p.ven)}</small>`)}</div>
          </article>
          <article class="editorial-block">
            <h3>${bi("课题项目", "Projects & Grants")}</h3>
            <div class="editorial-list">${editorialRows(RESEARCH, 8, (p) => `<strong>${bi(p.zh, p.en)}</strong><small>${p.y} · ${bi(p.ozh, p.oen)}</small>`)}</div>
          </article>
          <article class="editorial-block">
            <h3>${bi("行业标准", "Standards")}</h3>
            <div class="editorial-list">${editorialRows(STANDARDS, STANDARDS.length, (p) => `<strong>${bi(p.zh, p.en)}</strong><small>${p.y} · ${bi(p.ozh, p.oen)}</small>`)}</div>
          </article>
          <article class="editorial-block">
            <h3>${bi("行业报告", "Reports")}</h3>
            <div class="editorial-list">${editorialRows(REPORTS, REPORTS.length, (p) => `<strong>${bi(p.zh, p.en)}</strong><small>${p.y} · ${bi(p.ozh, p.oen)}</small>`)}</div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="honors">
      <div class="wrap">
        ${sectionHead("05", "荣誉与学术任职", "Honors & Service")}
        <div class="honor-feature reveal">${HONORS_TOP.map((item) => `<article class="honor-card"><small>${item.y}</small><h3>${bi(item.zh, item.en)}</h3><p>${bi(item.dzh, item.den)}</p></article>`).join("")}</div>
        <div class="honor-archive">
          <h3>${bi("项目获奖档案", "Project Award Archive")}</h3>
          ${HONOR_GROUPS.map((group) => `<article class="honor-group reveal"><header><strong>${bi(group.nzh, group.nen)}</strong><span>${group.yy}</span></header><ul>${group.items.map((item) => `<li>${bi(item.zh, item.en)}</li>`).join("")}</ul></article>`).join("")}
        </div>
        <h3 class="service-title">${bi("社会学术任职", "Academic & Public Service")}</h3>
        <div class="service-list">${APPTS.map((item) => `<div class="service-item reveal">${bi(item.zh, item.en)}</div>`).join("")}</div>
      </div>
    </section>

    <section class="section dark" id="contact">
      <div class="wrap contact-grid">
        <div class="contact-intro reveal">
          <div class="section-label">06 / CONTACT</div>
          <h2 class="contact-title">${bi("联系", "Contact")}</h2>
          <p class="contact-copy">${bi("欢迎就博物馆展陈、文化遗产数字化、空间叙事与交互媒体研究开展合作交流。", "Open to collaboration on museum exhibition, cultural heritage digitization, spatial narrative and interactive-media research.")}</p>
        </div>
        <dl class="contact-details reveal">
          <div class="contact-row"><dt>Affiliation</dt><dd>${bi("清华大学美术学院", "Academy of Arts & Design, Tsinghua University")}</dd></div>
          <div class="contact-row"><dt>Institute</dt><dd>${bi("遗产传播与数智创新研究所", "Institute for Heritage Communication & Digital-Intelligent Innovation")}</dd></div>
          <div class="contact-row"><dt>Address</dt><dd>${bi("北京市海淀区清华园", "Tsinghua Campus, Haidian, Beijing")}</dd></div>
          <div class="contact-row"><dt>Email</dt><dd>${bi("确认后更新", "Contact information will be updated after confirmation")}</dd></div>
        </dl>
      </div>
    </section>
    <footer class="site-footer"><span>ZHANG LIE / ACADEMIC & EXHIBITION ARCHIVE</span><span>© ${new Date().getFullYear()}</span></footer>`;
}

function loadHeroMedia() {
  const image = document.getElementById("heroImage");
  const video = document.getElementById("heroVideo");
  image.onload = () => image.classList.add("available");
  image.onerror = () => image.remove();
  image.src = "assets/images/hero/hero-01.jpg";

  if (window.matchMedia("(min-width: 761px)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.oncanplay = () => {
      video.classList.add("available");
      video.play().catch(() => video.classList.remove("available"));
    };
    video.onerror = () => video.remove();
    video.src = "assets/videos/hero.mp4";
    video.load();
  }
}

function setLanguage(language) {
  document.documentElement.lang = language;
  document.getElementById("zhBtn").classList.toggle("active", language === "zh");
  document.getElementById("enBtn").classList.toggle("active", language === "en");
  document.title = language === "zh"
    ? "张烈 Zhang Lie | 展陈设计、文化遗产与交互媒体"
    : "Zhang Lie | Exhibition Design, Cultural Heritage & Interactive Media";
}

function toggleLanguage() {
  setLanguage(document.documentElement.lang === "zh" ? "en" : "zh");
}

let activeCategory = "All";
let activeYear = "All";

function applyFilters() {
  document.querySelectorAll("[data-project][data-category]").forEach((item) => {
    const visible = (activeCategory === "All" || item.dataset.category === activeCategory)
      && (activeYear === "All" || item.dataset.year === String(activeYear));
    item.hidden = !visible;
  });
}

function wireFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      group.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      if (group.dataset.filterGroup === "category") activeCategory = button.dataset.filter;
      if (group.dataset.filterGroup === "year") activeYear = button.dataset.filter;
      applyFilters();
    });
  });
}

function openProject(id) {
  const work = works.find((item) => item.id === id);
  if (!work) return;
  const index = works.indexOf(work);
  const modal = document.getElementById("projectModal");
  const gallery = work.galleryImages.length
    ? `<div class="modal-gallery">${work.galleryImages.map((image, imageIndex) => `<img src="${image}" alt="${work.titleZh} · ${imageIndex + 1}" loading="lazy">`).join("")}</div>`
    : "";
  const details = [
    ["项目概述", "Overview", work.overviewZh, work.overviewEn],
    ["设计创新", "Innovation", work.innovationZh, work.innovationEn],
    ["社会影响", "Impact", work.impactZh, work.impactEn],
  ].filter((item) => item[2] || item[3]);
  const awards = work.awardsZh.length
    ? `<section class="modal-detail"><h3>${bi("项目荣誉", "Selected Honors")}</h3><ul>${work.awardsZh.map((award, awardIndex) => `<li>${bi(award, work.awardsEn[awardIndex] || award)}</li>`).join("")}</ul></section>`
    : "";
  document.getElementById("modalContent").innerHTML = `
    <div class="modal-visual work-media">${workVisual(work, index, true)}</div>
    <div class="modal-body">
      <div class="modal-kicker">${work.yearLabel} · ${work.category} · ARCHIVE ${pad(index + 1)}</div>
      <h2 id="modalTitle">${bi(work.titleZh, work.titleEn)}</h2>
      <p>${bi(work.summaryZh, work.summaryEn)}</p>
      <div class="modal-data">
        <div><small>Year</small><span>${work.yearLabel}</span></div>
        <div><small>Location</small><span>${bi(work.locationZh, work.locationEn)}</span></div>
        <div><small>Type</small><span>${bi(work.typeZh, work.typeEn)}</span></div>
        <div><small>Area</small><span>${work.area || "—"}</span></div>
      </div>
      <div class="modal-details">${details.map((item) => `<section class="modal-detail"><h3>${bi(item[0], item[1])}</h3><p>${bi(item[2], item[3])}</p></section>`).join("")}${awards}</div>
      ${gallery}
      ${details.length || gallery ? "" : `<div class="modal-note">${bi("更多项目资料将陆续补充。", "More project materials will be added soon.")}</div>`}
    </div>`;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeProject() {
  document.getElementById("projectModal").hidden = true;
  document.body.classList.remove("modal-open");
}

function wireInteractions() {
  document.addEventListener("click", (event) => {
    const project = event.target.closest("[data-project]");
    if (project) openProject(project.dataset.project);
    if (event.target.closest("[data-close-modal]")) closeProject();
  });
  document.addEventListener("keydown", (event) => {
    const isProjectTrigger = event.target.matches("[data-project]");
    if ((event.key === "Enter" || event.key === " ") && isProjectTrigger) openProject(event.target.dataset.project);
    if (event.key === " " && !isProjectTrigger && !event.target.closest("button, a, input, textarea, select, [contenteditable='true']")) {
      event.preventDefault();
      toggleLanguage();
    }
    if (event.key === "Escape") closeProject();
  });

  const nav = document.getElementById("siteNav");
  const menuButton = document.getElementById("menuButton");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
  document.getElementById("zhBtn").addEventListener("click", () => setLanguage("zh"));
  document.getElementById("enBtn").addEventListener("click", () => setLanguage("en"));
  document.getElementById("backTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function wireScroll() {
  const header = document.getElementById("siteHeader");
  const backTop = document.getElementById("backTop");
  const update = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
    backTop.classList.toggle("visible", window.scrollY > 700);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });

  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: .07 });
  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

  const links = [...document.querySelectorAll("#siteNav a")];
  const spyObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  }), { rootMargin: "-45% 0px -50% 0px" });
  NAV_ITEMS.forEach(([id]) => spyObserver.observe(document.getElementById(id)));
}

buildPage();
loadHeroMedia();
wireFilters();
wireInteractions();
wireScroll();
setLanguage("en");
