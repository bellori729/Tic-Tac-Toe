import { useState } from "react";
import { Board } from "../../components";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `${move}번째 시점으로 돌아가기`;
    }
    if (description) {
      return (
        <li key={move}>
          <button
            className="historyBtn px-2 font-bold text-black bg-white rounded-md border border-black hover:bg-gray-600 hover:transition-all hover:duration-500 hover:text-white"
            onClick={() => jumpTo(move)}
          >
            {description}
          </button>
        </li>
      );
    }
  });

  return (
    <section className="game flex justify-around items-center gap-12 w-[720px] h-[400px]">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info w-[200px] h-full flex flex-col items-center list-none p-0 m-0">
        <p className="font-bold mb-3 text-2xl">HISTORY</p>
        <ul className="historyList flex flex-col items-center gap-2.5">
          {moves}
        </ul>
      </div>
    </section>
  );
};

export default Game;
