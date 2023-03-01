import React, { useContext } from "react";
import { MyContextType, MyContext } from '../App';


const QuoteBox = () => {
  const { quote } = useContext<MyContextType>(MyContext);

  return (
    <div>
      {(quote.length > 0) && <div className="quoteBox">
        <div className="quote"> {quote} </div>
      </div>}
    </div>
  )
};


export default QuoteBox;