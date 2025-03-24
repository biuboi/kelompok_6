gsap.registerPlugin(ScrollTrigger);

// Pin halaman pertama sebelum animasi geser
ScrollTrigger.create({
  trigger: "#intro",
  start: "top top",
  end: "bottom top",
  pin: true,
  scrub: 1,
});

// Animasi geser setelah scroll melewati intro
gsap.to("#slider", {
  x: "-1200vw", // Geser seluruh slider ke kiri
  ease: "none",
  scrollTrigger: {
    trigger: ".slider-container",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});
