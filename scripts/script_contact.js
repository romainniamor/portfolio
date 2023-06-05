//black wrappers sliding

import { securityToken } from "./config.js";

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

// contact form post email
/*const btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", sendEmail);

function sendEmail(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let body = "Envoyé par: " + email + "<br />" + message;

  Email.send({
    SecureToken: securityToken,
    To: "romainnavoret@gmail.com",
    From: "romainnavoret@gmail.com",
    Subject: "Contact from portfolio ",
    Body: body,
  }).then((message) => alert(message));
}*/
