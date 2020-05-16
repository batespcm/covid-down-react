import React from 'react';

class LettersGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
    };
    this.baseState = this.state;
  }

  resetLettersGame = () => {
    //resets the letters grid
    this.setState(this.baseState);
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
    // call back to set state is always invoked with currentState and must return new object to become the new state
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
        <table id="LettersTable">
          <tr>
            {this.state.letters.map((letter) => {
              return <td>{letter}</td>;
            })}
          </tr>
        </table>
      </main>
    );
  }
}

export default LettersGame;
