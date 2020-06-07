import React from 'react';
import './App.css';
import Header from './components/Header';
import LettersGame from './components/LettersGame';
// import NumbersGame from './components/NumbersGame';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    playerOne: 0,
    playerTwo: 0,
  };

  resetGame = () => {
    this.setState({ playerOne: 0, playerTwo: 0 });
  };

  incrementPlayerScore = (player, score) => {
    this.setState((currentState) => {
      return {
        [player]: currentState[player] + score,
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
        {/* {<NumbersGame incrementPlayerScore={this.incrementPlayerScore}} /> */}
        <LettersGame incrementPlayerScore={this.incrementPlayerScore} />
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
