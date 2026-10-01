/* ==========================================================================
   script.js — renderização e interações
   (Você não precisa editar este arquivo. O conteúdo fica em js/conteudo.js)
   ========================================================================== */
(function () {
  "use strict";
  const C = window.CONTEUDO;
  const $ = (s, el = document) => el.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  // *texto* -> <em>texto</em>  ·  **texto** -> <strong>texto</strong>
  const fmt = (t) => (t || "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const ytPoster = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const vimeoPoster = (id) => `https://vumbnail.com/${id}.jpg`;
  const playIcon = `<span><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#F3EFE7"/></svg></span>`;

  /* ---------------- HERO ---------------- */
  (function hero() {
    const m = $("#heroInner"); if (!m || !C) return;
    const i = C.identidade;
    m.innerHTML =
      `<div class="hero-tag"><span class="ln"></span>${i.funcao}</div>` +
      `<h1>${i.nome.replace(" ", "<br>")}</h1>` +
      `<p class="disc">${i.disciplinas.split(" · ").join(" · ")}</p>` +
      `<div class="meta"><span>${i.local}</span><span>${i.idade}</span></div>`;
  })();

  /* ---------------- SOBRE ---------------- */
  (function sobre() {
    if (!C) return;
    const s = C.sobre;
    if ($("#sobreChamada")) $("#sobreChamada").innerHTML = fmt(s.chamada);
    if ($("#sobreText")) $("#sobreText").innerHTML = s.paragrafos.map(p => `<p>${fmt(p)}</p>`).join("");
    const ret = $("#sobreRetrato"); if (ret) { ret.src = s.retrato.src; ret.alt = s.retrato.alt; }
    const ap = $("#sobreApoio");
    if (ap) s.apoio.forEach(f => { const im = el("img"); im.src = f.src; im.alt = f.alt; im.loading = "lazy"; ap.appendChild(im); });
    const tg = $("#sobreTags");
    if (tg) s.competencias.forEach(c => tg.appendChild(el("span", "tag", c)));
    const tj = $("#sobreTraj");
    if (tj) s.trajetoria.forEach(t => {
      tj.appendChild(el("div", "traj-row",
        `<div class="per">${t.periodo}</div><div><div class="car">${t.cargo}</div><div class="org">${t.org}</div></div>`));
    });
  })();

  /* ---------------- VIDEO CARD (facade) ---------------- */
  function videoCard(v, extraLabel) {
    const card = el("div", "vcard vf");
    const poster = v.tipo === "youtube" ? ytPoster(v.id) : (v.tipo === "vimeo" ? vimeoPoster(v.id) : v.poster);
    card.innerHTML =
      `<img class="poster" src="${poster}" alt="${v.titulo || ""}" loading="lazy">` +
      (v.formato ? `<span class="fmt">${v.formato}</span>` : "") +
      `<div class="play">${playIcon}</div>` +
      `<div class="vlabel"><div class="t">${v.titulo || ""}</div>` +
      (extraLabel ? `<div class="proj">${extraLabel}</div>` : (v.tipo === "youtube" ? `<div class="m">YouTube</div>` : (v.tipo === "vimeo" ? `<div class="m">Vimeo</div>` : `<div class="m">Vídeo</div>`))) +
      `</div>`;
    card.addEventListener("click", function go() {
      if (card.classList.contains("playing")) return;
      card.classList.add("playing");
      let node;
      if (v.tipo === "youtube") {
        node = el("iframe");
        node.src = `https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`;
        node.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        node.allowFullscreen = true;
      } else if (v.tipo === "vimeo") {
        node = el("iframe");
        node.src = `https://player.vimeo.com/video/${v.id}?autoplay=1&title=0&byline=0&portrait=0&playsinline=1`;
        node.allow = "autoplay; fullscreen; picture-in-picture";
        node.allowFullscreen = true;
      } else {
        node = el("video");
        node.src = v.src; node.controls = true; node.autoplay = true;
        node.playsInline = true; node.setAttribute("playsinline", "");
        node.poster = v.poster || "";
      }
      card.appendChild(node);
    });
    return card;
  }

  /* ---------------- GALLERY (with lightbox hooks) ---------------- */
  function gallery(fotos, cls) {
    const g = el("div", cls || "gallery");
    fotos.forEach(f => {
      const cell = el("div", "cell" + (f.destaque ? " feat" : ""));
      const im = el("img"); im.src = f.src; im.alt = f.alt || ""; im.loading = "lazy";
      cell.appendChild(im);
      if (f.categoria) cell.appendChild(el("span", "cat", f.categoria));
      cell.dataset.full = f.src; cell.dataset.cap = f.alt || "";
      cell.addEventListener("click", () => openLightbox(g, cell));
      g.appendChild(cell);
    });
    return g;
  }

  /* ---------------- PROJETOS ---------------- */
  (function projetos() {
    const mount = $("#projetosMount"); if (!mount || !C) return;
    C.projetos.forEach(p => {
      const sec = el("div", "proj reveal");
      const head = el("div", "proj-head",
        `<div class="proj-num">${p.numero}</div>` +
        `<div class="proj-titles"><h3>${p.titulo}</h3><div class="sub">${p.subtitulo}</div></div>`);
      sec.appendChild(head);
      sec.appendChild(el("p", "proj-resumo", p.resumo));
      if (p.destaques && p.destaques.length) {
        const ul = el("ul", "proj-destaques");
        p.destaques.forEach(d => ul.appendChild(el("li", null, d)));
        sec.appendChild(ul);
      }
      if (p.fotos && p.fotos.length) sec.appendChild(gallery(p.fotos));
      if (p.videos && p.videos.length) {
        const vg = el("div", "videos");
        p.videos.forEach(v => vg.appendChild(videoCard(v)));
        sec.appendChild(vg);
      }
      if (p.site) {
        const a = el("a", "proj-site");
        a.href = p.site.url; a.target = "_blank"; a.rel = "noopener";
        a.innerHTML = `${p.site.label} <span class="arr">→</span>`;
        sec.appendChild(a);
      }
      mount.appendChild(sec);
    });
  })();

  /* ---------------- FOTOGRAFIA ---------------- */
  (function fotografia() {
    if (!C) return;
    if ($("#fotoIntro")) $("#fotoIntro").textContent = C.fotografia.intro;
    const grid = $("#fotoGrid");
    if (grid) {
      const g = gallery(C.fotografia.fotos, "foto-grid");
      // move children into existing grid container to keep its class
      while (g.firstChild) grid.appendChild(g.firstChild);
      grid._isGallery = true;
    }
  })();

  /* ---------------- AUDIOVISUAL ---------------- */
  (function audiovisual() {
    if (!C) return;
    if ($("#avIntro")) $("#avIntro").textContent = C.audiovisual.intro;
    const reel = $("#avReel");
    if (reel) C.audiovisual.videos.forEach(v => reel.appendChild(videoCard(v, v.projeto)));
  })();

  /* ---------------- SITES ---------------- */
  (function sites() {
    if (!C) return;
    if ($("#sitesIntro")) $("#sitesIntro").textContent = C.sites.intro;
    const grid = $("#sitesGrid");
    if (grid) C.sites.itens.forEach(s => {
      const a = el("a", "site-card");
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      a.innerHTML =
        `<div class="thumb"><img src="${s.imagem}" alt="${s.nome}" loading="lazy"></div>` +
        `<div class="body"><div class="nome">${s.nome}<span class="arr">↗</span></div>` +
        `<div class="desc">${s.desc}</div>` +
        `<div class="url">${s.url.replace(/^https?:\/\//, "")}</div></div>`;
      grid.appendChild(a);
    });
  })();

  /* ---------------- WORKSHOPS ---------------- */
  (function workshops() {
    if (!C) return;
    const w = C.workshops;
    if ($("#wsTitulo")) $("#wsTitulo").textContent = w.titulo;
    if ($("#wsPublico")) $("#wsPublico").textContent = w.publico;
    if ($("#wsTexto")) $("#wsTexto").textContent = w.texto;
    const tp = $("#wsTopicos");
    if (tp) w.topicos.forEach(t => tp.appendChild(el("li", null, t)));
    const media = $("#wsMedia");
    if (media) w.fotos.forEach(f => {
      const m = el("div", "m"); const im = el("img");
      im.src = f.src; im.alt = f.alt || ""; im.loading = "lazy";
      m.appendChild(im);
      m.dataset.full = f.src; m.dataset.cap = f.alt || "";
      m.style.cursor = "zoom-in";
      m.addEventListener("click", () => openLightbox(media, m));
      media.appendChild(m);
    });
  })();

  /* ---------------- CONTATO + FOOTER ---------------- */
  (function contato() {
    if (!C) return;
    const ct = C.contato;
    if ($("#contChamada")) $("#contChamada").textContent = ct.chamada;
    const wa = $("#contWa");
    if (wa) { wa.href = ct.whatsappLink; wa.innerHTML = `WhatsApp · ${ct.whatsappNumero} <span style="font-size:.7em">→</span>`; }
    const list = $("#contList");
    if (list) {
      const email = el("a"); email.href = `mailto:${ct.email}`;
      email.innerHTML = `<span class="lbl">E-mail</span><span>${ct.email}</span>`;
      list.appendChild(email);
      ct.redes.forEach(r => {
        const a = el("a"); a.href = r.url; a.target = "_blank"; a.rel = "noopener";
        a.innerHTML = `<span class="lbl">${r.nome}</span><span>${r.handle}</span>`;
        list.appendChild(a);
      });
    }
    if ($("#footName")) $("#footName").textContent = `© ${new Date().getFullYear()} ${C.identidade.nome}`;
  })();

  /* ---------------- LIGHTBOX ---------------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let lbList = [], lbIdx = 0;
  function openLightbox(container, cell) {
    lbList = Array.from(container.querySelectorAll("[data-full]"));
    lbIdx = lbList.indexOf(cell);
    showLb();
    lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function showLb() {
    const c = lbList[lbIdx]; if (!c) return;
    lbImg.src = c.dataset.full; lbImg.alt = c.dataset.cap || "";
    lbCap.textContent = c.dataset.cap || "";
  }
  function closeLb() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; lbImg.src = ""; }
  function move(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLb(); }
  if (lb) {
    $("#lbClose").addEventListener("click", closeLb);
    $("#lbPrev").addEventListener("click", e => { e.stopPropagation(); move(-1); });
    $("#lbNext").addEventListener("click", e => { e.stopPropagation(); move(1); });
    lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") move(-1);
      else if (e.key === "ArrowRight") move(1);
    });
  }

  /* ---------------- NAV: mobile toggle + scrolled + active ---------------- */
  const header = $("#header"), nav = $("#nav"), toggle = $("#navToggle");
  if (toggle) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.textContent = open ? "Fechar" : "Menu";
  });
  if (nav) nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); if (toggle) toggle.textContent = "Menu";
  }));
  const onScroll = () => { if (header) header.classList.toggle("scrolled", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  const navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];
  const sections = navLinks.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  const toTop = $("#toTop");
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------------- SCROLL REVEAL ---------------- */
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  // observe current + future .reveal elements
  function bindReveals() { document.querySelectorAll(".reveal:not(.in)").forEach(r => revealObs.observe(r)); }
  bindReveals();
  // safety: reveal everything after load in case observer misses
  window.addEventListener("load", () => setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach(r => {
      const rect = r.getBoundingClientRect();
      if (rect.top < window.innerHeight) r.classList.add("in");
    });
  }, 400));
})();
