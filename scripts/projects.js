//open wrapper vert

gsap.to(".wrapper-container", 1, {
  delay: 0.1,
  ease: "power2.out",
  height: "0",
});

gsap.to(".projects-list", {
  duration: 3,
  delay: 0.3,
  filter: "blur(-20px)",
  ease: "power4.out",
  y: -50,
});

gsap.to(".about-work h2, .about-work p, .about-work a", 1, {
  delay: 0.6,
  opacity: 1,
  ease: "power4.out",
  y: -110,
  stagger: {
    amount: 0.25,
  },
});

//video play

const projects = document.querySelectorAll(".project .title");
const video = document.querySelector(".video");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const nameFolder = project.innerHTML;
    console.log(nameFolder);
    video.src = `../assets/video/${nameFolder}.mp4`;
    console.log(video.src);

    gsap.from(".video-display video", 2, {
      delay: 0.1,
      scale: 0,
      ease: "power3.out",
    });

    video.play();
  });
});
