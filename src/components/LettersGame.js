import React from 'react';
import LettersScoreForm from './LettersScoreForm';
import CountDownClock from './CountDownClock';

class LettersGame extends React.Component {
  state = {
    letters: [],
    clockStart: false,
  };

  resetLettersGame = () => {
    //resets the letters grid
    this.setState({
      letters: [],
    });
  };

  startTheClock = () => {
    this.setState({
      clockStart: true,
    });
  };

  stopTheClock = () => {
    this.setState({
      clockStart: false,
    });
  };

  getVowel = () => {
    const randomVowel = 'eeoeaaooeauiiaeieeooeoeeioaoouaeaaaieieoeieeiuaiaiaieueeueaaoaoieio'.split(
      ''
    )[Math.floor(Math.random() * 67)];
    const uppercaseVowel = randomVowel.toUpperCase();
    this.setState((currentState) => {
      return {
        letters: [...currentState.letters, uppercaseVowel],
      };
    });
  };

  getConsonant = () => {
    const randomConsonant = 'tnnftdklcmnzdnntthtrcdwgpssbvtrlplgprmrxtrrldsjmndsrrtmssnpcssbtfslndghqyr'.split(
      ''
    )[Math.floor(Math.random() * 74)];
    const uppercaseConsonant = randomConsonant.toUpperCase();
    this.setState((currentState) => {
      return {
        letters: [...currentState.letters, uppercaseConsonant],
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <main>
          <button
            id="GameButton"
            onClick={this.getConsonant}
            disabled={this.state.letters.length >= 9}
          >
            Consonant
          </button>
          <button
            id="GameButton"
            onClick={this.getVowel}
            disabled={this.state.letters.length >= 9}
          >
            Vowel
          </button>
          <button
            id="GameButton"
            onClick={this.startTheClock}
            disabled={this.state.letters.length < 9}
          >
            Start The Clock
          </button>
          <button
            id="GameButton"
            onClick={this.stopTheClock}
            disabled={this.state.clockStart === false}
          >
            Hide The Clock
          </button>
          <button id="GameButton" onClick={this.resetLettersGame}>
            Reset Letters Game
          </button>

          {
            <LettersScoreForm
              incrementPlayerScore={this.props.incrementPlayerScore}
            />
          }
          <table id="LettersTable">
            <thead>
              <tr>
                {this.state.letters.map((letter) => {
                  return <td>{letter}</td>;
                })}
              </tr>
            </thead>
          </table>
        </main>
        <CountDownClock
          letters={this.state.letters}
          clockStart={this.state.clockStart}
        />
      </React.Fragment>
    );
  }
}

export default LettersGame;
