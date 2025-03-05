// Obiekt z tłumaczeniami:
const translations = {
    pl: {
      title: "Rowery Markowe – Strona główna",
      "nav-home": "Strona główna",
      "nav-about": "O nas",
      "nav-oferta": "Oferta",
      "nav-serwis": "Serwis",
      "nav-finansowanie": "Finansowanie",
      "nav-kontakt": "Kontakt",
      "hero-title": "Rowery Markowe",
      "hero-subtitle": "Profesjonalny sklep rowerowy z pasją.",
      "hero-cta": "Sprawdź ofertę",
      "intro-heading": "Witaj w Rowery Markowe!",
      "intro-text": "Jesteśmy grupą zapalonych rowerzystów, którzy postanowili stworzyć miejsce idealne dla wszystkich miłośników jednośladów.",
      footer: "© 2025 Rowery Markowe – Wszelkie prawa zastrzeżone."
    },
    en: {
      title: "Rowery Markowe – Home Page",
      "nav-home": "Home",
      "nav-about": "About us",
      "nav-oferta": "Offer",
      "nav-serwis": "Service",
      "nav-finansowanie": "Financing",
      "nav-kontakt": "Contact",
      "hero-title": "Rowery Markowe",
      "hero-subtitle": "A professional bike shop with passion.",
      "hero-cta": "Check our offer",
      "intro-heading": "Welcome to Rowery Markowe!",
      "intro-text": "We are a group of enthusiastic cyclists who decided to create a perfect place for all bicycle lovers.",
      footer: "© 2025 Rowery Markowe – All rights reserved."
    },
    lt: {
      title: "Rowery Markowe – Pagrindinis puslapis",
      "nav-home": "Pagrindinis",
      "nav-about": "Apie mus",
      "nav-oferta": "Pasiūlymas",
      "nav-serwis": "Servisas",
      "nav-finansowanie": "Finansavimas",
      "nav-kontakt": "Kontaktai",
      "hero-title": "Rowery Markowe",
      "hero-subtitle": "Profesionali dviračių parduotuvė su aistra.",
      "hero-cta": "Peržiūrėkite pasiūlymą",
      "intro-heading": "Sveiki atvykę į Rowery Markowe!",
      "intro-text": "Mes esame dviratininkai entuziastai, nusprendę sukurti tobulą vietą visiems vienaračių mylėtojams.",
      footer: "© 2025 Rowery Markowe – Visos teisės saugomos."
    }
  };
  
  // Funkcja przełączająca język
  function setLanguage(lang) {
    // Zmień atrybut `lang` w <html> (dla dostępności, SEO)
    document.documentElement.lang = lang;
  
    // Pobieramy wszystkie elementy z atrybutem data-lang
    const elements = document.querySelectorAll("[data-lang]");
    
    elements.forEach(el => {
      // klucz = data-lang="..."
      const key = el.getAttribute("data-lang");
      // Podmiana tekstu z obiektu translations[lang][key]
      if(translations[lang] && translations[lang][key]) {
        if(el.tagName.toLowerCase() === "title") {
          // Specjalny przypadek, gdy zmieniamy zawartość <title>
          document.title = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
  }
  
  // Gdy strona się załaduje:
  document.addEventListener("DOMContentLoaded", () => {
    // Ustawiamy domyślny język na polski (lub inny)
    setLanguage("pl");
    
    // Nasłuchujemy kliknięć w buttony data-setlang="xx"
    const langButtons = document.querySelectorAll("[data-setlang]");
    langButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const chosenLang = btn.getAttribute("data-setlang");
        setLanguage(chosenLang);
      });
    });
  });
  