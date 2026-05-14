const messages = {
  en: "Sorry we're down for maintenance.",
  de: "Entschuldigung, wir sind wegen Wartungsarbeiten vor\u00fcbergehend nicht erreichbar.",
  es: "Lo sentimos, estamos en mantenimiento.",
  fr: "Desoles, nous sommes en maintenance.",
  it: "Spiacenti, siamo temporaneamente in manutenzione.",
  nl: "Sorry, we zijn tijdelijk offline wegens onderhoud.",
  pl: "Przepraszamy, trwaja prace konserwacyjne.",
  pt: "Desculpe, estamos em manutencao.",
};

const preferredLanguage = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
const language = preferredLanguage.toLowerCase().split("-")[0];
const message = messages[language] || messages.en;

document.documentElement.lang = messages[language] ? language : "en";
document.getElementById("maintenance-message").textContent = message;
