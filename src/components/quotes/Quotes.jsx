import React, { useState } from 'react'
import './style.css'
import { RiDoubleQuotesL } from 'react-icons/ri'

const Quotes = () => {
    const quotes = [
        {
          text: "The only true wisdom is in knowing you know nothing.",
          author: "Socrates"
        },
        {
          text: "It is not length of life, but depth of life.",
          author: "Ralph Waldo Emerson"
        },
        {
          text: "Happiness depends upon ourselves.",
          author: "Aristotle"
        },
        {
          text: "The unexamined life is not worth living.",
          author: "Socrates"
        },
        {
          text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
          author: "Ralph Waldo Emerson"
        },
        {
          text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
          author: "Ralph Waldo Emerson"
        },
        {
          text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          author: "Winston Churchill"
        },
        {
          text: "Knowing yourself is the beginning of all wisdom.",
          author: "Aristotle"
        },
        {
          text: "Life is really simple, but we insist on making it complicated.",
          author: "Confucius"
        },
        {
          text: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt"
        },
        {
          text: "I will brebare my babers to be the best in this werld.",
          author: "Arwah Syrianousy"
        }
      ];
      const [randomIdx, _] = useState(Math.floor(Math.random() * quotes.length))
      
  return (
    <div className='quote-container'>
        <h1>Random Quote</h1>
        <p><RiDoubleQuotesL/></p>
        <p className='quote'>{quotes[randomIdx].text}</p>
        <p className='author'>{quotes[randomIdx].author}</p>
    </div>
  )
}

export default Quotes