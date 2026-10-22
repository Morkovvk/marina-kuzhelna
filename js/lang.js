// ===== ШЛЯХ ДЛЯ ПІДСТОРІНОК =====
const basePath = window.location.pathname.includes("/pages/")
  ? ".."
  : ".";

// ===== ПОТОЧНА МОВА =====
let currentLang = localStorage.getItem("lang") || "uk";

// ===== ЕЛЕМЕНТИ UI =====
const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");
const currentLangSpan = document.querySelector(".current-lang");

// ===== ВІДКРИТТЯ/ЗАКРИТТЯ ДРОПДАУНУ =====
if (langBtn) {
  langBtn.addEventListener("click", () => {
    langDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove("show");
    }
  });
}

// ===== ГОЛОВНА ФУНКЦІЯ ПЕРЕКЛАДУ =====
async function loadLang(lang) {
  try {
    const res = await fetch(`${basePath}/lang/${lang}.json`);
    const data = await res.json();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (data[key]) el.textContent = data[key];
    });

    if (currentLangSpan) currentLangSpan.textContent = lang.toUpperCase();
    localStorage.setItem("lang", lang);

  } catch (err) {
    console.error("Language loading error:", err);
  }
}

// ===== ВИБІР МОВИ У СПИСКУ =====
document.querySelectorAll(".lang-dropdown li").forEach((item) => {
  item.addEventListener("click", () => {
    const lang = item.dataset.lang;
    loadLang(lang);
    langDropdown.classList.remove("show");
  });
});

// ===== ІНІЦІАЛІЗАЦІЯ =====
loadLang(currentLang);
