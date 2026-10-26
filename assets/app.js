/* Site logic. Content lives in content.js; nothing here needs editing for content changes. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const RM = matchMedia("(prefers-reduced-motion: reduce)");
  const DRAFT = !!S.config.draft;
  const MODEL_MODE = !!S.config.askEndpoint;
  const PAGES = ["ask", "builds", "work", "stack", "notes", "writing", "about"];
  const splitSentences = s => (s || "").split(/(?<=[.;])\s+(?=[A-Z0-9“(])/).map(x => x.trim()).filter(Boolean);

  /* ---------------- Registry: every citable entry ---------------- */
  const REG = {};
  function reg(id, page, section, title, summary, text, more) {
    const moreList = (more || []).filter(Boolean);
    REG[id] = {
      id, page, section, title, label: title, summary,
      short: title,
      text: (title + " " + text).toLowerCase(),
      full: (title + " " + text + " " + summary + " " + moreList.join(" ")).toLowerCase().replace(/,/g, ""),
      more: moreList
    };
  }
  reg("m-fenced", "stack", "How I build", "Fenced generation",
    "He builds with fenced generation: the model writes language, code owns the logic, math, and mapping, and every claim traces to a source before it ships.",
    S.stack.method.map(m => m.title + " " + m.body).join(" ") + " deterministic gate validation chat checked",
    S.stack.method.map(m => `${m.title}. ${m.body}`));
  S.stack.groups.forEach(g => reg(g.id, "stack", "How I build", g.title,
    `${g.title}: ${g.items.map(i => i.name).join(", ")}.`,
    g.items.map(i => i.name + " " + i.what).join(" ") + (g.id === "s-data" ? " " + S.stack.skills : ""),
    g.items.map(i => `${i.name}: ${i.what}`)));
  S.builds.forEach(b => reg(b.id, "builds", "Builds", b.title, b.summary,
    [b.meta, b.quote || "", b.body, (b.evidence || []).map(e => e.join(" ")).join(" ")].join(" "),
    b.more || splitSentences(b.body)));
  S.research.forEach(r => reg(r.id, "builds", "Research", r.title, `${r.title}: ${r.body}`,
    [r.when, r.org, r.body].join(" "), splitSentences(r.body)));
  const orgCount = {};
  S.work.forEach(w => { orgCount[w.org] = (orgCount[w.org] || 0) + 1; });
  S.work.forEach(w => {
    reg(w.id, "work", "Work", w.org,
      `${w.roles[0][0]}, ${w.org} (${w.when}). ${splitSentences(w.bullets[0])[0] || ""}`.trim(),
      [w.place, w.when, w.roles.map(r => r.join(" ")).join(" "), w.bullets.join(" ")].join(" "),
      w.bullets.flatMap(splitSentences));
    if (orgCount[w.org] > 1) REG[w.id].label = `${w.org}, ${w.roles[0][0]}`;
  });
  S.events.forEach(e => reg(e.id, "notes", "Field notes", e.title,
    `${e.title}, ${e.when}${e.place ? ", " + e.place : ""}. ${e.note}`.trim(),
    [e.when, e.place, e.note, e.detail].join(" "),
    [e.note, ...splitSentences(e.detail)]));
  S.writing.forEach(a => reg(a.id, "writing", "Writing", a.title, `${a.title} (${a.source}): ${a.body}`,
    [a.source, a.body].join(" "), [a.body]));
  reg("about", "about", "About", "About", S.about.summary,
    S.about.paragraphs.join(" ") + " " + S.about.facts.map(f => f.join(" ")).join(" "), [S.about.summary]);
  const E = S.education;
  reg("edu", "about", "About", "Education",
    `He is finishing ${E.degrees.map(d => d.degree).join(" and ")} at the University of Illinois Chicago (${E.degrees[0].when}); GPA ${E.gpa}.`,
    E.degrees.map(d => `${d.degree} ${d.school} ${d.when}`).join(" ") + " gpa " + E.gpa + " coursework " + E.coursework,
    [`Coursework includes ${E.coursework}.`]);
  reg("certs", "about", "About", "Certifications",
    `Certifications: ${S.certifications.items.map(c => `${c.name} (${c.issuer}, ${c.when})`).join("; ")}.`,
    S.certifications.items.map(c => `${c.name} ${c.issuer} ${c.when}`).join(" "), []);
  reg("contact", "about", "About", "Contact",
    `Email ${S.config.email}. His résumé opens from the Résumé button at the top of every page, and his LinkedIn and GitHub are linked on the About page.`,
    "contact email linkedin github resume " + S.config.email, []);
  [...S.builds, ...S.research, ...S.work, ...S.events, ...S.writing].forEach(x => { if (x.short && REG[x.id]) REG[x.id].short = x.short; });
  const ENTRY_COUNT = Object.keys(REG).length;

  function hrefFor(id) {
    if (REG[id]) return `#/${REG[id].page}/${id}`;
    if (PAGES.includes(id)) return id === "ask" ? "#/" : `#/${id}`;
    return "#/";
  }

  /* ---------------- Pre-publish gate (draft only) ---------------- */
  const todos = [];
  function addTodo(id, text) {
    if (!DRAFT || todos.some(t => t.text === text)) return;
    todos.push({ id, text });
    renderGate();
  }
  function renderGate() {
    if (!DRAFT) return;
    $("#gate").hidden = false;
    $("#gateCount").textContent = todos.length;
    $("#gateList").innerHTML = todos.map(t => `<li><a href="${hrefFor(t.id)}">${esc(t.text)}</a></li>`).join("");
  }
  $("#gateToggle").addEventListener("click", e => {
    const body = $("#gateBody");
    body.hidden = !body.hidden;
    e.currentTarget.setAttribute("aria-expanded", String(!body.hidden));
  });

  function linkHTML(l, owner) {
    if (l.url) return `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`;
    addTodo(owner.id, `Add the ${l.label.toLowerCase()} link for ${owner.title}.`);
    return DRAFT ? `<span class="missing">${esc(l.label)}: add link</span>` : "";
  }
  const askChip = (q, sm) => `<button type="button" class="chip${sm ? " chip--sm" : ""}" data-q="${esc(q)}">${esc(q)}</button>`;

  /* ---------------- Page headers ---------------- */
  $$("[data-head]").forEach(h => {
    const p = S.pages[h.dataset.head];
    h.innerHTML = `<h1 tabindex="-1">${esc(p.title)}</h1>${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ""}
      ${p.ask && p.ask.length ? `<div class="page-ask"><span>Ask:</span>${p.ask.map(q => askChip(q, true)).join("")}</div>` : ""}`;
  });

  /* ---------------- Home ---------------- */
  $("#lede").textContent = S.home.lede;
  $("#sublede").textContent = S.home.sub;
  $("#askNote").textContent = MODEL_MODE
    ? "A model reads your question and drafts from the entries on this site. Code checks every sentence against the entry it cites before it shows."
    : "Answers come only from entries on this site, and every sentence cites the entry it came from.";
  $("#footMode").textContent = MODEL_MODE
    ? "The chat drafts with a model; your browser checks every sentence against its source."
    : "The chat runs in your browser on this site’s entries.";
  const chips = S.chips;
  const half = Math.ceil(chips.length / 2);
  const chipSet = (list, hidden) => list.map(q => `<button type="button" class="chip" data-q="${esc(q)}"${hidden ? ' aria-hidden="true" tabindex="-1"' : ""}>${esc(q)}</button>`).join("");
  $("#track1").innerHTML = chipSet(chips.slice(0, half)) + chipSet(chips.slice(0, half), true);
  $("#track2").innerHTML = chipSet(chips.slice(half)) + chipSet(chips.slice(half), true);
  const orgs = [...new Set(S.work.map(w => w.org.split(",")[0]))];
  const indexItems = [
    ["builds", "Builds", `${S.builds.map(b => b.title).join(", ")}, and ${S.research.length} research projects`],
    ["work", "Work", `${orgs.slice(0, 3).join(", ")}, and ${Math.max(0, S.work.length - 3)} more roles`],
    ["stack", "How I build", "Fenced generation, then the AI, fintech, quant, and data stack"],
    ["notes", "Field notes", `${S.events.length} events from 2026`],
    ["writing", "Writing", `${S.writing.length} pieces`],
    ["about", "About", "Education, certifications, and contact"]
  ];
  $("#pageIndex").innerHTML = indexItems.map(([p, t, d]) => `<a href="#/${p}"><strong>${esc(t)}</strong><span>${esc(d)}</span></a>`).join("");

  /* ---------------- Builds ---------------- */
  $("#bento").innerHTML = S.builds.map(b => {
    const head = `<h2><span class="src-title">${esc(b.title)}</span></h2><p class="card-meta">${esc(b.meta)}</p>`;
    const quote = b.quote ? `<blockquote class="card-quote">${esc(b.quote)}</blockquote>` : "";
    const body = `<p class="card-body">${esc(b.body)}</p>`;
    const pipe = b.pipe ? `<ol class="pipe" aria-label="How a purchase flows">${b.pipe.map(s => `<li${s.gate ? ' class="gate-step"' : ""}><span class="lbl">${esc(s.label)}</span>${s.note ? `<small>${esc(s.note)}</small>` : ""}</li>`).join("")}</ol>` : "";
    const ev = b.evidence ? `<ul class="evidence">${b.evidence.map(([v, l]) => `<li><b>${esc(v)}</b> ${esc(l)}</li>`).join("")}</ul>` : "";
    const linkBits = (b.links || []).map(l => linkHTML(l, b)).filter(Boolean).join("");
    const links = linkBits ? `<p class="links">${linkBits}</p>` : "";
    const cls = "card" + (b.feature ? " card--feature" : "") + (b.wide ? " card--wide" : "");
    if (b.wide) return `<article class="${cls}" id="${b.id}"><div>${head}${quote}${body}</div><div>${ev}${links}</div></article>`;
    return `<article class="${cls}" id="${b.id}">${head}${quote}${body}${pipe}${ev}${links}</article>`;
  }).join("");
  $("#research").innerHTML = S.research.map(r => {
    if (r.todo) addTodo(r.id, r.todo);
    const when = r.when || (DRAFT ? "Date to add" : "");
    return `<article class="row" id="${r.id}">
      <div class="row-when">${esc(when)}</div>
      <h3><span class="src-title">${esc(r.title)}</span><span class="row-org">${esc(r.org)}</span></h3>
      <div><p>${esc(r.body)}</p>${(() => { const l = (r.links || []).map(x => linkHTML(x, r)).filter(Boolean).join(""); return l ? `<p class="links">${l}</p>` : ""; })()}</div>
    </article>`;
  }).join("");

  /* ---------------- Work ---------------- */
  const groups = [["now", "Now"], ["past", "Before"], ["community", "Entrepreneurship and community"]];
  $("#jobs").innerHTML = groups.map(([g, label]) => {
    const list = S.work.filter(w => w.group === g);
    if (!list.length) return "";
    return `<h2 class="sub">${label}</h2><div class="jobs">${list.map(w => {
      if (w.todo) addTodo(w.id, w.todo);
      return `<article class="job" id="${w.id}">
        <div class="job-when">${esc(w.when)}</div>
        <div>
          <h3><span class="src-title">${esc(w.org)}</span></h3>
          <ul class="roles">${w.roles.map(([t, d]) => `<li><b>${esc(t)}</b>, ${esc(d)}</li>`).join("")}</ul>
          ${w.bullets.length ? `<ul class="bul">${w.bullets.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        </div>
      </article>`;
    }).join("")}</div>`;
  }).join("");

  /* ---------------- How I build ---------------- */
  $("#steps").innerHTML = S.stack.method.map((m, i) => `<li><span class="step-n">${i + 1}</span><h3>${esc(m.title)}</h3><p>${esc(m.body)}</p></li>`).join("");
  $("#toolGroups").innerHTML = S.stack.groups.map(g => `
    <section id="${g.id}">
      <h2 class="sub"><span class="src-title">${esc(g.title)}</span></h2>
      <div class="tools">${g.items.map(i => `
        <div class="tool">
          <h4>${esc(i.name)}</h4>
          <p>${esc(i.what)}</p>
          <div class="used">${i.refs.length
            ? `<span class="lbl">Used in</span>${i.refs.map(id => `<a href="${hrefFor(id)}">${esc(REG[id] ? REG[id].short : id)}</a>`).join("")}`
            : `<em>No linked entry yet</em>`}</div>
        </div>`).join("")}
      </div>
    </section>`).join("") + `<h2 class="sub">Top skills</h2><p class="skills-line">${esc(S.stack.skills)}</p>`;

  /* ---------------- Field notes ---------------- */
  $("#rail").innerHTML = S.events.map((e, i) => `<button type="button" data-note="${e.id}" aria-current="${i === 0}">${esc(e.short)}</button>`).join("");
  $("#strip").innerHTML = S.events.map(e => {
    if (e.todo) addTodo(e.id, e.todo);
    const fig = e.photo ? `<figure><img src="${esc(e.photo)}" alt="${esc(e.title)}" loading="lazy" data-photo="${esc(e.photo)}" data-owner="${e.id}"></figure>` : "";
    const bubble = e.note
      ? `<div class="msg"><span class="avatar" aria-hidden="true">SA</span><p class="bubble">${esc(e.note)}</p></div>`
      : (DRAFT ? `<div class="msg"><span class="avatar" aria-hidden="true">SA</span><p class="bubble is-empty">Add a one-line note.</p></div>` : "");
    const link = (e.link && REG[e.link] ? ` <a href="${hrefFor(e.link)}">Read the post</a>` : "") +
      (e.extLinks || []).map(x => x.url ? ` <a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)}</a>` : "").join("");
    const detail = e.detail ? `<p class="note-detail">${esc(e.detail)}${link}</p>` : "";
    return `<article class="note" id="${e.id}">
      ${fig}
      <p class="note-when">${esc(e.when)}${e.place ? ", " + esc(e.place) : ""}</p>
      <h2><span class="src-title">${esc(e.title)}</span></h2>
      ${bubble}${detail}
    </article>`;
  }).join("");
  $$("img[data-photo]").forEach(img => {
    const fail = () => {
      const fig = img.closest("figure");
      addTodo(img.dataset.owner, `Add photo ${img.dataset.photo}`);
      if (DRAFT) fig.innerHTML = `<div class="ph">Photo goes here<code>${esc(img.dataset.photo)}</code></div>`;
      else fig.remove();
    };
    if (img.complete && img.naturalWidth === 0) fail(); else img.addEventListener("error", fail, { once: true });
  });

  const strip = $("#strip");
  const notes = $$(".note", strip);
  const railBtns = $$("#rail button");
  const setActive = id => railBtns.forEach(b => b.setAttribute("aria-current", String(b.dataset.note === id)));
  const goNote = el => strip.scrollTo({ left: el.offsetLeft - strip.offsetLeft, behavior: RM.matches ? "auto" : "smooth" });
  let railLock = 0, railTick = false;
  railBtns.forEach(b => b.addEventListener("click", () => { railLock = Date.now() + 1000; goNote(document.getElementById(b.dataset.note)); setActive(b.dataset.note); }));
  strip.addEventListener("scroll", () => {
    if (railTick || Date.now() < railLock) return;
    railTick = true;
    requestAnimationFrame(() => {
      railTick = false;
      const x = strip.scrollLeft;
      const atEnd = x + strip.clientWidth >= strip.scrollWidth - 4;
      const pick = atEnd ? notes[notes.length - 1] : notes.reduce((a, n) => Math.abs(n.offsetLeft - strip.offsetLeft - x) < Math.abs(a.offsetLeft - strip.offsetLeft - x) ? n : a, notes[0]);
      setActive(pick.id);
    });
  }, { passive: true });
  const stepBy = dir => {
    const x = strip.scrollLeft;
    const target = dir > 0 ? notes.find(n => n.offsetLeft - strip.offsetLeft > x + 5) : [...notes].reverse().find(n => n.offsetLeft - strip.offsetLeft < x - 5);
    if (target) goNote(target);
  };
  $("#prevNote").addEventListener("click", () => stepBy(-1));
  $("#nextNote").addEventListener("click", () => stepBy(1));

  /* ---------------- Writing ---------------- */
  $("#posts").innerHTML = S.writing.map(a => {
    const title = a.url ? `<a href="${esc(a.url)}" target="_blank" rel="noopener" class="src-title">${esc(a.title)}</a>` : `<span class="src-title">${esc(a.title)}</span>`;
    if (!a.url) addTodo(a.id, `Add the link for ${a.title}.`);
    return `<article class="post" id="${a.id}">
      <div class="post-src">${esc(a.source)}</div>
      <div><h2>${title}</h2><p>${esc(a.body)}</p>${!a.url && DRAFT ? `<span class="missing">Link: add URL</span>` : ""}</div>
    </article>`;
  }).join("");

  /* ---------------- About ---------------- */
  $("#about").innerHTML = S.about.paragraphs.map(p => `<p>${esc(p)}</p>`).join("");
  if (S.about.todo) addTodo("about", S.about.todo);
  $("#facts").innerHTML = S.about.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
  $("#edu").innerHTML = `<h2><span class="src-title">Education</span></h2>
    <ul class="creds">${E.degrees.map(d => `<li><b>${esc(d.degree)}</b><span>${esc(d.when)}</span></li>`).join("")}</ul>
    <dl class="facts" style="margin-top:16px"><dt>School</dt><dd>${esc(E.degrees[0].school)}</dd><dt>GPA</dt><dd>${esc(E.gpa)}</dd><dt>Coursework</dt><dd>${esc(E.coursework)}</dd></dl>`;
  $("#certs").innerHTML = `<h2><span class="src-title">Certifications</span></h2>
    <ul class="creds">${S.certifications.items.map(c => `<li><b>${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.name)}</a>` : esc(c.name)}</b><span>${esc(c.issuer)}, ${esc(c.when)}</span></li>`).join("")}</ul>`;
  if (S.certifications.todo) addTodo("certs", S.certifications.todo);
  $("#contact").innerHTML = `<h2><span class="src-title">Contact</span></h2>
    <a class="mail" href="mailto:${esc(S.config.email)}">${esc(S.config.email)}</a>
    <div class="contact-links">
      <a class="btn btn--solid" href="${esc(S.config.resume)}" target="_blank" rel="noopener">View résumé</a>
      <a class="btn" href="${esc(S.config.resume)}" download="Shivansh-Amba-Resume.pdf">Download PDF</a>
      <a class="btn" href="${esc(S.config.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
      <a class="btn" href="${esc(S.config.github)}" target="_blank" rel="noopener">GitHub</a>
    </div>`;
  (S.extraTodos || []).forEach(t => addTodo(t.id, t.text));
  const portrait = $("#portrait");
  const headImg = new Image();
  headImg.alt = "Shiv Amba";
  headImg.onload = () => { portrait.innerHTML = ""; portrait.appendChild(headImg); };
  headImg.onerror = () => addTodo("about", `Add a headshot at ${S.config.headshot}`);
  headImg.src = S.config.headshot;
  $("#navResume").href = S.config.resume;
  $("#footMail").href = "mailto:" + S.config.email;
  $("#footMail").textContent = S.config.email;

  /* ---------------- Router ---------------- */
  let current = null;
  const scrollMem = {};
  let citedTimer;
  function parseHash() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    if (!h) return { page: "ask", entry: null };
    const [p, e] = h.split("/");
    if (PAGES.includes(p)) return { page: p, entry: e && REG[e] ? e : null };
    if (REG[p]) return { page: REG[p].page, entry: p };
    return null;
  }
  function focusEntry(id) {
    const el = document.getElementById(id);
    if (!el) return;
    $$(".is-cited").forEach(x => x.classList.remove("is-cited"));
    if (el.classList.contains("note")) { goNote(el); setActive(el.id); railLock = Date.now() + 1000; }
    el.scrollIntoView({ block: "center", behavior: RM.matches ? "auto" : "smooth" });
    el.classList.add("is-cited");
    clearTimeout(citedTimer);
    citedTimer = setTimeout(() => el.classList.remove("is-cited"), 3200);
  }
  function route() {
    const r = parseHash();
    if (!r) return;
    const { page, entry } = r;
    if (page !== current) {
      if (current) scrollMem[current] = window.scrollY;
      const prev = current;
      current = page;
      $$(".view").forEach(v => { v.hidden = v.dataset.view !== page; });
      $$(".nav-links a").forEach(a => a.dataset.page === page ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
      document.title = page === "ask" ? "Shiv Amba" : `${S.pages[page].title} | Shiv Amba`;
      if (!entry) {
        window.scrollTo(0, scrollMem[page] || 0);
        if (prev) { const h1 = $(`[data-view="${page}"] h1`); if (h1) h1.focus({ preventScroll: true }); }
      }
    }
    if (entry) requestAnimationFrame(() => focusEntry(entry));
  }
  window.addEventListener("hashchange", route);

  /* ---------------- Chat: interpretation ---------------- */
  const STOP = new Set("a an the of to in on for and or is are was were be been has have had do does did what whats which who whom where when how why about tell me shiv shivansh amba he his him he's s it its this that these those any can could you your i my with at by from as please give show list explain describe some".split(" "));
  const GENERIC = new Set("know use used using like much many make made thing things stuff year years time also just really kind sort".split(" "));
  const OUT = new Set("age old birthday born girlfriend boyfriend wife husband married marry dating single relationship religion religious god politics political vote voted democrat republican salary salaries paid income earn earns earning money rich net worth compensation address phone family parents mother father mom dad sister brother siblings height weight tall health sick illness medical diet sexuality gay straight ethnicity race caste nationality citizenship immigration weather recipe recipes poem poems joke jokes song songs lyrics story stories homework essay movie movies sports football soccer cricket stock stocks bitcoin crypto price prices horoscope".split(" "));
  const tokens = s => s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "").replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(t => t.length > 1 && !STOP.has(t));
  const contentTokens = s => s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(t => t.length >= 4 && !STOP.has(t) && !CT_STOP.has(t));
  const CT_STOP = new Set("built uses with that from have into their there also both each than then they them more most only over such very will would should being doing while after before under between through during without within same where when which".split(" "));

  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 3;
    const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) dp[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return dp[a.length][b.length];
  }
  function scoreIntent(qt, intent) {
    let sum = 0;
    for (const t of qt) {
      let best = 0;
      for (const k of intent.keys) {
        if (t === k) { best = 3; break; }
        if (t.length >= 4 && k.length >= 4 && (k.startsWith(t) || t.startsWith(k))) best = Math.max(best, 2);
        else if (t.length >= 5 && k.length >= 5) { const d = lev(t, k); if (d <= (t.length >= 8 ? 2 : 1)) best = Math.max(best, 2); }
      }
      sum += best;
    }
    return sum;
  }
  function bestIntent(q) {
    const exact = S.answers.find(a => a.q.toLowerCase() === q.toLowerCase());
    if (exact) return { intent: exact, score: 99 };
    const qt = tokens(q);
    let best = null, bs = 0;
    S.answers.forEach(a => { const s = scoreIntent(qt, a); if (s > bs) { bs = s; best = a; } });
    return { intent: bs >= 3 ? best : null, score: bs, qt };
  }
  function intentSentences(intent) {
    if (intent.type === "events") return S.events.map(e => ({ t: `${e.title}, ${e.when}${e.place ? ", " + e.place : ""}.`, src: [e.id] }));
    return intent.sentences;
  }
  function intentIntro(intent) {
    return intent.type === "events" ? `Field notes has ${S.events.length} entries from 2026.` : "";
  }

  const GUIDE_OUT = "I can only answer questions about Shiv’s professional life and projects: his builds, work, research, stack, events, and writing.";
  const GUIDE_NONE = "Nothing on this site covers that. I can only answer questions about Shiv’s professional life and projects, so try one of these:";
  let guideTurn = 0;
  const guideChips = () => { const n = S.chips.length; const start = (guideTurn++ * 4) % n; return [0, 1, 2, 3].map(i => S.chips[(start + i) % n]); };
  const plain = (text, withChips = true) => ({ kind: "plain", text, chips: withChips ? guideChips() : [] });

  function precheck(q) {
    const l = q.toLowerCase();
    if (/(ignore|disregard|forget|override|bypass).{0,40}(instruction|rule|prompt|above|previous|guardrail)|system prompt|jailbreak|developer mode|pretend (to be|you)|act as|role ?play|you are now|repeat (the|your) (text|prompt|instructions)/.test(l)) return plain(GUIDE_OUT);
    if (/\b(write|compose|generate|create|make|draft|translate|code|solve)\b.{0,30}\b(poem|story|song|essay|joke|code|script|function|program|email|letter|tweet|limerick|haiku|recipe|homework|equation|sql query)\b/.test(l)) return plain(GUIDE_OUT);
    if (/^(hi|hey|hello|hiya|yo|hola|namaste|good (morning|afternoon|evening))\b[\s!.,?]*(there|shiv|claude)?[\s!.,?]*$/.test(l)) return plain("Hi. I answer questions about Shiv’s professional life and projects. Pick a question or ask your own.");
    if (/^(thanks|thank you|thx|ty|cool|great|nice|ok|okay)\b[\s!.]*$/.test(l)) return plain("You’re welcome. Ask about anything else in Shiv’s work.", false);
    if (/\b(who|what) are you\b|are you (an? )?(ai|bot|robot|llm|gpt|chatgpt|claude|human|real)\b|how do you work/.test(l)) return plain("I answer questions about Shiv’s professional life and projects using only the entries on this site, and each sentence cites the entry it came from.");
    return null;
  }

  let lastSources = [];
  const shown = new Set();
  function followUp(q) {
    const l = q.toLowerCase().trim();
    const isMore = /^(tell me more|more|go on|continue|elaborate|expand|what else|more details?|details?|keep going|and\??|say more)\b/.test(l) || /\bmore about (that|this|it|those)\b/.test(l);
    if (!isMore) return null;
    if (!lastSources.length) return plain(GUIDE_OUT);
    const sentences = [];
    lastSources.slice(0, 3).forEach(id => {
      REG[id].more.filter(m => !shown.has(m)).slice(0, 2).forEach(m => sentences.push({ t: m, src: [id] }));
    });
    if (!sentences.length) return plain("That covers what the site has on it. Try one of these:");
    return { kind: "answer", intro: "", sentences };
  }

  function localAnswer(q) {
    const f = followUp(q);
    if (f) return f;
    const { intent, score, qt } = bestIntent(q);
    const l = q.toLowerCase();
    const judging = /\b(good|great|best|better|worse|worst|smart|talented|rate|rating|rank|ranking|impressive|strong|weak|skilled|qualified|should (i|we) hire|worth hiring|recommend)\b/.test(l);
    if (intent) {
      return { kind: "answer", intro: judging ? "I don’t rate or rank Shiv’s work. Here is what the entries say, with sources." : intentIntro(intent), sentences: intentSentences(intent) };
    }
    const toks = qt || tokens(q);
    if (toks.some(t => OUT.has(t))) return plain(GUIDE_OUT);
    if (/\b(who\s+is|who's|whos|tell me about|introduce|summari[sz]e|overview of)\b/.test(l) && /\b(shiv|shivansh|amba|him|he)\b/.test(l)) {
      const who = S.answers.find(a => a.q === "Who is Shiv?");
      if (who) return { kind: "answer", intro: "", sentences: who.sentences };
    }
    if (judging) {
      const shipped = S.answers.find(a => a.q === "What has he shipped?");
      return { kind: "answer", intro: "I don’t rate or rank Shiv’s work. Here is what the entries say, with sources.", sentences: shipped.sentences };
    }
    const ft = toks.filter(t => t.length >= 3 && !GENERIC.has(t));
    if (ft.length) {
      const hits = Object.values(REG).map(r => {
        let s = 0;
        ft.forEach(t => { const m = r.text.match(new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")); if (m) s += m.length; });
        return { r, s };
      }).filter(h => h.s > 0).sort((a, b) => b.s - a.s).slice(0, 3);
      if (hits.length) return { kind: "answer", intro: "No prepared answer covers that. These entries mention it:", sentences: hits.map(h => ({ t: h.r.summary, src: [h.r.id] })) };
    }
    return plain(GUIDE_NONE);
  }

  /* The gate: every model-drafted sentence must cite real entries, use only their numbers, and share their wording. */
  function gate(list) {
    const arr = Array.isArray(list) ? list.slice(0, 6) : [];
    const out = [];
    arr.forEach(s => {
      if (!s || typeof s.t !== "string" || !Array.isArray(s.src)) return;
      const t = s.t.trim();
      if (!t || t.length > 400) return;
      const ids = [...new Set(s.src.filter(id => typeof id === "string" && REG[id]))].slice(0, 3);
      if (!ids.length) return;
      const src = ids.map(id => REG[id].full).join(" ");
      const nums = t.toLowerCase().replace(/,/g, "").match(/\d+(\.\d+)?/g) || [];
      if (nums.some(n => !src.includes(n))) return;
      const words = contentTokens(t);
      if (words.length) {
        const hit = words.filter(w => src.includes(w.slice(0, Math.min(w.length, 5)))).length;
        if (hit / words.length < 0.6) return;
      }
      out.push({ t, src: ids });
    });
    return { out, total: arr.length, dropped: arr.length - out.length };
  }

  async function remote(q, prior) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
      const r = await fetch(S.config.askEndpoint, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: q, history: prior }), signal: ctrl.signal
      });
      if (!r.ok) throw new Error("status " + r.status);
      return await r.json();
    } finally { clearTimeout(timer); }
  }

  /* ---------------- Chat: rendering ---------------- */
  const thread = $("#thread");
  const composer = $("#composer");
  const input = $("#q");
  const asked = [];
  let active = null;

  function makeTurn(q) {
    const el = document.createElement("article");
    el.className = "turn";
    el.innerHTML = `<p class="q-bubble"></p>
      <div class="a is-working">
        <p class="a-status"><span class="dot" aria-hidden="true"></span><span class="st"></span></p>
        <div class="a-grid no-src"><div class="a-body"></div><aside class="a-src" hidden><h3>Sources</h3><ol></ol></aside></div>
        <p class="a-foot" hidden></p>
      </div>`;
    $(".q-bubble", el).textContent = q;
    thread.appendChild(el);
    return { el, a: $(".a", el), status: $(".a-status", el), st: $(".st", el), grid: $(".a-grid", el), body: $(".a-body", el), aside: $(".a-src", el), ol: $(".a-src ol", el), foot: $(".a-foot", el) };
  }
  async function typeText(p, text, tok) {
    const tn = document.createTextNode("");
    p.appendChild(tn);
    if (RM.matches || tok.skip) { tn.data = text; return; }
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.setAttribute("aria-hidden", "true");
    p.appendChild(caret);
    const parts = text.match(/\S+\s*/g) || [text];
    for (let i = 0; i < parts.length; i += 2) {
      if (tok.skip) { tn.data = text; break; }
      tn.data += parts.slice(i, i + 2).join("");
      await sleep(26 + Math.random() * 30);
    }
    caret.remove();
  }
  async function render(turn, plan, foot) {
    const tok = { skip: false };
    active = tok;
    turn.a.classList.remove("is-working");
    turn.status.hidden = true;
    turn.a.classList.add("is-typing");
    if (plan.kind === "plain") {
      const p = document.createElement("p");
      p.className = "a-plain";
      turn.body.appendChild(p);
      await typeText(p, plan.text, tok);
    } else {
      if (plan.intro) {
        const p = document.createElement("p");
        p.className = "a-intro";
        turn.body.appendChild(p);
        await typeText(p, plan.intro, tok);
      }
      const order = [];
      for (const s of plan.sentences) {
        const p = document.createElement("p");
        turn.body.appendChild(p);
        await typeText(p, s.t, tok);
        shown.add(s.t);
        s.src.filter(id => REG[id]).forEach(id => {
          let n = order.indexOf(id) + 1;
          if (!n) {
            order.push(id);
            n = order.length;
            const li = document.createElement("li");
            li.innerHTML = `<a href="${hrefFor(id)}"><span class="n">${n}</span><span><strong>${esc(REG[id].label)}</strong><span class="sec">${esc(REG[id].section)}</span></span></a>`;
            turn.ol.appendChild(li);
            turn.aside.hidden = false;
            turn.grid.classList.remove("no-src");
          }
          const a = document.createElement("a");
          a.className = "cite";
          a.href = hrefFor(id);
          a.textContent = n;
          a.setAttribute("aria-label", `Source ${n}: ${REG[id].label}`);
          p.appendChild(a);
        });
      }
      lastSources = order;
      turn.foot.textContent = foot || `${plan.sentences.length} ${plan.sentences.length === 1 ? "sentence" : "sentences"}, each cited to an entry on this site.`;
      turn.foot.hidden = false;
    }
    if (plan.chips && plan.chips.length) {
      const row = document.createElement("div");
      row.className = "chip-row";
      row.innerHTML = plan.chips.map(q => askChip(q, true)).join("");
      turn.a.appendChild(row);
    }
    turn.a.classList.remove("is-typing");
    if (active === tok) active = null;
  }
  function skipTyping() { if (active) active.skip = true; }

  async function ask(raw) {
    const q = String(raw || "").trim().slice(0, 300);
    if (!q) return;
    if (current !== "ask") location.hash = "#/";
    skipTyping();
    input.value = "";
    const turn = makeTurn(q);
    $("#newChat").hidden = false;
    requestAnimationFrame(() => turn.el.scrollIntoView({ block: "start", behavior: RM.matches ? "auto" : "smooth" }));
    const prior = asked.slice(-3);
    asked.push(q);
    try { history.replaceState(null, "", "?q=" + encodeURIComponent(q) + location.hash); } catch (e) {}

    let plan = precheck(q);
    let foot = "";
    if (plan) {
      turn.st.textContent = "Reading the question…";
      await sleep(RM.matches ? 0 : 300);
    } else if (MODEL_MODE) {
      turn.st.textContent = `Reading the question and drafting from ${ENTRY_COUNT} entries…`;
      try {
        const data = await remote(q, prior);
        if (data && data.scope === "out") plan = plain(GUIDE_OUT);
        else {
          const g = gate(data && data.sentences);
          if (g.out.length) {
            plan = { kind: "answer", intro: "", sentences: g.out };
            foot = `The model drafted ${g.total} ${g.total === 1 ? "sentence" : "sentences"}; ${g.out.length} passed the source check${g.dropped ? ` and ${g.dropped} ${g.dropped === 1 ? "was" : "were"} dropped` : ""}.`;
          }
        }
      } catch (e) {
        foot = "The model was unavailable, so this answer came from the site’s local index.";
      }
    }
    if (!plan) {
      turn.st.textContent = `Matching your question against ${ENTRY_COUNT} entries…`;
      await sleep(RM.matches ? 0 : 380);
      plan = localAnswer(q);
    }
    await render(turn, plan, foot);
  }

  composer.addEventListener("submit", e => { e.preventDefault(); ask(input.value); });
  $("#newChat").addEventListener("click", () => {
    skipTyping();
    thread.innerHTML = "";
    asked.length = 0;
    lastSources = [];
    shown.clear();
    $("#newChat").hidden = true;
    try { history.replaceState(null, "", location.pathname + location.hash); } catch (e) {}
    input.focus();
  });

  document.addEventListener("click", e => {
    const chip = e.target.closest(".chip[data-q]");
    if (chip) { e.preventDefault(); ask(chip.dataset.q); return; }
    if (e.target.closest(".a.is-typing") && !e.target.closest("a")) { skipTyping(); return; }
    const link = e.target.closest('a[href^="#/"]');
    if (link && link.getAttribute("href") === location.hash) {
      const r = parseHash();
      if (r && r.entry) { e.preventDefault(); focusEntry(r.entry); }
    }
    if (e.target.closest(".skip")) { e.preventDefault(); $("#main").focus(); }
  });

  /* ---------------- Theme ---------------- */
  const root = document.documentElement;
  $("#themeBtn").addEventListener("click", () => {
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------------- Start ---------------- */
  route();
  const initialQ = new URLSearchParams(location.search).get("q");
  if (initialQ) ask(initialQ);
  renderGate();

  /* Exposed for tests and the console. */
  window.__site = { gate, localAnswer, precheck, REG };
})();