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
// categories: ("nerdy" | "explicit")[] | ["nerdy", "explicit"] | [];

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

  // const handlExplicitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setisExplicitChecked(!isExplicitChecked)
  //   // console.log(isExplicitChecked)
  //   filterJokes()
  // }

  // const handleNerdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setIsNerdyChecked(e.target.checked)
  //   // console.log(isNerdyChecked)
  //   filterJokes()
  // }


  // const filteredBothTags = quotes.filter(tag => tag.categories.includes('nerdy') || tag.categories.includes('explicit'));
  // console.log(filteredBothTags)

  // const filteredNerdTags = quotes.filter(tag => tag.categories.includes('nerdy'));
  // const filteredExplicitTags = quotes.filter(tag => tag.categories.includes('explicit'));

  // const filteredJokes = quotes.filter(joke => {
  //   let nerdFilter = true
  //   let explicitFilter = true
  //   let nerdAndExplicitFilter = true

  //   if (isExplicitChecked && isNerdyChecked) {
  //     nerdAndExplicitFilter = quotes.filter(joke => joke.categories.includes('explicit'))
  //   }

  //   else if (isNerdyChecked) {
  //     nerdFilter = quotes.filter(joke => joke.categories.includes('nerdy'))
  //   }

  //   else if (isExplicitChecked) {
  //     explicitFilter = quotes.filter(joke => joke.categories.includes('explicit'))
  //   }

  //   if (nerdAndExplicitFilter && stateActivated && genreActivated) return restuarant
  // })

  useEffect(() => {

    if (isExplicitChecked && isNerdyChecked) {
      console.log("BOTH!!!!")
    }

    else if (isNerdyChecked) {
      console.log("nerds!!!")
    }

    else if (isExplicitChecked) {
      console.log("explicit!!!")
    }
    else {
      console.log("REGULAR")
    }


  }, [isNerdyChecked, isExplicitChecked])

  // const filterJokes = () => {
  //   let nerdFilter = []
  //   let explicitFilter = []
  //   let nerdAndExplicitFilter = []

  //   console.log("filter jokes fired")

  //   if (isExplicitChecked && isNerdyChecked) {
  //     nerdAndExplicitFilter = quotes.filter(joke => joke.categories.includes('explicit') || joke.categories.includes('nerdy'))
  //     console.log("both", nerdAndExplicitFilter)
  //     setFilteredJokes(nerdAndExplicitFilter)
  //     return
  //   }
  //   else if (isNerdyChecked) {
  //     nerdFilter = quotes.filter(joke => joke.categories.includes('nerdy'))
  //     console.log("nerds", nerdFilter)
  //     setFilteredJokes(nerdFilter)
  //     return
  //   }
  //   else if (isExplicitChecked) {
  //     explicitFilter = quotes.filter(joke => joke.categories.includes('explicit'))
  //     console.log("explicit", explicitFilter)
  //     setFilteredJokes(explicitFilter)
  //     return
  //   }
  // }

  // console.log("filtered jokes", filteredJokes)

  return (
    <div className="App">

      <h1> Hello Chuck! </h1>

      <img className="chuck" alt="chuck" src={image} />

      <div> An app for randomly generating chuck norris quotes. </div>

      <div className="inputs">

        <label htmlFor="explicitCheckbox"> Show only explicit jokes: </label>
        <input onChange={() => setisExplicitChecked(!isExplicitChecked)} checked={isExplicitChecked}  type="checkbox" id="explicitCheckbox" name="explicitCheckbox" value="1" />
        <p>Explicit Checkbox is {isExplicitChecked ? 'checked' : 'unchecked'}</p>

        <label htmlFor="nerdyCheckbox"> Show only nerdy jokes: </label>
        <input onChange={() => setIsNerdyChecked(!isNerdyChecked)} checked={isNerdyChecked} type="checkbox" id="nerdyheckbox" name="nerdyCheckbox" value="2" />
        <p>Nerdy Checkbox is {isNerdyChecked ? 'checked' : 'unchecked'}</p>
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
