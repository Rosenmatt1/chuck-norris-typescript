import React from 'react';
import './App.css';
import data from "./data.json";
import image from "./chuck-norris.png"

function App() {
  console.log(data)

  const sound = new Audio("upper-cut.mp3")


  return (
    <div className="App">
      <h1>Hello Chuck</h1>

      <img className="chuck"  alt="chuck" src={image}/>

      <button className="button">
        {/* <i className="fa-solid fa-hand-fist fa-2xl" style={{ fontSize: "200px" }} ></i> */}
        <i className="fas fa-fist-raised" style={{ fontSize: "50px" }}></i>
      </button>

    </div>
  );
}

export default App;
