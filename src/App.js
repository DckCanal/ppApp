import logo from "./logo.svg";
import "./App.css";
import "./grid.css";
import RequestSender from "./requestSender";
import { DettaglioRagazzo } from "./components/ragazzo/ragazzo";

function App() {
  const ragazzi = RequestSender.getGroupInfo().ragazzi;
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{RequestSender.getAccountInfo().username}</p>
        <p>{RequestSender.getGroupInfo().nome}</p> */}
      </header>
      <main>
        <DettaglioRagazzo ragazzo={ragazzi[0]}></DettaglioRagazzo>
      </main>
    </div>
  );
}

export default App;
