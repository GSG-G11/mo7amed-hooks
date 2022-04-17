import './App.css';
import ChangeColor from './components/ChangeColor';
import Counter from './components/Counter';
import GenerateImages from './components/GenerateImages';
import Giphy from './components/Giphy';
function App() {
  return (
    <div className="App">
      <Counter /> 
      <ChangeColor />
      <Giphy />
      <GenerateImages />
    </div>
  );
}

export default App;
