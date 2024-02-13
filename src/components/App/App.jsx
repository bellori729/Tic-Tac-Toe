import { Game, ResetBtn } from "..";

const App = () => {
  return (
    <div className="App text-center font-pretendard">
      <h1 className="text-3xl font-bold text-white">TIC-TAC-TOE</h1>
      <Game />
      <ResetBtn />
    </div>
  );
};

export default App;
