'use strict';


/**
 * PRELOAD
 * loading will end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {

  if (preloader) {
    preloader.classList.add("loaded");
  }

  document.body.classList.add("loaded");

});


/**
 * ADD EVENT LISTENER ON MULTIPLE ELEMENTS
 */

const addEventOnElements = function (elements, eventType, callback) {

  for (let i = 0, len = elements.length; i < len; i++) {

    if (elements[i]) {
      elements[i].addEventListener(eventType, callback);
    }

  }

};


/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {

  if (navbar) {
    navbar.classList.toggle("active");
  }

  if (overlay) {
    overlay.classList.toggle("active");
  }

  document.body.classList.toggle("nav-active");

};

addEventOnElements(
  navTogglers,
  "click",
  toggleNavbar
);


/**
 * HEADER & BACK TOP BUTTON
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {

  if (!header) return;

  const isScrollBottom =
    lastScrollPos < window.scrollY;

  if (isScrollBottom) {

    header.classList.add("hide");

  } else {

    header.classList.remove("hide");

  }

  lastScrollPos = window.scrollY;

};


window.addEventListener("scroll", function () {

  if (!header || !backTopBtn) return;

  if (window.scrollY >= 50) {

    header.classList.add("active");

    backTopBtn.classList.add("active");

    hideHeader();

  } else {

    header.classList.remove("active");

    backTopBtn.classList.remove("active");

  }

});


/**
 * HERO SLIDER
 */

const heroSlider =
  document.querySelector("[data-hero-slider]");

const heroSliderItems =
  document.querySelectorAll("[data-hero-slider-item]");

const heroSliderPrevBtn =
  document.querySelector("[data-prev-btn]");

const heroSliderNextBtn =
  document.querySelector("[data-next-btn]");


let currentSlidePos = 0;

let lastActiveSliderItem =
  heroSliderItems[0];


const updateSliderPos = function () {

  if (!lastActiveSliderItem ||
      !heroSliderItems.length) return;

  lastActiveSliderItem.classList.remove("active");

  heroSliderItems[currentSlidePos]
    .classList.add("active");

  lastActiveSliderItem =
    heroSliderItems[currentSlidePos];

};


const slideNext = function () {

  if (!heroSliderItems.length) return;

  if (
    currentSlidePos >=
    heroSliderItems.length - 1
  ) {

    currentSlidePos = 0;

  } else {

    currentSlidePos++;

  }

  updateSliderPos();

};


const slidePrev = function () {

  if (!heroSliderItems.length) return;

  if (currentSlidePos <= 0) {

    currentSlidePos =
      heroSliderItems.length - 1;

  } else {

    currentSlidePos--;

  }

  updateSliderPos();

};


if (heroSliderNextBtn) {

  heroSliderNextBtn.addEventListener(
    "click",
    slideNext
  );

}


if (heroSliderPrevBtn) {

  heroSliderPrevBtn.addEventListener(
    "click",
    slidePrev
  );

}


/**
 * HERO AUTO SLIDE
 */

let autoSlideInterval;


const autoSlide = function () {

  if (!heroSliderItems.length) return;

  clearInterval(autoSlideInterval);

  autoSlideInterval = setInterval(
    function () {

      slideNext();

    },
    7000
  );

};


addEventOnElements(
  [
    heroSliderNextBtn,
    heroSliderPrevBtn
  ],
  "mouseover",
  function () {

    clearInterval(autoSlideInterval);

  }
);


addEventOnElements(
  [
    heroSliderNextBtn,
    heroSliderPrevBtn
  ],
  "mouseout",
  autoSlide
);


window.addEventListener(
  "load",
  autoSlide
);


/**
 * PARALLAX EFFECT
 */

const parallaxItems =
  document.querySelectorAll(
    "[data-parallax-item]"
  );


window.addEventListener(
  "mousemove",
  function (event) {

    let x =
      (event.clientX /
        window.innerWidth * 10) - 5;

    let y =
      (event.clientY /
        window.innerHeight * 10) - 5;


    // Reverse movement

    x = x - (x * 2);

    y = y - (y * 2);


    for (
      let i = 0,
      len = parallaxItems.length;
      i < len;
      i++
    ) {

      const speed =
        Number(
          parallaxItems[i]
            .dataset
            .parallaxSpeed
        ) || 1;


      const moveX =
        x * speed;

      const moveY =
        y * speed;


      parallaxItems[i].style.transform =
        `translate3d(
          ${moveX}px,
          ${moveY}px,
          0px
        )`;

    }

  }
);


/*====================================================*\
  # PREMIUM MENU POPUP
\*====================================================*/


const openMenu =
  document.getElementById("openMenu");

const closeMenu =
  document.getElementById("closeMenu");

const menuPopup =
  document.getElementById("menuPopup");

const menuImage =
  document.getElementById("menuImage");

const pageText =
  document.getElementById("pageText");

const prevBtn =
  document.getElementById("prevBtn");

const nextBtn =
  document.getElementById("nextBtn");


/**
 * MENU PAGES
 *
 * IMPORTANT:
 * Change .png to .webp if
 * your actual files are WebP.
 */

const pages = [

  "./assets/images/Page 1.webp",
  "./assets/images/Page 2.webp",
  "./assets/images/Page 3.webp",
  "./assets/images/Page 4.webp",
  "./assets/images/Page 5.webp",
  "./assets/images/Page 6.webp",
  "./assets/images/Page 7.webp",
  "./assets/images/Page 8.webp",
  "./assets/images/Page 9.webp",
  "./assets/images/Page 10.webp"

];


