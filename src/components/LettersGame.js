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
            id="LettersButton"
            onClick={this.getConsonant}
            disabled={this.state.letters.length >= 9}
          >
            Consonant
          </button>
          <button
            id="LettersButton"
            onClick={this.getVowel}
            disabled={this.state.letters.length >= 9}
          >
            Vowel
          </button>
          <button id="ClockButton" onClick={this.startTheClock}>
            Start The Clock
          </button>
          <button id="ClockButton" onClick={this.stopTheClock}>
            Hide The Clock
          </button>
          <button id="LettersButton" onClick={this.resetLettersGame}>
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
