const footer = document.getElementById("site-footer");

if (footer) {
  const base = window.location.pathname.includes("/pages/") ? ".." : ".";

  footer.innerHTML = `
    <div class="container">
      <p class="footer_copy">
    <span data-i18n="name_avtor">Марина Кужельна</span> · &copy; 2026
    <span> | </span> Made by ·
    <a href="https://www.linkedin.com/in/liudmyla-palchynska-518674253/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span data-i18n="name_dev">Людмила Пальчинська</span>
    </a>
  </p>
      <div class="socials">
        <a href="mailto:mkuzhelna@gmail.com" class="socials_link">
          <img src="${base}/image/icons8-email-50.png" alt="Email" class="socials_img" />
        </a>
        <a href="https://www.instagram.com/marinka19.07" class="socials_link" target="_blank" rel="noopener noreferrer">
          <img src="${base}/image/icons8-instagram-logo.svg" alt="Instagram" class="socials_img" />
        </a>
      </div>
    </div>
  `;
}
