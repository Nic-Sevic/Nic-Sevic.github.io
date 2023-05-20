import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const Quote = () => {
  console.log('running');
  const [quotes, setQuotes] = useState([{q: 'Loading...', a: 'Loading...'}]);
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  var count = 0;
  var random = Math.floor(Math.random() * quotes.length);
  
  function getRandom() {
    random = Math.floor(Math.random() * quotes.length);
    count++;
    setQuote(quotes[random].q);
    setAuthor(quotes[random].a);
  }

  console.log('render');
  // something is wrong here because the effect is being called 2-4 times 
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Nic-Sevic/Nic-Sevic.github.io/e8f25e71ef312adb66e73d8aa85dd740bd87aeb6/quote-generator/src/quotes.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setQuotes(data)
      })
      .catch(error => {
        console.log('Error fetching quotes:', error);
      });
    return () => {
      console.log('cleanup');
    }
  }, [count]); //but I don't need to do this again, just the render again

  // once there's a new random, why isn't this refreshing?
  return (
    <div id="quote-box">
      <p id='text'>{quote}</p>
      <p id='author'>{author}</p>
      <button id='new-quote' onClick={getRandom}>New Quote</button>
      <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet Quote</a>
    </div>
  );
}

export default Quote;
