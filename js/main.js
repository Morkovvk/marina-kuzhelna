let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

// При завантаженні явно показуємо навбар
header.classList.remove("hidden");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

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

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-icon--active");
  header.classList.toggle("header--mobile");
});
