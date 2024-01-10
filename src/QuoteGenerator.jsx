// src/QuoteGenerator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const quotes = response.data.quotes || [];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)] || {};
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="quote-container">
      <div className="quote-text">
        <p>"{quote?.quote}"</p>
      </div>
      <div className="quote-author">
        <p>- {quote?.author}</p>
      </div>
      <button onClick={fetchRandomQuote}>Get Another Quote</button>
    </div>
  );
};

export default QuoteGenerator;
