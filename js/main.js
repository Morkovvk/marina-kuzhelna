let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

// При завантаженні явно показуємо навбар
header.classList.remove("hidden");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (header.classList.contains("header--mobile")) {
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    // Ховаємо навбар тільки якщо прокручено більше 50px
    header.classList.add("hidden");
  } else {
    // Показуємо навбар при прокрутці вгору або якщо юзер вгорі сторінки
    header.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});

// навбар для телефонів
const menuIcon = document.querySelector(".menu-icon");

function setMenu(open) {
  menuIcon.classList.toggle("menu-icon--active", open);
  header.classList.toggle("header--mobile", open);
  menuIcon.setAttribute("aria-expanded", open);
}

menuIcon.addEventListener("click", () => {
  const isOpen = header.classList.contains("header--mobile");
  setMenu(!isOpen);
});

// закриваємо меню після кліку на пункт
document.querySelectorAll(".header__nav a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
