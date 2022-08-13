import logo from './logo.svg';
import './App.css';
import Ejemplo2 from './hooks/Ejemplo2';
// import Ejemplo1 from './hooks/Ejemplo1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        {/* <Ejemplo1></Ejemplo1> */ }
        <Ejemplo2></Ejemplo2>
      </header>
    </div>
  );
}

export default App;
