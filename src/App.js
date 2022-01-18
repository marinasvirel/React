import './App.css';
import Message from './message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Мой первый React</h2>
      </header>
      <Message text={"Первое задание выполнено"} />
    </div>
  );
}

export default App;
