//black wrappers sliding

gsap.from(".hero-image-wrapper, .content-wrapper, .front-img", 2, {
  delay: 1.5,
  clipPath: "inset(0 100% 0 0)",
  ease: "power4.inOut",
  stagger: {
    amount: 0.5,
  },
});

// zoom out on img

gsap.from("img", 2, {
  delay: 2,
  scale: 2,
  ease: "power4.inOut",
  stagger: {
    amount: 0.25,
  },
});

// vert slide h1 & h2

gsap.to("header h1, header h2", 1, {
  delay: 2.5,
  top: 0,
  ease: "power3.out",
  stagger: {
    amount: 1,
  },
});
