import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const Quote = () => {
  const [quotes, setQuotes] = useState([{q: 'Loading...', a: 'Loading...'}]); // init with loading in case fetch fails
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)].q);
  const [author, setAuthor] = useState(quotes[Math.floor(Math.random() * quotes.length)].a);
  var init = 0;
  
  function getRandom() {
    var random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random].q);
    setAuthor(quotes[random].a);
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Nic-Sevic/Nic-Sevic.github.io/e8f25e71ef312adb66e73d8aa85dd740bd87aeb6/quote-generator/src/quotes.json") // used rather than twitter for longevity of project
      .then(response => {
        return response.json();
      })
      .then(data => {
        setQuotes(data);
        return data;
      })
      // Set initial quote and author to random quote from quotes after quotes is set
      .then(data => {   
        setQuote(data[Math.floor(Math.random() * data.length)].q);
        setAuthor(data[Math.floor(Math.random() * data.length)].a);
      })
      .catch(error => {
        console.log('Error fetching quotes:', error);
      });
  }, [init]); // Only need to fetch once so init is never changed

  return (
    <div id="quote-box">
      <p id='text'>{quote}</p>
      <p id='author'>{author}</p>
      <button id='new-quote' onClick={getRandom}>Don't like this quote?</button>
      <a id='tweet-quote' href='twitter.com/intent/tweet'>Share to Tumblr</a> 
    </div>
  );
}

export default Quote;
