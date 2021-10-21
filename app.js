"use strict";
//-------------------------ANIMATIONS---------------------//
const tlLanding = gsap.timeline({ defaults: { ease: "power1.out" } });

tlLanding.to(".intro__text", { y: "0%", duration: 1.7, stagger: 0.4 });
tlLanding.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tlLanding.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tlLanding.fromTo("#top_header", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tlLanding.fromTo(".landing__profile", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tlLanding.fromTo(".landing__text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tlLanding.fromTo(".arrow", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");

gsap.to(".arrow", { duration: 0.6, y: 30, ease: "power1.in", repeat: -1, yoyo: true });

//-------------------------HEADER SCROLL---------------------//
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

//-------------------------BURGER MENU---------------------//

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach(setStyleLink);
    burger.classList.toggle("toggle");
  });
};

function setStyleLink(el, index) {
  if (el.style.animation) {
    el.style.animation = "";
  } else {
    el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  }
}

navSlide();

//-------------------------ARROW---------------------//
