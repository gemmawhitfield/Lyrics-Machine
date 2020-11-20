// Store the quotes:

const QUOTEBANK = [
  {
    quote:
      "We learned more from a three minute record than we ever learned in school.",
    author: "Bruce Springsteen"
  },

  {
    quote: "Even the genius asks questions.",
    author: "Tupac"
  },

  {
    quote:
      "Dearly beloved: We are gathered here today to get through this thing called life.",
    author: "Prince"
  },

  {
    quote:
      "We are the champions, my friend. And we'll keep on fighting 'til the end.",
    author: "Queen"
  },

  {
    quote:
      "A little less fight and a little more spark, close your mouth and open your heart.",
    author: "Elvis Presley"
  },

  {
    quote: "All you need is love.",
    author: "The Beatles"
  },

  {
    quote:
      "Without a song or a dance, what are we? So I say: thank you for the music, for giving it to me.",
    author: "ABBA"
  },

  {
    quote:
      "Some people ask me: What are you gonna be? Why don't you go get a job? All that I could say: I won't give up my music. Not me, not now, no way, no how!",
    author: "Sister Sledge"
  },

  {
    quote: "We can be heroes, just for one day.",
    author: "David Bowie"
  },

  {
    quote: "Reach for the stars so if you fall you land on a cloud.",
    author: "Kanye West"
  },

  {
    quote: "Don't be a drag, just be a queen.",
    author: "Lady Gaga"
  },

  {
    quote: "Get up, stand up. Don't give up the fight!",
    author: "Bob Marley"
  },

  {
    quote:
      "Listen as your day unfolds, challenge what the future holds, try and keep your head up to the sky.",
    author: "Des'ree"
  },

  {
    quote:
      "Don't stop thinking about tomorrow. Don't stop, it'll soon be here. It'll be better than before. Yesterday's gone, yesterday's gone.",
    author: "Fleetwood Mac"
  },

  {
    quote: "I'm a different person, turned my world around.",
    author: "The Shapeshifters"
  },

  {
    quote: "Life's easy when you consider things from another point of view.",
    author: "DB Boulevard"
  },

  {
    quote:
      "Don't worry about a thing, 'cos every little thing's gonna be alright.",
    author: "Bob Marley"
  },

  {
    quote:
      "There's a new me coming out and I just had to live. And I want to give. I'm completely positive!",
    author: "Diana Ross"
  },

  {
    quote:
      "Ain't nothing gonna break my stride. Nobody gonna slow me down, oh no. I've got to keep on moving.",
    author: "Matthew Wilder"
  },

  {
    quote:
      "Ain't about how fast I get there, ain't about what's waiting on the other side - it's the climb.",
    author: "Miley Cyrus"
  },

  {
    quote: "Always look on the bright side of life.",
    author: "Monty Python"
  },

  {
    quote: "Work it harder. Make it better. Do it faster. Makes us stronger.",
    author: "Daft Punk"
  },

  {
    quote: "Boss up and change your life - you can have it all, no sacrifice.",
    author: "Lizzo"
  },

  {
    quote:
      "Right now, I'm in a state of mind I wanna be in like all the time. Ain't got no tears left to cry.",
    author: "Ariana Grande"
  },

  {
    quote:
      "Gotta keep your head up - who puts you first? Find someone who loves you at your worst.",
    author: "Khalid & Disclosure"
  }
];

// When the window is loaded, a new quote is generated:
window.onload = init;
function init() {
  generateQuote();
}

// Generates a new quote at random when the 'new quote' button is clicked:

function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];

  let twitterLink = "https://twitter.com/intent/tweet?hashtags=lyrics&&text=";

  let quoteInApiFormat = randomQuoteData.quote.replace(/  /g, "%20");
  twitterLink += quoteInApiFormat;

  let authorInApiFormat = randomQuoteData.author.replace(/  /g, "%20");
  twitterLink += " - " + authorInApiFormat;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
}
