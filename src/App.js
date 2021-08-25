import React, { useState, useEffect } from 'react';
import Squarecomponents from './Squarecomponents';

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  
  const initialState = ["", "", "", "", "", "", "", "", ""];

  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false)

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "0";
    updateGameState(strings);
    updateIsXChance(!isXChance);
    
  }

  const clearGame=()=>{
    updateGameState(initialState)
  }

  useEffect(() => {
    const winner = checkWinner(); 
    if (winner) {
      alert(`${winner} has won the game`);
      clearGame()
    }
  },[gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

 
  return (
    <div className="app-header">
      <p className="heading-text"> ReactJS Tic-Tac-Toe </p>

      <div className="row jc-center">
        <Squarecomponents className="b-bottom-right" state={gameState[0]} onClick={() => onSquareClicked(0)} />
        <Squarecomponents className="b-bottom-right" state={gameState[1]} onClick={() => onSquareClicked(1)} />
        <Squarecomponents className="b-bottom" state={gameState[2]} onClick={() => onSquareClicked(2)} />
      </div>
      <div className="row jc-center" >
        <Squarecomponents className="b-bottom-right" state={gameState[3]} onClick={() => onSquareClicked(3)} />
        <Squarecomponents className="b-bottom-right" state={gameState[4]} onClick={() => onSquareClicked(4)} />
        <Squarecomponents className="b-bottom" state={gameState[5]} onClick={() => onSquareClicked(5)} />
      </div>
      <div className="row jc-center">
        <Squarecomponents className=" b-right " state={gameState[6]} onClick={() => onSquareClicked(6)} />
        <Squarecomponents className=" b-right" state={gameState[7]} onClick={() => onSquareClicked(7)} />
        <Squarecomponents className="" state={gameState[8]} onClick={() => onSquareClicked(8)} />
      </div>
      <button className="clear-button" onClick={clearGame} > Clear Game</button>
     
    </div>
  );
}

export default App;
