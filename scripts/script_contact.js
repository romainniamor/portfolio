//black wrappers sliding

gsap.from(".hero-image-wrapper, .content-wrapper, .front-img", {
  duration: 2,
  delay: 0.2,
  clipPath: "inset(0 100% 0 0)",
  ease: "power4.inOut",
  stagger: {
    amount: 0.5,
  },
});

// zoom out on img

gsap.from("img", 2, {
  delay: 0.8,
  scale: 2,
  ease: "power4.inOut",
  stagger: {
    amount: 0.25,
  },
});

// vert slide h1 & h2

gsap.to("header h1, header h2", 1, {
  delay: 1,
  top: 0,
  ease: "power3.out",
  stagger: {
    amount: 1,
  },
});
