const quoteGenerator = document.querySelector(".new-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tweetBtn = document.querySelector(".tweet");


const updateDetails = (a,b) => {
    author.innerHTML = a;
    quote.innerHTML = `<q>${b}</q>`;
}
const generateQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(res=> res.json())
    .then(data => updateDetails(data.author, data.content))
}

const tweet = () =>{
    window.open("https://twitter.com/intent/tweet?text=" + quote.querySelector("q").innerHTML, "Tweet window", "width=600, height=300");
}

quoteGenerator.addEventListener("click", generateQuote);
tweetBtn.addEventListener("click", tweet);
generateQuote();