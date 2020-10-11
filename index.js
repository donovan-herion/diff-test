const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  navigator.share({
    title: document.title,
    text: "Hello World",
    url: "https://developer.mozilla.org",
  });
});
