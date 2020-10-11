const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        files: "./audio.mp3",
        title: "Je l'ai malheureusement",
        text: "Je l'ai malheureusement tué...",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    console.log(`Your system doesn't support sharing files.`);
  }
});
