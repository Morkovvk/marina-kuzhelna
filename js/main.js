const categoriesDiv = document.querySelector('.listing__wrapper');
const items = document.querySelectorAll('.item-link');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const workTitle = document.getElementById('work-title');

let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

// При завантаженні явно показуємо навбар
header.classList.remove("hidden");

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;

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
const menuIcon = document.querySelector('.menu-icon'),
    header1 = document.querySelector('header')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon--active');
    header1.classList.toggle('header--mobile')
});


document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        window.location.href = target;
    });
});
