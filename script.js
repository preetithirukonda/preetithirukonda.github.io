const images = document.querySelectorAll(".image-container img");

images.forEach(img => {
  img.addEventListener("mouse-hover", () => {
    img.style.transform = "scale(1.1)";
  });

  img.addEventListener("no-mouse", () => {
    img.style.transform = "scale(1)";
  });
});
