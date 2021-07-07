import logo from './logo.svg';
import './App.css';
import { Tabs } from '@material-ui/core';
import SimpleTabs from './TabsPanel';
import Box from '@material-ui/core/Box';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Account">
          Quin Poley
        </p>
        <p className="BriefAbout">
          Cloud, Security, Ml enthusiast | NOT A FRONTEND GUY
        </p>
        <a
          className="App-link"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oooh a link!
        </a>
      </header>
      <div className="TabContainer">
        <SimpleTabs/>
      </div>
      <Box height='100%' background-color="#21232b"/>
    </div>
    
  );
}

export default App;
