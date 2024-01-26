import NoaaData from './loader/loader';
import waves from './waves.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={waves} className="App-logo" alt="logo" />
        <div>
          <h1>San Diego</h1>

          <NoaaData />
        </div>
        <a
          className="App-link"
          href="https://github.com/josephine-dot-lee/tides"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}



export default App;
