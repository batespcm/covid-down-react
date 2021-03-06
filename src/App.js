import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import LettersGame from './components/LettersGame';
import NumbersGame from './components/NumbersGame';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    playerOne: 0,
    playerTwo: 0,
  };

  resetGame = () => {
    this.setState({ playerOne: 0, playerTwo: 0 });
  };

  incrementPlayerScore = (playerOneScore, playerTwoScore) => {
    let playerOne = 'playerOne';
    let playerTwo = 'playerTwo';
    this.setState((currentState) => {
      return {
        [playerOne]: currentState[playerOne] + playerOneScore,
        [playerTwo]: currentState[playerTwo] + playerTwoScore,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          resetGame={this.resetGame}
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo}
        />
        <Router>
          <LettersGame
            path="/"
            incrementPlayerScore={this.incrementPlayerScore}
          />
          <NumbersGame
            path="/numbersgame"
            incrementPlayerScore={this.incrementPlayerScore}
          />
        </Router>
        {/* {<NumbersGame incrementPlayerScore={this.incrementPlayerScore}} /> */}

        <Footer />
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
