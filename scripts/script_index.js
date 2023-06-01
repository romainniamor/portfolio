//black wrappers sliding

gsap.from(
  ".hero-image-wrapper, .content-wrapper, .front-img, about-wrapper p",
  2,
  {
    delay: 0.2,
    clipPath: "inset(0 100% 0 0)",
    ease: "power4.inOut",
    stagger: {
      amount: 0.5,
    },
  }
);

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
  delay: 1.3,
  top: 0,
  ease: "power4.out",
  stagger: {
    amount: 0.6,
  },
});

// typing

const text = "web developer";
const ends = ["!", " :)", ""];

// cursor flashing
let cursor = gsap.to(".cursor", {
  delay: 2.3,
  opacity: 0,
  ease: "power3.inOut",
  duration: 1,
  repeat: 7,
});

let masterLine = gsap.timeline();

let textLine = gsap.timeline({ repeat: 0 });
textLine.to(".text", {
  delay: 3,
  duration: 2,
  text: text,
  onComplete: () => {
    ends.forEach((word) => {
      let endLine = gsap.timeline({ repeat: 1, yoyo: true });
      endLine.to(".endtext", { duration: 1, text: word });
      masterLine.add(endLine);
    });
  },
});
