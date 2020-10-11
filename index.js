const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({
        files: filesArray,
        title: "Vacation Pictures",
        text: "Photos from September 27 to October 14.",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    console.log(`Your system doesn't support sharing files.`);
  }
});
