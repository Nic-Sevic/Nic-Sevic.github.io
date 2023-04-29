import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

var random = Math.floor(Math.random() * 100);

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuotes = () => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      //fetch("https://zenquotes.io/api/quotes")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setQuotes(data)
      })
  };

  useEffect(() => {
    fetchQuotes()
  }, [])

  console.log(random);
  console.log(quotes.quotes[0].quote);

  return (
    <div id="quote-box">
      <p id='text'>{quotes.quotes[random].quote}</p>
      <p id='author'>{quotes.quotes[random].author}</p>
      {/* {quotes.length > 0 && (
        // <ul>
        //   {data.map(datum => (
        //     <li key={datum.id}>{datum.q}</li>
        //   ))}
        // </ul>
        <ul id="text">
          {quotes.map(quote => (
            <li key={quote.id}>{quote.quote}</li>
            //<li key={datum.id}>{datum.author}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

//<div id="text">text{this.state.q}</div>
//      <div id="author">author{this.state.a}</div>
//      <button id="new-quote">New Quote</button>
//      <a href="" id="tweet-quote">
//        Tweet this
//      </a>



// class Quote extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       id: this.props.id,
//       q: this.props.text,
//       a: this.props.author
//     };
//   }

//   render() {
//     return (
//       <div id="quote-box">
//         <div id="text">text{this.state.q}</div>
//         <div id="author">author{this.state.a}</div>
//         <button id="new-quote">New Quote</button>
//         <a href="" id="tweet-quote">
//           Tweet this
//         </a>
//       </div>
//     );
//   }
// }

export default Quote;
