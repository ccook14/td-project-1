document.getElementById('loadQuote').addEventListener("click", () => {

getRandomQuote();
printRandomQuote();

});

//Quotes to use for the generator
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
//Logging for debugging purposes. Making sure quotes are displaying.
console.log(quotes);

var randomNumber = getRandomQuote();
var printRandomQuote;
//cycles through the array to display random quotes
function getRandomQuote() {
 randomNumber = (Math.floor(Math.random() * quotes.length));
 return quotes[randomNumber];
 getRandomQuote = printRandomQuote;
}
//Logging for debugging purposes. Making sure quotes and randomly cycling through.
console.log(randomNumber);

//displays the random quote
 function printQuote() {
  getRandomQuote();
  document.getElementById("quote").innerHTML = randomNumber.quote;
	document.getElementById("source").innerHTML = randomNumber.source;
}
