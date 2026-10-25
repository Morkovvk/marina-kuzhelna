const carousel = document.querySelector(".carousel");

if (carousel) {
  let touchStartX = 0;
  let touchStartY = 0;

  carousel.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    { passive: true },
  );

  carousel.addEventListener("touchend", (event) => {
    const distanceX = event.changedTouches[0].clientX - touchStartX;
    const distanceY = event.changedTouches[0].clientY - touchStartY;

    // занадто короткий рух або людина гортає сторінку вниз/вгору
    if (Math.abs(distanceX) < 50 || Math.abs(distanceY) > Math.abs(distanceX))
      return;

    if (distanceX < 0) goTo(current + 1);
    else goTo(current - 1);
  });

  const slides = carousel.querySelectorAll(".carousel__slide");
  const prevBtn = carousel.querySelector(".carousel__arrow--prev");
  const nextBtn = carousel.querySelector(".carousel__arrow--next");
  let current = 1; // на старті в центрі друге фото (номери з 0)

  function render() {
    slides.forEach((slide, index) => {
      slide.classList.remove("is-left", "is-center", "is-right", "is-hidden");

      const offset = (index - current + slides.length) % slides.length;

      if (offset === 0) slide.classList.add("is-center");
      else if (offset === 1) slide.classList.add("is-right");
      else if (offset === slides.length - 1) slide.classList.add("is-left");
      else slide.classList.add("is-hidden");
    });
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    render();
  }

  prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn.addEventListener("click", () => goTo(current + 1));

  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => goTo(index));
  });

  render();
}
