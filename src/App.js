import './App.css';
import Converter from './Converter';

function App() {
  return (
    <div className="App">
      <Converter title="Kilogram To Pounds Converter" conveterOneTitle="Kilograms" convertTwoTitle="Pounds" formulaOneValue="2.20462" formulaTwoValue="0.453592"/>
      <Converter title="Feet To Inches Converter" conveterOneTitle="Foot" convertTwoTitle="Inches" formulaOneValue="12" formulaTwoValue="0.0833333"/>
    </div>
  );
}

export default App;
