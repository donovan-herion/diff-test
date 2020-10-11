const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  navigator.share({
    title: "Je suis un peu perdu la",
    text: "Je suis un peu perdu la",
    url: "https://www.youtube.com/watch?v=wDjeBNv6ip0&ab_channel=LP",
  });
});
