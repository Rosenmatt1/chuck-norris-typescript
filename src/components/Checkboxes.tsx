import React from "react";


type Props = {
  isNerdyChecked: boolean,
  isExplicitChecked: boolean,
  setIsNerdyChecked: (val: boolean) => void;
  setisExplicitChecked: (val: boolean) => void;
}


const Checkboxes: React.FC<Props> = (props) => {
  return (
    <div className="inputs">
      <label htmlFor="explicitCheckbox"> Show only explicit jokes: </label>
      <input className="explicit" onChange={() => props.setisExplicitChecked(!props.isExplicitChecked)} checked={props.isExplicitChecked} type="checkbox" id="explicitCheckbox" name="explicitCheckbox" value="1" />

      <label htmlFor="nerdyCheckbox"> Show only nerdy jokes: </label>
      <input onChange={() => props.setIsNerdyChecked(!props.isNerdyChecked)} checked={props.isNerdyChecked} type="checkbox" id="nerdyheckbox" name="nerdyCheckbox" value="2" />
    </div>
  )
};


export default Checkboxes;