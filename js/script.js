var quotes = [
  {
    quote: "Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow",
    source: "Decoded",
    tags: ["Book", "2010"]
  },
  {
    quote: "A poet's mission is to make words do more work than they normally do, to make them work on more than one level.",
    source: "Decoded",
    tags: ["Book", "2010"]
  },
  {
    quote: "I'm not afraid of dying I'm afraid of not trying",
    source: "Black and Gold",
    tags: ["Book", "2018"]
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won&#39;t work.",
    source: "Black and Gold",
    tags: ["Book", "2018"]
  },
  {
    quote: "We change people through conversation, not through censorship.",
    source: "Decoded",
    tags: ["Book", "2010"]
  },
  {
    quote: "A loss ain't a loss, it's a lesson",
    source: "Smile -44:4",
    tags: ["music", "2017"]
  },
  {
    quote: "What's better than one billionaire? ...Two",
    source: "Family Feud 44:4",
    tags: ["music", "2017"]
  },
  {
    quote: "See how the universe works? / It takes my hurt and help me find more of myself",
    source: "Legacy",
    tags: ["music", "2017"]
  }


];


var CSS_COLOR_NAMES = ["Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chocolate", "Coral", "CornflowerBlue", "Crimson", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "FireBrick", "ForestGreen", "Fuchsia", "Green", "HotPink", "IndianRed", "Indigo", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "Pink", "Plum", "PowderBlue", "Purple", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet"];

var quoteIndex = 0;
var colorIndex = 0;
var quotesUsed = [];
var intervalID;


var NUMBER_OF_QUOTES = 6;
var CHANGE_INTERVAL = 10000;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function emptyQuotesArray() {
  quotesUsed = [];
  console.log("Emptied queue; Start fresh.");
}

function allQuotesUsed() {
  return (quotesUsed.length === NUMBER_OF_QUOTES);
}

function getRandomQuote() {

  do {

    quoteIndex = getRandomIntInclusive(0, 5);

  } while (quotesUsed.includes(quoteIndex));

  quotesUsed.push(quoteIndex);

  logQuoteToConsole(quoteIndex);

  if (allQuotesUsed()) {
    emptyQuotesArray();
  }

  return quotes[quoteIndex];
}

function getRandomColor() {

  colorIndex = getRandomIntInclusive(0, CSS_COLOR_NAMES.length - 1);
  return CSS_COLOR_NAMES[colorIndex];
}

function logQuoteToConsole(quoteIndex) {
  console.log(quoteIndex, ': ', quotes[quoteIndex].quote.slice(0, 20));
}

function formatQuote(quote) {

  var formattedQuote =
    '<p class="quote">' + quote.quote + '</p>' +
    '<p class="source">' + quote.source;

  if (typeof quote.citation !== "undefined") {
    formattedQuote += '<span class="citation">' + quote.citation + '</span>';
  }
  if (typeof quote.year !== "undefined") {
    formattedQuote += '<span class="year">' + quote.year + '</span>';
  }
  if (typeof quote.tags !== "undefined") {
    formattedQuote += '<p class="tags">' + quote.tags.join(', ') + '</p>';
  }

  formattedQuote += '</p>';
  return formattedQuote;

}

function changeBackground() {

  document.getElementById("bgcolor").style.backgroundColor = getRandomColor();

}

function resetTimer() {

  if (intervalID) {
    window.clearInterval(intervalID);
    intervalID = setInterval(printQuote, CHANGE_INTERVAL);
  }

}

function printQuote() {

  resetTimer();
  document.getElementById('quote-box').innerHTML = formatQuote(getRandomQuote());
  changeBackground();

}

printQuote();

intervalID = window.setInterval(printQuote, CHANGE_INTERVAL);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

