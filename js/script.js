// ==========================
// PERFIL
// ==========================
const PROFILE = {
  whatsapp: "5493563491364",
  email: "alejochiare@gmail.com",
  instagram: "https://www.instagram.com/alejochiaretta/?hl=es-la"
};

// ==========================
// PROYECTOS (editá acá)
// ==========================
const PROJECTS = [
  {
    key: "turismo",
    title: "Turismo Miramar",
    status: "Público",
    desc: "Web institucional para promoción turística y gestión de contenido.",
    goal: "Posicionar la ciudad online y mantener la info actualizada sin depender de terceros.",
    impact: "Diseño + estructura + admin para publicar contenidos rápidamente.",
    tech: "HTML · CSS · JavaScript · PHP · MySQL",
    result: "Sitio público + panel de gestión a medida.",
    link: "https://turismomiramar.com",
    client: { url: "https://www.instagram.com/miramardeansenuza/" },
    tags: ["Web", "Admin", "Contenido"],
    cover: "assets/imagenmir.jpg",
    video: "assets/WhatsApp Video 2026-01-10 at 16.31.52.mp4"
  },
  {
    key: "pedidos-hotel-ansenuza",
    title: "Carta QR + Pedidos · Hotel Ansenuza",
    status: "Privado",
    desc: "Carta digital por QR para que el cliente pida comida desde la mesa o la habitación, y el pedido llegue directo a cocina.",
    goal: "Agilizar pedidos y reducir errores, centralizando todo el flujo entre cliente, mozo y cocina.",
    impact: "Sistema completo: QR por mesa/habitación, carrito, envío a cocina y panel de gestión con control de estados.",
    tech: "HTML · CSS · JavaScript · PHP · MySQL",
    result: "Cocina recibe pedidos con mesa/habitación, mozo (si aplica), detalle + total, y gestión por estados: Pendiente → En preparación → Listo.",
    link: "",
    client: { url: "https://www.instagram.com/ansenuzahotel/?hl=es-la" },
    tags: ["QR", "Pedidos", "Hotel"],
    cover: "assets/hotelansenuza.jpg",
    video: "assets/hotel.ansenuza.mp4"
  },
  {
    key: "valle_del_sol",
    title: "Valle del Sol",
    status: "Privado",
    desc: "Control de insumos para un complejo de 72 cabañas.",
    goal: "Ordenar consumos, reposiciones y stock con alta rotación.",
    impact: "Flujo simple para registrar consumos y sugerir reposición.",
    tech: "ManyChat · n8n · Node.js/Express · API REST · JSON · Validaciones",
    result: "Inventario centralizado + control de movimientos.",
    link: "",
    client: { url: "https://www.instagram.com/complejovalledelsol/?hl=es-la" },
    tags: ["Stock", "Inventario", "Control"],
    cover: "assets/sol.jpg",
    video: "assets/valledelsol.mp4"
  },
  {
    key: "Codta-transportes",
    title: "Codta Transportes",
    status: "Privado",
    desc: "Bot de Instagram para consultar horarios y disponibilidad de viajes por origen/destino, integración con IA para responder preguntas frecuentes.",
    goal: "Automatizar consultas frecuentes y reducir el tiempo de atención manual sin perder claridad.",
    impact: "Diseño del flujo conversacional + integración ManyChat → n8n → API para responder en segundos.",
    tech: "ManyChat · n8n · Node.js/Express · API REST · JSON · Validaciones",
    result: "Consultas automáticas con horarios por día (L-V / Sáb / Dom-Feriados) + precio, filtrando por ciudad y destino.",
    link: "",
    client: { url: "https://www.instagram.com/codtatransporte/?hl=es-la" },
    tags: ["Instagram", "API", "Automatización"],
    cover: "assets/imagencodta.jpg",
    video: "assets/codtavideo.mp4"
  },
  {
    key: "sistema-gym",
    title: "Sistema de Gestión para Gimnasio",
    status: "Privado",
    desc: "Sistema interno para la gestión de socios, planes, pagos y vencimientos en un gimnasio.",
    goal: "Centralizar la administración del gimnasio y eliminar Excel/papel para el control diario de socios y cuotas.",
    impact: "Panel administrativo con estados visuales por colores, filtros por plan y gestión rápida de socios, pagos y vencimientos.",
    tech: "HTML · CSS · JavaScript · PHP · MySQL",
    result: "Visualización del estado de cada socio en tiempo real, reducción de morosidad y gestión administrativa más ágil.",
    link: "",
    client: { url: "https://www.instagram.com/imagengym1/?hl=es-la" },
    tags: ["Gym", "Socios", "Pagos"],
    cover: "",
    video: ""
  },
  {
    key: "control-de-campo",
    title: "Control de Campo Agrícola",
    status: "Privado",
    desc: "Sistema interno para organizar campos, lotes, cosechas, eventos y seguimientos (siembra, fertilización, tratamientos, notas y reportes).",
    goal: "Digitalizar el control del campo y tener trazabilidad completa por lote, evitando planillas sueltas y pérdida de info.",
    impact: "Estructura por campos/lotes + registro de eventos + panel de análisis/reportes para decisiones rápidas (costos, avances, histórico).",
    tech: "HTML · CSS · JavaScript · PHP · MySQL · MVC (ASP.NET Core en versión evolutiva) · Reportes",
    result: "Gestión centralizada: cada lote con su historial, eventos por fecha, estados y reportes exportables. Reduce errores y mejora el control operativo.",
    link: "",
    client: { url: "" },
    tags: ["Campo", "Lotes", "Control"],
    cover: "",
    video: ""
  }
  ];

