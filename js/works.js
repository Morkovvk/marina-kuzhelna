const modal = document.getElementById("videoModal");

if (modal) {
  const video = modal.querySelector("video");
  const videoSource = modal.querySelector("source");
  const openButtons = document.querySelectorAll(".open-video");
  const closeBtn = document.querySelector(".close");

  // --- Функція відкриття модалки ---
  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const videoUrl = btn.dataset.video;

      // ПІДСТАВЛЯЄМО відео
      videoSource.src = videoUrl;
      video.load();
      video.play().catch(() => {});

      // --- ПОЗИЦІЯ ПО КЛІКУ ---
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      modal.style.setProperty("--start-x", centerX + "px");
      modal.style.setProperty("--start-y", centerY + "px");

      modal.style.display = "flex";

      // щоб анімація не "проковтувалась"
      requestAnimationFrame(() => {
        modal.classList.add("show");
      });
    });
  });

  // --- Закривання ---
  const closeModal = () => {
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }, 300);
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
