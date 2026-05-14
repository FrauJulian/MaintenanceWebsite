const messages = {
  en: "Sorry we're down for maintenance.",
  de: "Entschuldigung, wir sind wegen Wartungsarbeiten offline.",
  sk: "Prep\u00e1\u010dte, prebieha \u00fadr\u017eba.",
  cs: "Omlouv\u00e1me se, prob\u00edh\u00e1 \u00fadr\u017eba.",
  nl: "Sorry, we zijn offline voor onderhoud.",
  sv: "Tyv\u00e4rr, vi \u00e4r nere f\u00f6r underh\u00e5ll.",
  no: "Beklager, vi er nede for vedlikehold.",
  pl: "Przepraszamy, trwa konserwacja.",
  it: "Spiacenti, siamo offline per manutenzione.",
  fr: "D\u00e9sol\u00e9s, nous sommes en maintenance.",
  es: "Lo sentimos, estamos en mantenimiento.",
  sl: "Oprostite, poteka vzdr\u017eevanje.",
  da: "Beklager, vi er nede for vedligeholdelse.",
};

const preferredLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
const language = preferredLanguage.toLowerCase().split("-")[0];
const message = messages[language] || messages.en;

document.documentElement.lang = messages[language] ? language : "en";
document.getElementById("maintenance-message").textContent = message;
