
import { useState, useReducer } from 'react';
import { Action, Joke, State } from '../App';


interface ChildProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}


function OutOfJokes({ state, dispatch }: ChildProps) {
  console.log("CHild state", state.filterArray.length)

  // const handleFilter = () => {
  //   dispatch({ type: "FILTER" });
  // };


  return (
    // <div>
    //   <button onClick={handleFilter}>FILTER</button>
    // </div>
    <div>
      <h1>Jokes Left: {state.filterArray.length} </h1>
    </div>

  );
}

export default OutOfJokes