import * as React from 'react';
import './App.css';

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">oneboard</h1>
        </header>

        <div className="Body">
          <div className="Welcome">
            <h1 className="Welcome-message">Welcome to Microsoft!</h1>
            <p className="Welcome-description">
              Congratulations! Thank you for taking the time to interview with us, and it's our pleasure to extend you an internship offer this summer.  We believe in what people make possible.  Our mission is to empower every person and every organization on the planet to achieve more.  We hope to see you in Redmond!
            </p>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="Info">
            <div className="Message">
              <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
              </p>
            </div>

            <div className="Side"/>
          </div>
        </div>
        
        <footer className="Progress">
          0/1 complete
        </footer>

        
      </div>
    );
  }
}

export default App;