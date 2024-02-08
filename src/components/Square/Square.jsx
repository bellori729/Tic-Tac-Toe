import "./Square.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      <p>{value}</p>
    </button>
  );
};

export default Square;
