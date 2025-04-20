let images = [
  "./assets/images/image1.webp",
  "./assets/images/image2.webp",
  "./assets/images/image3.webp",
];
let index = 0;

document.getElementById("next").addEventListener("click", function () {
  index = (index + 1) % images.length;
  document.getElementById("carousel").src = images[index];
});

document.getElementById("prev").addEventListener("click", function () {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("carousel").src = images[index];
});
