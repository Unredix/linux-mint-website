document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });

  let sources = [
    "assets/main.png",
    "assets/xfce.png",
    "assets/mate.png",
    "assets/myscreen.png",
  ];

  let current = 0;

  document.getElementById("prev").onclick = function () {
    changeImg(-1);
  };
  document.getElementById("next").onclick = function () {
    changeImg(1);
  };

  function changeImg(num) {
    const mainImg = document.getElementById("main");
    const prevImg = document.getElementById("prev-img-js");
    const nextImg = document.getElementById("next-img-js");

    // Add animation classes
    mainImg.classList.add("img-change-from-main");
    prevImg.classList.add("img-change-left");
    nextImg.classList.add("img-change-right");

    // Wait for the animation to complete
    setTimeout(() => {
      current += num;
      if (current < 0) {
        current = sources.length - 1;
      }
      if (current >= sources.length) {
        current = 0;
      }

      mainImg.src = sources[current];
      prevImg.src = sources[(current - 1 + sources.length) % sources.length];
      nextImg.src = sources[(current + 1) % sources.length];

      // Remove animation classes
      mainImg.classList.remove("img-change-from-main");
      prevImg.classList.remove("img-change-left");
      nextImg.classList.remove("img-change-right");
    }, 500); // Adjust the timeout to match the animation duration
  }
});
