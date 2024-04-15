// Board.js
import React, { useState } from 'react';
import Square from './Square';
import Restart from './Restart';
import './App.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  let gStatus = false;

  if (winner) {
    status = 'THE WINNER IS: ' + winner + '!!!';
    gStatus = true;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div class="grid">
        <div class="grid-item">
            {renderSquare(0)}
        </div>
        <div class="grid-item">
            {renderSquare(1)}
        </div>
        <div class="grid-item">
            {renderSquare(2)}
        </div>
        <div class="grid-item">
            {renderSquare(3)}
        </div>
        <div class="grid-item">
            {renderSquare(4)}
        </div>
        <div class="grid-item">
            {renderSquare(5)}
        </div>
        <div class="grid-item">
            {renderSquare(6)}
        </div>
        <div class="grid-item">
            {renderSquare(7)}
        </div>
        <div class="grid-item">
            {renderSquare(8)}
        </div>
        </div>
      <Restart gameStatus={gStatus} />
    </div>
  );
};

const calculateWinner = (squares) => {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
