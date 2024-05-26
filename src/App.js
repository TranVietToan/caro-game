import './App.css';
import Game from './components/Game';
import Player from './components/Player';
import imgLuffy from './luffy.png';
import imgZoro from './imgZoro.jpg'

function App() {
  return (
    <div className="App">
      <Player name={"X"}></Player>
      <Game></Game>
      <Player name={"O"}></Player>
    </div>
  );
}

export default App;
