import React from 'react';
import './App.css';

function App({name}) {

  const { config } = this.props;
  const name = config && config.params && config.params['name'];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, {name}!
        </p>
      </header>
    </div>
  );
}

export default App;

