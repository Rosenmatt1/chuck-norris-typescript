
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

function ChildComponent({ dispatch }: ChildProps) {
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}