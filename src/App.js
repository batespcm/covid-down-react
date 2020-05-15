import React from 'react';
import './App.css';
import Header from './components/Header';
import LettersGame from './components/LettersGame';
import NumbersGame from './components/NumbersGame';

class App extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <NumbersGame />
        <LettersGame />
        {
          //add the first button
          //add the second button
          // add button to say start the clock + audio
        }
      </div>
    );
  }
}
export default App;
