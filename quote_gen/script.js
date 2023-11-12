
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//Show New Quotes each time when new quote button is triggered

let apiQuotes =[]; //be an array of quotes

function newQuote(){
    //Pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //Populate the quote to show and check if author field is blank and replace it with unknown
    
    if(!quote.author){
        authorText.textContent ='Unknown';
    } else{
        authorText.textContent = quote.author;
    }

    //check quote length to determine the css styling

    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
}


//Tweet Quote
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text =${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listner

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//Get Quote from API

async function getQuotes(){
    const apiURL ="https://type.fit/api/quotes";

    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error here

    }
}

// On load

getQuotes();