var swiper = new Swiper(".slider", {
  navigation: {
    prevEl: ".toggle-gallery__item--prev.swiper-button-prev",
    nextEl: ".toggle-gallery__item--next.swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    //type: progressbar,
    clickable: true,
  },
  loop: true,
  //autoHeight: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  speed: 1500,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Responsive breakpoints

  breakpoints: {
    // when window width is >= 320px
    767: {
      loop: true,
      slidesPerView: 3,
      //spaceBetween: 20
    },

    992: {
      loop: true,
      slidesPerView: 2,
      //spaceBetween: 20
    },

    // when window width is >= 640px
    1080: {
      loop: true,
      slidesPerView: 3,
      speed: 1500,
      //spaceBetween: 40
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    },
  },
});

// Слайдер Фотоархива на странице About-archive

var galleryThumbs = new Swiper(".photo-gallery", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 600,
  loop: true,
  loopedSlides: 1, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  breakpoints: {
    // when window width is >= 320px

    480: {
      loop: true,
      slidesPerView: 2,
      //spaceBetween: 20,
    },

    580: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
    },

    767: {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 40,
    },

    // when window width is >= 640px
    1180: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 64,
    },
  },
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

// Вариант 1

let moreBtns = document.querySelectorAll(".photo-gallery__item");
let modals = document.querySelectorAll(".popup");
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

// Вариант 2

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

// Вариант 3

/*всё тоже самое, кроме...*/
let allElems = document.querySelectorAll(".type_3 .headingElem");

allElems.forEach((elem) => {
  elem.addEventListener("click", function () {
    /*находим все активные элементы*/
    let descActive = document.querySelectorAll(".type_3 .descElem.active");
    /*прогоняем через цикл и удаляем класс active*/
    descActive.forEach((elem) => {
      elem.classList.remove("active");
    });

    let parentElem = this.parentNode;

    let contentBlock = parentElem.querySelector(".descElem");

    if (contentBlock.classList.contains("active")) {
      contentBlock.classList.remove("active");
    } else {
      contentBlock.classList.add("active");
    }
  });
});
