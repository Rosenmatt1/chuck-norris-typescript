import { useState } from 'react';
import './App.css';
import data from "./data.json";
import image from "./chuck-norris.png"

function App() {
  const [quotes] = useState(data.jokes);
  const [quote, setQuote] = useState("")

  const sound = new Audio("upper-cut.mp3")

  const randomQuote = () => {
    console.log(quotes)
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNumber].joke)
    playSound()
  }

  const playSound = () => {
    sound.play()
  }

  return (
    <div className="App">

      <h1> Hello Chuck! </h1>

      <img className="chuck" alt="chuck" src={image} />

      <div> An app for randomly generating chuck norris quotes. </div>

      {(quote.length > 0) && <div className="quoteBox">
        <div className="quote"> {quote} </div>
      </div>}

      <button className="button" onClick={randomQuote}>
        <div className="karate"> Karate Chop! </div>
        <i className="fas fa-fist-raised fist" style={{ fontSize: "3rem", color: "white" }}></i>
      </button>

    </div>
  );
}

export default App;
