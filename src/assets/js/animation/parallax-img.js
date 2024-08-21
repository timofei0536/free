export const parallaxImg = () => {
  if (window.its_desktop) {
    document.querySelectorAll(".img-parallax").forEach((section) => {
      gsap.fromTo(section.querySelector("img"), {
        y: "-5%",
        scale: 1.1,
        duration: 0,
      }, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
        y: "5%",
        ease: "none"
      });
    });
  }
}

