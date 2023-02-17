import React from 'react';
import './App.css';
import data from "./data.json";
import image from "./chuck-norris.png"

function App() {
  console.log(data)

  const sound = new Audio("upper-cut.mp3")

  const playSound = () => {
    sound.play()
  }

  return (
    <div className="App">
      <h1>Hello Chuck</h1>

      <img className="chuck"  alt="chuck" src={image}/>

      <button className="button" onClick={playSound}>
        <div> Karate Chop! </div>
        <i className="fas fa-fist-raised" style={{ fontSize: "3rem" }}></i>
      </button>

    </div>
  );
}

export default App;
