const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  navigator.canShare({
    files: "./audio.mp3",
  });
});
