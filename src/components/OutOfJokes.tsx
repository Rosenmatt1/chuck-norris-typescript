
import { useReducer} from 'react';
import { Action } from '../App';

// function ChildComponent({ dispatch }) {
//   const handleIncrement = () => {
//     dispatch({ type: ActionTypes.INCREMENT });
//   };

//   const handleDecrement = () => {
//     dispatch({ type: ActionTypes.DECREMENT });
//   };

//   return (
//     <div>
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleDecrement}>-</button>
//     </div>
//   );
// }

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