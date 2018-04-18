document.getElementById('loadQuote').addEventListener("click", () => {

});

var quotes = [
  {quote : 'The report of my death was an exaggeration.',
  source : 'Mark Twain'},

  {quote : 'In this world nothing can be said to be certain, except death and taxes.',
  source : 'Ben Franklin'},

  {quote : 'The hardest thing to understand in the world is the income tax.',
  source : 'Albert Einstein'},

  {quote : 'In politics stupidity is not a handicap',
  source : 'Napolean Bonaparte'},

  {quote : 'If you aint first your last',
  source : 'Ricky Bobby'}

];
console.log(quotes);

var selectQuote = randomNumber;
var randomNumber = getRandomQuote();

function getRandomQuote() {
 randomNumber = (Math.floor(Math.random() * quotes.length));
 return quotes[randomNumber];

}
console.log(randomNumber);
