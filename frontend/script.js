//      Lenis smooth scroll

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const logoHoverHitbox = document.querySelector(".nav-logo-wrapper");

logoHoverHitbox.addEventListener("mouseenter", () => gsap.to("#turbulence", {
  attr: { baseFrequency: 0.01 },
  duration: 2,
}));

logoHoverHitbox.addEventListener("mouseleave", () => gsap.to("#turbulence", {
  attr: { baseFrequency: 0 },
  duration: 2,
}));



//      Menu

function toggleScrolling() {
  if (document.body.style.overflow == "visible") {
      document.body.style.overflow = "hidden";
  } else {
      document.body.style.overflow = "visible";
  }
}

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-wrapper");
const menu = document.querySelector("menu");

function openMenu() {
  menu.style.display = "block";
  menuIcon.style.display = "none";

  toggleScrolling()
  lenis.stop()
}

function closeMenu() {
  menu.style.display = "none";
  menuIcon.style.display = "flex";

  toggleScrolling()
  lenis.start()
}

menuIcon.onclick = function() {
    openMenu();
}

closeIcon.onclick = function() {
    closeMenu();
}

// Navlinks hover menu

const homeNav = document.getElementById("home-nav");
const homeNavWrapper = document.querySelector(".navlink-wrapper");

homeNavWrapper.onmouseover = function() {
  document.getElementById("home-nav-hover-menu").style.opacity = 1;
}

homeNavWrapper.onmouseleave = function() {
  document.getElementById("home-nav-hover-menu").style.opacity = 0;
}



// GSAP animations

