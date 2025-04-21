const output = document.getElementById("output");
const asyncBtn = document.getElementById("asyncBtn");
const thenBtn = document.getElementById("thenBtn");

asyncBtn.addEventListener("click", async () => {
  output.textContent = "Loading with async/await...";
  setTimeout(async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/5");
      const data = await res.json();
      displayImages(data.message);
    } catch (err) {
      output.textContent = "Failed to load dog images.";
    }
  }, 2000);
});

thenBtn.addEventListener("click", () => {
  output.textContent = "Loading with .then()...";
  setTimeout(() => {
    fetch("https://dog.ceo/api/breeds/image/random/5")
      .then(res => res.json())
      .then(data => displayImages(data.message))
      .catch(err => {
        output.textContent = "Failed to load dog images.";
      });
  }, 2000);
});

function displayImages(images) {
  output.innerHTML = "";
  images.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.style.width = "150px";
    img.style.margin = "10px";
    output.appendChild(img);
  });
}
