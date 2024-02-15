import { useEffect, useState } from "react";
import { Square, Status } from "../../components";

// const PLAYER_1 = "🗡";
// const PLAYER_2 = "🛡";

const dogAndCat = ["🐶", "😼"];
const manAndWoman = ["🧑🏻", "👩🏻"];
const keyAndLock = ["🔑", "🔒"];
const pizzaAndHamburger = ["🍕", "🍔"];

const Board = ({ nextPlayer, squares, onPlay }) => {
  const [player, setPlayer] = useState(dogAndCat);
  function calculateWinner(squares) {
    const WINNER_CONDITIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < WINNER_CONDITIONS.length; i++) {
      const [x, y, z] = WINNER_CONDITIONS[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    if (!squares.includes(null)) {
      return "DRAW";
    }

    return null;
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (nextPlayer) {
      nextSquares[i] = player[0];
    } else {
      nextSquares[i] = player[1];
    }

    onPlay(nextSquares);
  };

  const checkWinner = calculateWinner(squares);
  let status;
  if (checkWinner) {
    status = `WINNER: ${checkWinner}`;
  } else {
    status = `NEXT PLAYER : ${nextPlayer ? player[0] : player[1]}`;
  }

  useEffect(() => {
    if (checkWinner) {
      setTimeout(() => {
        alert("GAME OVER");
      }, 200);
    }
  }, [checkWinner]);

  return (
    <div className="playBoard flex flex-col items-center">
      <div className="mb-2.5 flex gap-5">
        <span className="text-white font-bold text-2xl">Select an item </span>
        <select
          className="w-[70px] text-center font-bold rounded-md"
          onChange={(e) => {
            switch (e.target.value) {
              case dogAndCat.join(""):
                setPlayer(dogAndCat);
                break;
              case manAndWoman.join(""):
                setPlayer(manAndWoman);
                break;
              case keyAndLock.join(""):
                setPlayer(keyAndLock);
                break;
              case pizzaAndHamburger.join(""):
                setPlayer(pizzaAndHamburger);
                break;
              default:
                break;
            }
          }}
        >
          <option>{dogAndCat}</option>
          <option>{manAndWoman}</option>
          <option>{keyAndLock}</option>
          <option>{pizzaAndHamburger}</option>
        </select>
      </div>
      <div className="board-row after:content-[''] after:table">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row after:content-[''] after:table">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row after:content-[''] after:table">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="status mt-2.5">
        <Status status={status} />
      </div>
    </div>
  );
};

export default Board;
