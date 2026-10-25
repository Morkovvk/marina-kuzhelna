const carousel = document.querySelector(".carousel");

if (carousel) {
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
}
