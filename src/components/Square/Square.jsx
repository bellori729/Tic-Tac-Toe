const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="square flex justify-center items-center border-black border bg-white float-left text-black -mr-1 -mt-1 p-0 h-24 w-24"
      onClick={onSquareClick}
    >
      <p className="text-center text-6xl font-bold">{value}</p>
    </button>
  );
};

export default Square;
