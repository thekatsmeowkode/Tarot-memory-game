import "./App.css";
import React from "react";
import { useState } from "react";
import TarotCard from "./components/tarot-card";
import chariot from "./images/chariot.svg";
import death from "./images/death.svg";
import devil from "./images/devil.svg";
import emporer from "./images/emporer.svg";
import fool from "./images/fool.svg";
import hangedman from "./images/hangedman.svg";
import heirophant from "./images/heirophant.svg";
import hermit from "./images/hermit.svg";
import highpriestess from "./images/highpriestess.svg";
import judgement from "./images/judgement.svg";
import justice from "./images/justice.svg";
import lovers from "./images/lovers.svg";
import magician from "./images/magician.svg";
import moon from "./images/moon.svg";
import strength from "./images/strength.svg";
import sun from "./images/sun.svg";

function App() {
  let cards = [
    { id: "chariot", path: chariot },
    { id: "death", path: death },
    { id: "devil", path: devil },
    { id: "emporer", path: emporer },
    { id: "fool", path: fool },
    { id: "hangedman", path: hangedman },
    { id: "heirophant", path: heirophant },
    { id: "hermit", path: hermit },
    { id: "highpriestess", path: highpriestess },
    { id: "judgement", path: judgement },
    { id: "justice", path: justice },
    { id: "lovers", path: lovers },
    { id: "magician", path: magician },
    { id: "moon", path: moon },
    { id: "strength", path: strength },
    { id: "sun", path: sun }
  ];

  //Dursetenfield shuffle algorithm
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  let shuffled = shuffleArray(cards)

  const [cardsChosen, setCardsChosen] = useState(['test']);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function checkCard(event) {
    let chosenCard = event.target.id;
    cardsChosen.map((card) => {
      if (card === chosenCard) {
        if (currentScore > highScore) {setHighScore(currentScore)}
        setCurrentScore(0);
        setCardsChosen(['test']);
        shuffleArray(cards)
        return null
      }
      else {
        return null
      }
  })
  shuffleArray(cards)
  setCardsChosen((prevState) => ([...prevState, chosenCard]))
  setCurrentScore((prevScore) => (prevScore + 1))
  }

  return (
    <div className="App">
      <div className="big-container">
        <div className="header">
          <div className="title">
            <p id="title-text">Memory Game</p>
          </div>
          <div className="scoreboard">
            <div className="score-text-container">
              <p className="score-text">Current Score:</p>
              <span id="current-score">{currentScore}</span>
            </div>
            <div className="score-text-container">
              <p className="score-text">High Score:</p>
              <span id="high-score">{highScore}</span>
            </div>
          </div>
        </div>
        <div className="first-row">
          {shuffled.map((card) => (
            <TarotCard
              cardName={card.id}
              imageFile={card.path}
              key={card.id}
              onClick={checkCard}
            ></TarotCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
