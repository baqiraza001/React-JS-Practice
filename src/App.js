import logo from './logo.svg';
import './App.css';
import QuoteSlider from './QuoteSlider';
import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <div className="App">
      {/* <QuoteSlider /> */}
      <CharacterCounter limit={300} />
    </div>
  );
}

export default App;