// ==========================
// HELPERS
// ==========================
function esc(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function wppUrl(text){
  const t = text || "Hola Alejo, vi tu portfolio y quiero consultarte por un proyecto.";
  return "https://wa.me/" + PROFILE.whatsapp + "?text=" + encodeURIComponent(t);
}

function wppProjectMsg(projectTitle){
  return `Hola Alejo! Me interesó el proyecto: ${projectTitle}. ¿Me contás más info?`;
}

function isVideoFile(src){
  return /\.(mp4|webm|ogg)$/i.test(src || "");
}

function hasAnyMedia(p){
  const list = Array.isArray(p.media) && p.media.length
    ? p.media
    : (p.video ? [p.video] : (p.cover ? [p.cover] : []));
  const clean = list.filter(Boolean).filter(x => String(x).trim().length);
  return clean.length > 0;
}

// ==========================
// INIT TOP
// ==========================
// ==========================
// LINKS SUPERIORES / CONTACTO
// ==========================
document.getElementById("year").textContent = new Date().getFullYear();

// Instagram
const btnInstagram = document.getElementById("btnInstagram");
if (btnInstagram) {
  btnInstagram.href = PROFILE.instagram;
}

// WhatsApp (topbar)
const btnWhatsapp = document.getElementById("btnWhatsapp");
if (btnWhatsapp) {
  btnWhatsapp.href = wppUrl();
}

// WhatsApp (hero)
const heroWpp = document.getElementById("heroWpp");
if (heroWpp) {
  heroWpp.href = wppUrl("Hola Alejo! Vi tu portfolio y quería consultarte por un proyecto.");
}

// Mail mini (si existe)
const miniMail = document.getElementById("miniMail");
if (miniMail) {
  miniMail.addEventListener("click", (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Consulta por proyecto");
    const body = encodeURIComponent("Hola Alejo, vi tu portfolio y quería consultarte…");
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}

// Mail principal (topbar)
const btnMail = document.getElementById("btnMail");
if (btnMail) {
  btnMail.addEventListener("click", (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Consulta por proyecto");
    const body = encodeURIComponent("Hola Alejo, vi tu portfolio y quería consultarte…");
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}


// ==========================
// MODAL "SOBRE MÍ"
// ==========================
const aboutModal = document.getElementById("aboutModal");
const openAbout = document.getElementById("openAbout");
const closeAbout = document.getElementById("closeAbout");
const modalWpp = document.getElementById("modalWpp");
const modalCopy = document.getElementById("modalCopy");

function openModal(){
  aboutModal.classList.add("open");
  aboutModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModalFn(){
  aboutModal.classList.remove("open");
  aboutModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openAbout.addEventListener("click", openModal);
closeAbout.addEventListener("click", closeModalFn);

aboutModal.addEventListener("click", (e)=>{
  if(e.target === aboutModal) closeModalFn();
});

window.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && aboutModal.classList.contains("open")) closeModalFn();
});

modalWpp.href = wppUrl("Hola Alejo! Vi tu portfolio y quería consultarte por un proyecto.");

modalCopy.addEventListener("click", async ()=>{
  const text =
`Alejo Chiaretta
WhatsApp: +54 9 3563 49-1364
Email: alejochiare@gmail.com
Instagram: @alejochiaretta`;
  try{
    await navigator.clipboard.writeText(text);
    alert("Copiado ✅");
  }catch(err){
    alert("No se pudo copiar.");
  }
});

// ==========================
// RENDER SLIDES
// ==========================
const rail = document.getElementById("rail");
const dotsWrap = document.getElementById("dots");

function slideTemplate(p, idx){
  const tags = (p.tags || [])
    .slice(0,3)
    .map(t => '<span class="tag ' + (idx===0?'brand':'') + '">' + esc(t) + '</span>')
    .join("");

  const status = p.status ? '<span class="pill">' + esc(p.status) + '</span>' : "";

  const hasWeb = !!(p.link && p.link.trim());
  const hasClient = !!(p.client && p.client.url && p.client.url.trim());

  const mediaList = Array.isArray(p.media) && p.media.length
    ? p.media
    : (p.video ? [p.video] : (p.cover ? [p.cover] : []));

  const cleanMedia = (mediaList || []).filter(Boolean).filter(x => String(x).trim().length);

  const ar = p.ar ? ` style="--ar:${esc(p.ar)}"` : "";

  const mediaItems = cleanMedia.map((src, mIdx)=>{
    if(isVideoFile(src)){
      return `
        <div class="mediaItem" data-midx="${mIdx}">
          <video playsinline muted loop preload="metadata" data-video></video>
        </div>`;
    }
    return `
      <div class="mediaItem" data-midx="${mIdx}">
        <img src="${esc(src)}" alt="${esc(p.title)} imagen ${mIdx+1}" loading="lazy" />
      </div>`;
  }).join("");

  const showControls = cleanMedia.length > 1;

  const mediaDots = showControls
    ? `<div class="mediaDots">
        ${cleanMedia.map((_,i)=>`<button class="mediaDot" type="button" data-dot="${i}"></button>`).join("")}
       </div>`
    : "";

  const mediaControls = showControls
    ? `<div class="mediaControls">
         <button class="mediaBtn" type="button" data-prev aria-label="Anterior">‹</button>
         <button class="mediaBtn" type="button" data-next aria-label="Siguiente">›</button>
       </div>`
    : "";

  const consultBtn = `<a class="btn primary" href="${esc(wppUrl(wppProjectMsg(p.title)))}" target="_blank" rel="noopener">Consultar por este proyecto ↗</a>`;

  const emptyOverlay = (!hasAnyMedia(p))
    ? `
      <div class="mediaEmpty">
        <div class="emptyCard">
          <b>Demo privada / sin capturas públicas</b>
          <p>
            Este proyecto es interno. Si querés ver pantallas, flujo o una demo,
            escribime y te lo muestro.
          </p>
          <div class="rowBtns">
            ${consultBtn}
          </div>
        </div>
      </div>
    `
    : "";

  return [
    '<div class="slide" data-idx="', idx, '">',
      '<div class="stageBody">',
        '<div class="pLeft">',
          '<div class="pHeader">',
            '<div>',
              '<h3 class="pTitle">', esc(p.title), '</h3>',
              '<div style="height:8px"></div>',
              '<div class="tags">', tags, '</div>',
            '</div>',
            status,
          '</div>',
          '<p class="pDesc">', esc(p.desc), '</p>',

          '<div class="actionsRow">',
            consultBtn,
            (hasWeb ? '<a class="btn ghost" href="' + esc(p.link) + '" target="_blank" rel="noopener">Ver web ↗</a>' : ''),
            (hasClient ? '<a class="btn" href="' + esc(p.client.url) + '" target="_blank" rel="noopener">Instagram ↗</a>' : ''),
          '</div>',

          '<div class="infoGrid">',
            '<div class="info"><b><i>◎</i> Objetivo</b><p>', esc(p.goal || "—"), '</p></div>',
            '<div class="info"><b><i>↗</i> Aporte</b><p>', esc(p.impact || "—"), '</p></div>',
            '<div class="info"><b><i>⌁</i> Tecnologías</b><p>', esc(p.tech || "—"), '</p></div>',
            '<div class="info"><b><i>✓</i> Resultado</b><p>', esc(p.result || "—"), '</p></div>',
          '</div>',

        '</div>',

        '<div class="pRight">',
          '<div class="device" data-media="1" data-mactive="0"' + ar + '>',
            '<div class="mediaWrap">',
              '<div class="mediaTrack">', mediaItems, '</div>',
            '</div>',
            mediaControls,
            mediaDots,
            emptyOverlay,
          '</div>',
        '</div>',
      '</div>',
    '</div>'
  ].join("");
}

function render(){
  rail.innerHTML = "";
  dotsWrap.innerHTML = "";

  PROJECTS.forEach((p, idx)=>{
    rail.insertAdjacentHTML("beforeend", slideTemplate(p, idx));

    const d = document.createElement("button");
    d.className = "dotBtn";
    d.type = "button";
    d.addEventListener("click", ()=> scrollToIndex(idx));
    dotsWrap.appendChild(d);
  });
}

render();

// ==========================
// MEDIA (REINICIO OK)
// ==========================
function setMediaIndex(deviceEl, idx){
  const track = deviceEl.querySelector(".mediaTrack");
  const dots = Array.from(deviceEl.querySelectorAll(".mediaDot"));
  const items = Array.from(deviceEl.querySelectorAll(".mediaItem"));
  if(!track || !items.length) return;

  const max = items.length - 1;
  const next = Math.max(0, Math.min(max, idx));

  deviceEl.dataset.mactive = String(next);
  track.style.transform = `translateX(-${next * 100}%)`;

  dots.forEach((d,i)=> d.classList.toggle("active", i === next));

  // ✅ pausa + reinicia TODOS los videos de este device
  deviceEl.querySelectorAll("video[data-video]").forEach(v=>{
    try{
      v.pause();
      v.currentTime = 0;
    }catch(e){}
  });

  // ✅ activa el que corresponde (y arranca desde 0)
  const activeItem = items[next];
  const v = activeItem ? activeItem.querySelector("video[data-video]") : null;
  if(v){
    const slide = deviceEl.closest(".slide");
    const slideIdx = slide ? Number(slide.dataset.idx) : 0;
    const p = PROJECTS[slideIdx];

    const mediaList = Array.isArray(p.media) && p.media.length
      ? p.media
      : (p.video ? [p.video] : (p.cover ? [p.cover] : []));
    const cleanMedia = (mediaList || []).filter(Boolean).filter(x => String(x).trim().length);

    const src = cleanMedia[next];
    if(src && v.dataset.src !== src){
      v.src = src;
      v.dataset.src = src;
    }

    try{ v.currentTime = 0; }catch(e){}
    v.play().catch(()=>{});
  }
}

function initMediaCarousels(){
  document.querySelectorAll('.device[data-media="1"]').forEach(device=>{
    setMediaIndex(device, Number(device.dataset.mactive || 0));

    const prev = device.querySelector("[data-prev]");
    const next = device.querySelector("[data-next]");
    const dots = Array.from(device.querySelectorAll(".mediaDot"));
    const count = device.querySelectorAll(".mediaItem").length;

    if(prev) prev.addEventListener("click", ()=>{
      if(!count) return;
      const cur = Number(device.dataset.mactive || 0);
      setMediaIndex(device, (cur - 1 + count) % count);
    });

    if(next) next.addEventListener("click", ()=>{
      if(!count) return;
      const cur = Number(device.dataset.mactive || 0);
      setMediaIndex(device, (cur + 1) % count);
    });

    dots.forEach(d=>{
      d.addEventListener("click", ()=>{
        setMediaIndex(device, Number(d.dataset.dot || 0));
      });
    });
  });
}
initMediaCarousels();

// ✅ función GLOBAL (así la pueden usar scrollToIndex / updateUI)
function resetActiveVideoOnSlide(slideEl){
  if(!slideEl) return;
  const device = slideEl.querySelector('.device[data-media="1"]');
  if(!device) return;

  const active = Number(device.dataset.mactive || 0);
  setMediaIndex(device, active); // esto ya reinicia + play del activo
}

// ==========================
// SLIDER CONTROLS
// ==========================
function getSlides(){
  return Array.from(rail.querySelectorAll(".slide"));
}

function scrollToIndex(i){
  const slides = getSlides();
  if(!slides[i]) return;

  rail.scrollTo({ left: slides[i].offsetLeft, behavior:"smooth" });

  // ✅ al llegar al slide, reinicio video
  setTimeout(()=> resetActiveVideoOnSlide(slides[i]), 280);
}

function getActiveIndex(){
  const slides = getSlides();
  const x = rail.scrollLeft + 10;
  let best = 0, bestDist = Infinity;
  slides.forEach((s, i)=>{
    const dist = Math.abs(s.offsetLeft - x);
    if(dist < bestDist){ bestDist = dist; best = i; }
  });
  return best;
}

let lastActive = 0;

function updateUI(){
  const i = getActiveIndex();
  const dots = Array.from(dotsWrap.querySelectorAll(".dotBtn"));
  dots.forEach((d, idx)=> d.classList.toggle("active", idx === i));

  // ✅ si cambió el slide activo, reinicio video del nuevo
  if(i !== lastActive){
    lastActive = i;
    const slides = getSlides();
    resetActiveVideoOnSlide(slides[i]);
  }
}

rail.addEventListener("scroll", ()=> requestAnimationFrame(updateUI));

document.getElementById("prevBtn").addEventListener("click", ()=>{
  const i = getActiveIndex();
  scrollToIndex(Math.max(0, i - 1));
});

document.getElementById("nextBtn").addEventListener("click", ()=>{
  const i = getActiveIndex();
  scrollToIndex(Math.min(PROJECTS.length - 1, i + 1));
});

window.addEventListener("keydown", (e)=>{
  if(aboutModal.classList.contains("open")) return;

  if(e.key === "ArrowLeft"){
    const i = getActiveIndex();
    scrollToIndex(Math.max(0, i - 1));
  }
  if(e.key === "ArrowRight"){
    const i = getActiveIndex();
    scrollToIndex(Math.min(PROJECTS.length - 1, i + 1));
  }
});

updateUI();

// ==========================
// CONTACTO
// ==========================
document.getElementById("sendWpp").addEventListener("click", ()=>{
  const name = (document.getElementById("cName").value || "").trim();
  const biz  = (document.getElementById("cBiz").value || "").trim();
  const msg  = (document.getElementById("cMsg").value || "").trim();

  const text =
`Hola Alejo! Soy ${name || "—"}.
Rubro/empresa: ${biz || "—"}.

Mensaje:
${msg || "Quería consultarte por un proyecto."}`;

  window.open(wppUrl(text), "_blank", "noopener");
});

document.getElementById("copyMsg").addEventListener("click", async ()=>{
  const name = (document.getElementById("cName").value || "").trim();
  const biz  = (document.getElementById("cBiz").value || "").trim();
  const msg  = (document.getElementById("cMsg").value || "").trim();

  const text =
`Hola Alejo! Soy ${name || "—"}.
Rubro/empresa: ${biz || "—"}.

Mensaje:
${msg || "Quería consultarte por un proyecto."}`;

  try{
    await navigator.clipboard.writeText(text);
    alert("Copiado ✅");
  }catch(err){
    alert("No se pudo copiar. Copialo manualmente.");
  }
});

