//open wrapper vert

gsap.to(".wrapper-container", 1, {
  delay: 0.1,
  ease: "power2.out",
  height: "0",
});

gsap.to(".projects-list", {
  duration: 3,
  delay: 0.3,
  filter: "blur(-10px)",
  ease: "power4.out",
  y: -50,
});

//about work vert

gsap.to(".about-work h2, .about-work p", 2, {
  delay: 0.3,
  opacity: 1,
  ease: "power4.out",
  opacity: 1,
  y: -30,
  stagger: {
    amount: 0.5,
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

// header 404

gsap.to(".header404 .content", {
  duration: 2,
  delay: 0.3,
  ease: "power4.out",
  y: -100,
  onComplete: function () {
    gsap.to(".header404 h1", {
      duration: 1,
      opacity: 1,
      ease: "power4.out",
      y: -110,
    });
  },
});
