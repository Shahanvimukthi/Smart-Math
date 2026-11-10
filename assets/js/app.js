(() => {
  const languageKey = "smart-math-language";
  const languageButton = document.querySelector("[data-language-toggle]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mainNav = document.querySelector("[data-main-nav]");

  function applyLanguage(language) {
    const selectedLanguage = language === "si" ? "si" : "en";
    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-en][data-si]").forEach((element) => {
      element.innerHTML = element.dataset[selectedLanguage];
    });

    if (languageButton) {
      languageButton.textContent = selectedLanguage === "en" ? "සිංහල" : "English";
      languageButton.setAttribute(
        "aria-label",
        selectedLanguage === "en" ? "Switch to Sinhala" : "Switch to English",
      );
    }

    try {
      localStorage.setItem(languageKey, selectedLanguage);
    } catch (error) {
      console.warn("Could not save the selected language.", error);
    }
  }

  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem(languageKey) || "en";
  } catch (error) {
    console.warn("Could not read the saved language.", error);
  }
  applyLanguage(savedLanguage);

  languageButton?.addEventListener("click", () => {
    applyLanguage(document.documentElement.lang === "en" ? "si" : "en");
  });

  navToggle?.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav?.classList.toggle("is-open", !isExpanded);
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
