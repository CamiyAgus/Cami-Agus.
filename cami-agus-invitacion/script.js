/* Configuración de la invitación Cami & Agus. */
const CONFIG = {
  whatsappNumber: "5493547546814",
  whatsappMessage: "Hola Cami y Agus! confirmo mi asistencia!\n\nNombre:\n\nPagado: sí o no",
  eventDate: "2027-04-03T00:00:00-03:00",
  mapsUrl: "https://www.google.com/maps?q=-31.7464167,-64.3921389",
  giftListUrl: "https://www.wishbob.com/fjsizvahyx",
  transferAlias: "CAMIAGUSINVITACIONES"
};

const intro = document.getElementById("intro");
const site = document.getElementById("site");
const openButton = document.getElementById("openInvitation");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

openButton.addEventListener("click", () => {
  intro.classList.add("is-hidden");
  site.classList.add("is-open");
  site.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "";
  window.setTimeout(() => document.getElementById("story").scrollIntoView({behavior: reduceMotion ? "auto" : "smooth"}), 220);
});
document.body.style.overflow = "hidden";

document.getElementById("mapsLink").href = CONFIG.mapsUrl;
document.getElementById("wishbobLink").href = CONFIG.giftListUrl;
const whatsapp = document.getElementById("whatsappLink");
whatsapp.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

function updateCountdown() {
  const remaining = Math.max(0, new Date(CONFIG.eventDate).getTime() - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
    minutes: Math.floor((remaining % 3600000) / 60000),
    seconds: Math.floor((remaining % 60000) / 1000)
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(id === "days" ? 3 : 2, "0");
  });
}
updateCountdown();
window.setInterval(updateCountdown, 1000);

const copyButton = document.getElementById("copyAlias");
copyButton.addEventListener("click", async () => {
  const feedback = document.getElementById("copyFeedback");
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(CONFIG.transferAlias);
    } else {
      const helper = document.createElement("textarea");
      helper.value = CONFIG.transferAlias;
      helper.setAttribute("readonly", "");
      helper.style.position = "absolute";
      helper.style.left = "-9999px";
      document.body.appendChild(helper);
      helper.select();
      const copied = document.execCommand("copy");
      helper.remove();
      if (!copied) throw new Error("No se pudo copiar");
    }
    feedback.textContent = "Alias copiado";
  } catch {
    feedback.textContent = "No se pudo copiar. Podés seleccionar el alias.";
  }
});

if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.14});
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  const photoBreak = document.querySelector(".photo-break");
  if (photoBreak) {
    const photoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        photoBreak.classList.toggle("photo-visible", entry.isIntersecting);
      });
    }, {threshold: 0.12});
    photoObserver.observe(photoBreak);
  }
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
  document.querySelector(".photo-break")?.classList.add("photo-visible");
}
