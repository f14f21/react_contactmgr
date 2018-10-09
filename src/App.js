import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return React.createElement('div',{
    //   className:'App'
    // },React.createElement('h1',{},'This is a sample'));
    const Name = "Hamed Abasi";
    const showName = true;

    return (
      <div className="App">
        <h1>This is a sample,
            {showName ? 'Mr '+Name.toLowerCase() : null}
             . {34 + 1000}</h1>
      </div>
    );
  }
}

export default App;
