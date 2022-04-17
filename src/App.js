import './App.css';
import ChangeColor from './components/ChangeColor';
import Counter from './components/Counter';
import Giphy from './components/Giphy';
function App() {
  return (
    <div className="App">
      <Counter /> 
      <ChangeColor />
      <Giphy />
    </div>
  );
}

export default App;
