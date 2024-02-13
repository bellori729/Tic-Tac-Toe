const History = ({ moves }) => {
  return (
    <div className="game-info w-[200px] h-full flex flex-col items-center list-none p-0 m-0">
      <p className="font-bold mb-3 text-2xl text-white">HISTORY</p>
      <ul className="historyList flex flex-col items-center gap-2.5">
        {moves}
      </ul>
    </div>
  );
};

export default History;
