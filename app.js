"use strict";

const tlLanding = gsap.timeline({ defaults: { ease: "power1.out" } });

tlLanding.to(".intro__text", { y: "0%", duration: 1.5, stagger: 0.25 });
tlLanding.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tlLanding.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tlLanding.fromTo(".top__menu", { opacity: 0 }, { opacity: 1, duration: 1.5 });
tlLanding.fromTo(".landing__profile", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tlLanding.fromTo(".landing__text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
