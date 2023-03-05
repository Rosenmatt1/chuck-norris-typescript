import { useState, useEffect, createContext, useReducer } from 'react';
import './App.css';
import data from "./data.json";
import image from "./chuck-norris.png";
import Checkboxes from "./components/Checkboxes";
import QuoteBox from "./components/QuoteBox";
import OutOfJokes from "./components/OutOfJokes";

interface Joke {
  readonly id: number,
  joke: string,
  categories: string[],
}
// categories: ("nerdy" | "explicit")[] | [],
// categories: string[],
// categories: ("nerdy" | "explicit")[] | ["nerdy", "explicit"] | [];

export interface MyContextType {
  quote: string;
  // setQuotes: React.Dispatch<React.SetStateAction<number>>;
}

export const MyContext = createContext<MyContextType>({
  quote: "",
  // setQuotes: () => {},
});

const initialState = {
  count: 0
};

// const ActionTypes = {
//   INCREMENT: "INCREMENT",
//   DECREMENT: "DECREMENT"
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ActionTypes.INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case ActionTypes.DECREMENT:
//       return { ...state, count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

interface State {
  count: number;
}

interface IncrementAction {
  type: "INCREMENT";
}

interface DecrementAction {
  type: "DECREMENT";
}

export type Action = IncrementAction | DecrementAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}


const App: React.FC = () => {
  const [quotes, setQuotes] = useState<Joke[]>([]);
  const [quote, setQuote] = useState<string>("")
  const [isNerdyChecked, setIsNerdyChecked] = useState<boolean>(false)
  const [isExplicitChecked, setisExplicitChecked] = useState<boolean>(false)
  const [filteredJokes, setFilteredJokes] = useState<Joke[]>([]);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    //This is where the fetch would be
    setQuotes(data.jokes)
  }, [])


  const randomQuote = () => {
    let randomNumber = null

    if (filteredJokes.length > 0) {
      randomNumber = Math.floor(Math.random() * filteredJokes.length);
    } else {
      randomNumber = Math.floor(Math.random() * quotes.length);
    }

    if (filteredJokes.length > 0) {
      setQuote(filteredJokes[randomNumber].joke)
    } else {
      setQuote(quotes[randomNumber].joke)
    }
    playSound()
  }


  const sound: HTMLAudioElement = new Audio("upper-cut.mp3")

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

  useEffect(() => {
    if (isExplicitChecked && isNerdyChecked) {
      setFilteredJokes(quotes.filter(joke => joke.categories.includes('explicit') || joke.categories.includes('nerdy')))
      // console.log("BOTH!!!!", filteredJokes)
    }
    else if (isNerdyChecked) {
      setFilteredJokes(quotes.filter(joke => joke.categories.includes('nerdy')))
      // console.log("nerds!!!", filteredJokes)
    }
    else if (isExplicitChecked) {
      setFilteredJokes(quotes.filter(joke => joke.categories.includes('explicit')))
      // console.log("explicit!!!", filteredJokes)
    }
    else {
      setFilteredJokes([])
      // console.log("REGULAR")
    }
  }, [isNerdyChecked, isExplicitChecked])


  return (
    <MyContext.Provider value={{ quote }}>
      <div className="App">

        <h1> Hello Chuck! </h1>

        <img className="chuck" alt="chuck" src={image} />

        <div> An app for randomly generating chuck norris quotes. </div>

        <Checkboxes isNerdyChecked={isNerdyChecked} isExplicitChecked={isExplicitChecked} setIsNerdyChecked={setIsNerdyChecked} setisExplicitChecked={setisExplicitChecked} />

        <QuoteBox />

        <button className="button" onClick={randomQuote}>
          <div className="karate"> Karate Chop! </div>
          <i className="fas fa-fist-raised fist" style={{ fontSize: "3rem", color: "white" }}></i>
        </button>

        <OutOfJokes dispatch={dispatch} />

        <h1>Count: {state.count}</h1>

      </div>
    </MyContext.Provider>
  );
}

export default App;
