// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // Autoplay
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  // Defaults
  spaceBetween: 30,
  slidesPerView: 1,

  // 📱 Responsiveness
  breakpoints: {
    768: {
      slidesPerView: 1, // ✅ Tablet gets 2 slides
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3, // ✅ Desktop gets 3 slides
      spaceBetween: 30,
    },
  },
});

const mins = document.querySelectorAll(".FAQ .min");
const shows = document.querySelectorAll(".FAQ .show");

mins.forEach((min, index) => {
  min.addEventListener("click", () => {
    const isOpen = !shows[index].classList.contains("hide");
    // true if this answer is already visible

    // close all + reset arrows
    shows.forEach((show) => show.classList.add("hide"));
    mins.forEach((btn) => btn.classList.remove("full"));

    if (!isOpen) {
      // only open this one if it wasn’t open
      shows[index].classList.remove("hide");
      min.classList.add("full");
    }
  });
});

// main.js (quick fix)
const menuBtn = document.querySelector(".menu img");
const mobileMenu = document.querySelector(".mobile");
const blurWrapper = document.querySelector(".blur");

// Defensive checks
if (!menuBtn || !mobileMenu || !blurWrapper) {
  console.warn("Menu JS: missing element(s). Check selectors.");
}

// toggle open/close
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show"); // slide menu
  blurWrapper.classList.toggle("none"); // remove .none -> .blur takes effect
  document.body.classList.toggle("menu-open"); // optional hook
});

// close when links clicked
document.querySelectorAll(".mobile .right a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    blurWrapper.classList.add("none");
    document.body.classList.remove("menu-open");
  });
});

// close when clicking the blurred area
blurWrapper.addEventListener("click", (e) => {
  // only close if the menu is open
  if (mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
    blurWrapper.classList.add("none");
    document.body.classList.remove("menu-open");
  }
});
