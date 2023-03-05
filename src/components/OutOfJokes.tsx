
import { useReducer} from 'react';
import { Action } from '../App';


interface ChildProps {
  dispatch: React.Dispatch<Action>;
}


function OutOfJokes({ dispatch }: ChildProps) {

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };


  const handleFilter = () => {
    dispatch({ type: "FILTER" });
  };

  // console.log("Child state", state)


  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {/* <h1>Count: {state.count}</h1> */}
    </div>
  );
}

export default OutOfJokes