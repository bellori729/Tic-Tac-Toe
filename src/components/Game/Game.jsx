import { useState } from "react";
import { Board, History } from "../../components";

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
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <History moves={moves} />
    </section>
  );
};

export default Game;
