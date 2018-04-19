// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var timer = setInterval(printQuote, 30000);

//Array of quotes to use for the generator
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
  source : 'Ricky Bobby'},

  {quote : 'The day you think there is no improvements to be made is a sad one for any soccer player.',
  source : 'Lionel Messi'},

  {quote : 'Without football (soccer), my life is worth nothing.',
  source : 'Cristiano Ronaldo'},

  {quote : 'I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.',
  source : 'Zinedine Zidane'},

  {quote : 'To me, teamwork is the beauty of our sport, where you have five acting as one. You become selfless.',
  source : 'Mike Krzyzewski'}


];
//Logging for debugging purposes. Making sure quotes are displaying.
console.log(quotes);

var randomNumber = getRandomQuote();

//cycles through the array to display random quotes
function getRandomQuote() {
 randomNumber = (Math.floor(Math.random() * quotes.length));
 return quotes[randomNumber];
 getRandomQuote = printRandomQuote;
}

//Logging for debugging purposes. Making sure quotes and randomly cycling through.
console.log(randomNumber);
var printRandomQuote = getRandomQuote();
//displays the random quote
console.log(printRandomQuote);
 function printQuote() {
var thisQuote = getRandomQuote();

var html = '<div id="quote-box">';
html += '<p class="quote"> ' + thisQuote.quote + ' </p>';
html += '<p class="source">' + thisQuote.source ;
html += '</p> </div>';

document.getElementById('quote-box').innerHTML = html;
	changeBackgroundColor();
}

//Returns a string with a random color
function getRandomColor(){
	var randomColor = Math.floor((Math.random() + 1) * 255);
	var color = "rgb(";
	color += Math.floor(Math.random() * 255) + ', ';
	color += Math.floor(Math.random() * 255) + ', ';
	color += Math.floor(Math.random() * 255) + ')';
	return color;
}

//Change background color to a random color
function changeBackgroundColor(){

	document.body.style.background = getRandomColor();

}
