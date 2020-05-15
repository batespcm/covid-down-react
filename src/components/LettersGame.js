import React from 'react';

class LettersGame extends React.Component {
  state = {
    letters: [],
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
          id="consonantButton"
          onClick={this.getConsonant}
          disabled={this.state.letters.length >= 9}
        >
          Consonant
        </button>
        <button
          id="vowelButton"
          onClick={this.getVowel}
          disabled={this.state.letters.length >= 9}
        >
          Vowel
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
