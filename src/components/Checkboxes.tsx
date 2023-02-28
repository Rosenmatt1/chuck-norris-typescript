import React, { useState } from "react";


type Props = {
  isNerdyChecked: boolean,
  isExplicitChecked: boolean,
}


const Checkboxes: React.FC<Props> = (props) => {
  console.log(props.isNerdyChecked)
  return (
    <div> Hello Chicken </div>
    // <div className="inputs">
    //   <label htmlFor="explicitCheckbox"> Show only explicit jokes: </label>
    //   <input className="explicit" onChange={() => setisExplicitChecked(!props.isExplicitChecked)} checked={props.isExplicitChecked} type="checkbox" id="explicitCheckbox" name="explicitCheckbox" value="1" />

    //   <label htmlFor="nerdyCheckbox"> Show only nerdy jokes: </label>
    //   <input onChange={() => setIsNerdyChecked(!props.isNerdyChecked)} checked={props.isNerdyChecked} type="checkbox" id="nerdyheckbox" name="nerdyCheckbox" value="2" />
    // </div>
  )
};


export default Checkboxes;