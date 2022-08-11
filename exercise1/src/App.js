import logo from './logo.svg';
import './App.css';
import ContactView from './components/container/contact_view';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <ContactView></ContactView>
      </header>
    </div>
  );
}

export default App;
