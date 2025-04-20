// script.js
let currentZoom = 1;
let minZoom = 1;
let maxZoom = 5;
let stepSize = 0.05;

const container = document.getElementById("image-container");
const image = document.getElementById("zoomable");

container.addEventListener("wheel", function (event) {
  event.preventDefault(); // stop page scroll
  let direction = event.deltaY > 0 ? -1 : 1;
  zoomImage(direction);
});

function zoomImage(direction) {
  let newZoom = currentZoom + direction * stepSize;

  if (newZoom < minZoom || newZoom > maxZoom) return;
  currentZoom = newZoom;

  // scale
  image.style.transform = `scale(${currentZoom})`;

  // fade out as it zooms in (and fade in as you zoom out)
  // when currentZoom == minZoom → opacity = 1
  // when currentZoom == maxZoom → opacity = 0
  const opacity = 1 - (currentZoom - minZoom) / (maxZoom - minZoom);
  image.style.opacity = opacity;
}