/**
 * CURRENT PAGE
 *
 * Remembers the last page
 * using localStorage.
 */

let savedPage =
  localStorage.getItem("menuPage");


let currentPage =
  savedPage !== null
    ? parseInt(savedPage, 10)
    : 0;


/**
 * SAFETY CHECK
 */

if (
  isNaN(currentPage) ||
  currentPage < 0 ||
  currentPage >= pages.length
) {

  currentPage = 0;

}


/**
 * UPDATE MENU PAGE
 */

function updateMenuPage() {

  if (!menuImage || !pageText) return;


  /* Change image */

  menuImage.src =
    pages[currentPage];


  /* Update page number */

  pageText.textContent =
    `Page ${currentPage + 1} of ${pages.length}`;


  /* Remember page */

  localStorage.setItem(
    "menuPage",
    currentPage
  );

}


/**
 * OPEN MENU
 */

if (openMenu && menuPopup) {

  openMenu.addEventListener(
    "click",
    function (event) {

      event.preventDefault();


      /* Load saved/current page */

      updateMenuPage();


      /* Open popup */

      menuPopup.classList.add("active");


      /* Prevent background scrolling */

      document.body.style.overflow =
        "hidden";

    }
  );

}


/**
 * CLOSE MENU
 */

function closeMenuPopup() {

  if (!menuPopup) return;


  menuPopup.classList.remove(
    "active"
  );


  /* Restore scrolling */

  document.body.style.overflow =
    "";

}


if (closeMenu) {

  closeMenu.addEventListener(
    "click",
    closeMenuPopup
  );

}


/**
 * CLICK OUTSIDE POPUP
 */

if (menuPopup) {

  menuPopup.addEventListener(
    "click",
    function (event) {

      if (
        event.target === menuPopup
      ) {

        closeMenuPopup();

      }

    }
  );

}


/**
 * NEXT PAGE
 *
 * Page 10 → Page 1
 */

if (nextBtn) {

  nextBtn.addEventListener(
    "click",
    function () {

      if (
        currentPage >=
        pages.length - 1
      ) {

        currentPage = 0;

      } else {

        currentPage++;

      }


      updateMenuPage();

    }
  );

}


/**
 * PREVIOUS PAGE
 *
 * Page 1 → Page 10
 */

if (prevBtn) {

  prevBtn.addEventListener(
    "click",
    function () {

      if (currentPage <= 0) {

        currentPage =
          pages.length - 1;

      } else {

        currentPage--;

      }


      updateMenuPage();

    }
  );

}


/**
 * KEYBOARD CONTROLS
 *
 * ← Previous
 * → Next
 * ESC Close
 */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      !menuPopup ||
      !menuPopup.classList.contains(
        "active"
      )
    ) return;


    if (event.key === "ArrowRight") {

      if (
        currentPage >=
        pages.length - 1
      ) {

        currentPage = 0;

      } else {

        currentPage++;

      }

      updateMenuPage();

    }


    if (event.key === "ArrowLeft") {

      if (currentPage <= 0) {

        currentPage =
          pages.length - 1;

      } else {

        currentPage--;

      }

      updateMenuPage();

    }


    if (event.key === "Escape") {

      closeMenuPopup();

    }

  }
);


/**
 * TOUCH / SWIPE SUPPORT
 */

let touchStartX = 0;
let touchEndX = 0;


if (menuPopup) {

  menuPopup.addEventListener(
    "touchstart",
    function (event) {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  menuPopup.addEventListener(
    "touchend",
    function (event) {

      touchEndX =
        event.changedTouches[0].screenX;


      const difference =
        touchStartX - touchEndX;


      /* Swipe left = next */

      if (difference > 50) {

        if (
          currentPage >=
          pages.length - 1
        ) {

          currentPage = 0;

        } else {

          currentPage++;

        }

        updateMenuPage();

      }


      /* Swipe right = previous */

      if (difference < -50) {

        if (currentPage <= 0) {

          currentPage =
            pages.length - 1;

        } else {

          currentPage--;

        }

        updateMenuPage();

      }

    },
    { passive: true }
  );

}


/**
 * INITIAL MENU PAGE
 */

updateMenuPage();


/*====================================================*\
  #RESERVATION
\*====================================================*/


function sendViaGmail(event) {

  event.preventDefault();


  const name =
    document.getElementById(
      "customerName"
    )?.value || "";


  const phone =
    document.getElementById(
      "phoneNumber"
    )?.value || "";


  const persons =
    document.getElementById(
      "persons"
    )?.value || "";


  const date =
    document.getElementById(
      "reservationDate"
    )?.value || "";


  const time =
    document.getElementById(
      "reservationTime"
    )?.value || "";


  const message =
    document.getElementById(
      "specialRequest"
    )?.value || "";


  const subject =
    "New Table Reservation";


  const body =
`Restaurant Reservation Request

Customer Name: ${name}
Phone Number: ${phone}
Number of Persons: ${persons}
Reservation Date: ${date}
Reservation Time: ${time}

Special Request:
${message}`;


  const mailto =
    `mailto:michaelarestobar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


  window.location.href =
    mailto;


  return false;

}