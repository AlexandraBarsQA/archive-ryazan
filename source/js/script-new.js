var swiper = new Swiper(".slider", {
  navigation: {
    nextEl: ".toggle-gallery__item--next.swiper-button-next",
    prevEl: ".toggle-gallery__item--prev.swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    //type: progressbar,
    clickable: true,
  },
  loop: true,
  speed: 600,
  //autoHeight: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 20,

  // Responsive breakpoints
});

// Слайдер Фотоархива на странице About-archive

var galleryThumbs = new Swiper(".photo-gallery", {
  slidesPerView: 5,
  spaceBetween: 64,
  speed: 600,
  loop: true,
  loopedSlides: 1, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var gallery = new Swiper(".gallery-desc", {
  slidesPerView: 1,
  speed: 1500,
  loop: true,
  loopedSlides: 1, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

// Слайдер Swiper + popup

let moreBtns = document.querySelectorAll(".photo-gallery__item");
let modals = document.querySelectorAll(".popup__list");
let closeBtns = document.querySelectorAll(".popup__btn-close");
//добавим скрывающий класс
modals.forEach((modal) => modal.classList.add("hide"));
moreBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    this.nextElementSibling.classList.remove("hide");
    this.nextElementSibling.classList.add("modal-open");
    document.querySelector("body").classList.add("body-with-open-modal");
  })
);
function closepopup() {
  modals.forEach((modal) => {
    modal.classList.add("hide");
    modal.classList.remove("modal-open");
  });
  document.querySelector("body").classList.remove("body-with-open-modal");
}
// закрываем по крестику
closeBtns.forEach((closeBtn) =>
  closeBtn.addEventListener("click", function (e) {
    closepopup();
  })
);
// закрытие окна по ESC
window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    modals.forEach((modal) => {
      if (modal.classList.contains("modal-open")) closepopup();
    });
  }
});

/*
var link = document.querySelector(".photo-gallery__item--1");
var popup = document.querySelector(".popup__item--1");
var close = popup.querySelector(".popup__btn-close");

var isStorageSupport = true;
var storage = "";

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup__show");
  popup.classList.remove("popup__error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup__show")) {
      evt.preventDefault();
      popup.classList.remove("popup__show");
      popup.classList.remove("popup__error");
    }
  }
});
 */
