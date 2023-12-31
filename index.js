const url = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerText = data.content;
  author.innerHTML = data.author;
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
window.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // event.preventDefault();
    btn.click();
  }
});
