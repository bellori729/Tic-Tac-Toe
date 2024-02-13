import { useState } from "react";
import { Board, History } from "../../components";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [gameIndex, setGameIndex] = useState(0);
  const nextPlayer = gameIndex % 2 === 0;
  const currentSquares = history[gameIndex];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, gameIndex + 1), nextSquares];
    setHistory(nextHistory);
    setGameIndex(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setGameIndex(nextMove);
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
            className="historyBtn px-2 font-bold text-black bg-white rounded-md border border-black hover:bg-slate-800 hover:transition-all hover:duration-500 hover:text-white"
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
      <Board
        nextPlayer={nextPlayer}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <History moves={moves} />
    </section>
  );
};

export default Game;
