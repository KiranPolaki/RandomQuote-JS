const url = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    console.log(data);
  }
}

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
