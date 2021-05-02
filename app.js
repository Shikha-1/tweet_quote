let realData = "";
let quoteData = ""
const quote = document.getElementById("quote")
const author = document.getElementById("author");
const getNewQuotes = () => {
    let num = Math.floor(Math.random() * 1643);
    quoteData = realData[num];
    quote.innerHTML = quoteData.text;
    quoteData.author == null
      ? (author.innerHTML = `<i style="float: right; margin-bottom: 10px">- Unknown</i>`)
      : (author.innerHTML = `<i  style="float: right; margin-bottom: 10px">- ${quoteData.author}</i>`);   
}

async function getQuotes() {
    const api = `https://type.fit/api/quotes`;
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes()
    } catch (error) {
        console.log(error);
    }
}
getQuotes();

let btn = document.getElementById("btn");
btn.addEventListener("click",getNewQuotes);

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
  window.open(tweetPost);
};

let tweet = document.getElementById("tweet");
tweet.addEventListener("click", tweetNow);