import logo from './logo.svg';
import './App.css';
import PokemonContainer from './containers/PokemonContainer';
import AudioPlayer from './AudioPlayer';

function App() {
  return (
    <section className="App">
      <h1> PokéDuel</h1> 
      <img src={logo} className="App-logo" alt="logo" width={100} height={100}/>
      <PokemonContainer />
      <AudioPlayer/>
    </ section>
  );
}

export default App;


  //Background music
  // window.onload = () => {
  //   const music = new Audio ("./src/background.mp3")
  //   music.play();
  // }