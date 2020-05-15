import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  state = {
    letters: [],
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        {
          //add our table
          //add the first button
          //add the second button
          // add button to say start the clock + audio
        }
      </div>
    );
  }
}
export default App;
