import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

var random = Math.floor(Math.random() * 50);

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // something is wrong here because the effect is being called 2-4 times and then fails on reload
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Nic-Sevic/Nic-Sevic.github.io/e8f25e71ef312adb66e73d8aa85dd740bd87aeb6/quote-generator/src/quotes.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setQuotes(data)
      })
    return () => {
      console.log('cleanup');
    }
  }, []);

  console.log(random);
  console.log(quotes);
  console.log(quotes[random].q);

  return (
    <div id="quote-box">
      <p id='text'>{quotes[random].q}</p>
      <p id='author'>{quotes[random].a}</p>
      <button id='new-quote'>New Quote</button>
      <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet Quote</a>
    </div>
  );
}

export default Quote;
