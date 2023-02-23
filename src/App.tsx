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
  const [isNerdyChecked, setIsNerdyChecked] = useState<boolean>(false)
  const [isExplicitChecked, setisExplicitChecked] = useState<boolean>(false)
  const [filteredJokes, setFilteredJokes] = useState<Joke[]>([]);


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

  const handlExplicitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setisExplicitChecked(!isExplicitChecked)
    console.log(e.target)
  }

  const handleNerdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNerdyChecked(!isNerdyChecked)
    console.log(e.target)
  }

//   const logic = receivedData.filter(restuarant => {
//     let searchActivated = true
//     let genreActivated = true
//     let stateActivated = true

//     if (search) {
//         searchActivated = (restuarant.name.toLowerCase().includes(search.toLowerCase()) || restuarant.city.toLowerCase().includes(search.toLowerCase()) || restuarant.genre.toLowerCase().split(',').includes(search.toLowerCase()))
//     }

//     if (props.chosenGenre.length > 0) {
//         genreActivated = restuarant.genre.includes(props.chosenGenre)
//     }

//     if (props.chosenState.length > 0) {
//         stateActivated = restuarant.state === props.chosenState
//     }

//     if (searchActivated && stateActivated && genreActivated) return restuarant
// })

  const filteredBothTags = quotes.filter(tag => tag.categories.includes('nerdy') || tag.categories.includes('explicit'));
  console.log(filteredBothTags)

  const filteredNerdTags = quotes.filter(tag => tag.categories.includes('nerdy'));
  const filteredExplicitTags = quotes.filter(tag => tag.categories.includes('explicit'));


  // const filterJokes = () => {
  //   if (isNerdyChecked) {
  //     quotes.filter
  //   }
  // }


  return (
    <div className="App">

      <h1> Hello Chuck! </h1>

      <img className="chuck" alt="chuck" src={image} />

      <div> An app for randomly generating chuck norris quotes. </div>

      <div className="inputs">
        <label htmlFor="explicitCheckbox"> Show only explicit jokes: </label>
        <input onChange={(e) => handlExplicitChange(e)} type="checkbox" id="explicitCheckbox" name="explicitCheckbox" value="1" />

        <label htmlFor="nerdyCheckbox"> CShow only nerdy jokes: </label>
        <input onChange={(e) => handleNerdChange(e)} type="checkbox" id="nerdyheckbox" name="nerdyCheckbox" value="2" />
      </div>

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
