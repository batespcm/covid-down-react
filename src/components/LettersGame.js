import React from 'react';
import LettersScoreForm from './LettersScoreForm';

class LettersGame extends React.Component {
  state = {
    letters: [],
  };

  resetLettersGame = () => {
    //resets the letters grid
    this.setState({
      letters: [],
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
    );
  }
}

export default LettersGame;
