import React, { useContext } from "react";
import { MyContextType, MyContext } from '../App';


const QuoteBox = () => {
  const { quote } = useContext<MyContextType>(MyContext);
  console.log(quote)

  return (
    <div> I am a QuoteBox</div>
    // <div className="inputs">
    //   <label htmlFor="explicitCheckbox"> Show only explicit jokes: </label>
    //   <input className="explicit" onChange={(e: InputEvent) => props.setisExplicitChecked(!props.isExplicitChecked)} checked={props.isExplicitChecked} type="checkbox" id="explicitCheckbox" name="explicitCheckbox" value="1" />

    //   <label htmlFor="nerdyCheckbox"> Show only nerdy jokes: </label>
    //   <input onChange={(e: InputEvent) => props.setIsNerdyChecked(!props.isNerdyChecked)} checked={props.isNerdyChecked} type="checkbox" id="nerdyheckbox" name="nerdyCheckbox" value="2" />
    // </div>
  )
};


export default QuoteBox;