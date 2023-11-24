const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  spaceBetween: 75,
  // gap: 50,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
