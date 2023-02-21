import { useState, useEffect } from 'react';
import './App.css';
import data from "./data.json";
import image from "./chuck-norris.png";

interface Joke {
  id: number,
  joke: string,
  categories: string[],
}
// categories: ("nerdy" | "explicit")[] | [],
// categories: string[],
// categories: ("nerdy" | "sad")[] | ["nerdy", "sad"] | [];

function App() {
  const [quotes, setQuotes] = useState<Joke[]>([]);
  const [quote, setQuote] = useState<string>("")


  useEffect(() => {
    setQuotes(data.jokes)
  }, [])


  type RandomQ = () => void

  const randomQuote: RandomQ = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNumber].joke)
    playSound()
  }

  const sound = new Audio("upper-cut.mp3")

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
