document.getElementById('loadQuote').addEventListener("click", () => {

getRandomQuote();
printQuote();

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

function getRandomQuote() {
 randomNumber = (Math.floor(Math.random() * quotes.length));
 return quotes[randomNumber];
}
//Logging for debugging purposes. Making sure quotes and randomly cycling through.
console.log(randomNumber);

function printQuote(randomNumber) {
  document.getElementById("quote").innerHTML = getRandomQuote.quote;
	document.getElementById("source").innerHTML = getRandomQuote.source;
}
