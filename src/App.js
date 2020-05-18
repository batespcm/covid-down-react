import React from 'react';
import './App.css';
import Header from './components/Header';
import LettersGame from './components/LettersGame';
import NumbersGame from './components/NumbersGame';
import TotalScoreCounter from './components/TotalScoreCounter';

class App extends React.Component {
  // keep score
  state = {
    playerOne: 0,
    playerTwo: 0,
  };

  resetScore = () => {
    this.setState({ playerOne: 0, playerTwo: 0 });
  };

  incrementPlayerScore = (player, score) => {
    console.log(player, score, 'playerScore console.log'); // undefined
    // some code required in here to take a form value and add that number to existing number playerOne[0]
    this.setState((currentState) => {
      return {
        [player]: currentState[player] + score,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* display score in the score counter */}
        <TotalScoreCounter
          resetScore={this.resetScore}
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo}
        />
        <NumbersGame />
        <LettersGame incrementPlayerScore={this.incrementPlayerScore} />
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
