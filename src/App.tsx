import style from "./App.module.scss";
import { Board } from "./components/Board/Board";
function App() {
  return (
    <div className={style.App}>
      <h1>todos</h1>
      <Board />
    </div>
  );
}

export default App;
