function sayOuch() {
  const message = "Ouch! Stop poking me!";

  // Visible + debuggable feedback (some embedded previews can block alert popups).
  console.log(message);

  const heading = document.querySelector("h1");
  if (heading) {
    heading.textContent = message;
  }

  alert(message);
}

document.addEventListener("DOMContentLoaded", () => {
  const foxImage = document.querySelector("img");
  if (foxImage) {
    foxImage.onclick = sayOuch;
  }
});
