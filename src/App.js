import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoKit from 'videokit';

class App extends React.Component {
  componentDidMount() {
    console.log("MOUNTED", this.refs.call, VideoKit);
    const vk = new VideoKit({
      apiKey: 'cz1b1K281mN1ol3de1W1R2y1Ig',
      callId: 'my-call-1293487',
    });
    vk.mount(this.refs.call);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div ref="call"></div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React?
          </a>
        </header>
      </div>
    );
  }
}

export default App;
