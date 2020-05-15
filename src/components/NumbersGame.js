import React from 'react';

class NumbersGame extends React.Component {
  state = {
    numbers: [],
    target: [],
  };

  randomOneToTen = () => {
    const smallNumber = Math.floor(Math.random() * 10) + 1;
    this.setState((currentState) => {
      return {
        numbers: [...currentState.numbers, smallNumber],
      };
    });
  };

  bigNumber = () => {
    const oneToFour = Math.floor(Math.random() * 4) + 1;
    const largeNumber = oneToFour * 25;
    this.setState((currentState) => {
      return {
        numbers: [...currentState.numbers, largeNumber],
      };
    });
  };

  numbersTarget = () => {
    let min = 200;
    let max = 999;
    const tripleDigitTarget = Math.floor(Math.random() * (max - min)) + min;
    this.setState((currentState) => {
      return {
        target: [...currentState.target, tripleDigitTarget],
      };
    });
  };

  render() {
    return (
      <main>
        <button
          id="numberButton"
          onClick={this.randomOneToTen}
          disabled={this.state.numbers.length >= 6}
        >
          Small Number
        </button>
        <button
          id="numberButton"
          onClick={this.bigNumber}
          disabled={this.state.numbers.length >= 6}
        >
          Big Number
        </button>
        <button
          id="numberButton"
          onClick={this.numbersTarget}
          disabled={this.state.target.length >= 1}
        >
          Target Number
        </button>
        <table id="NumbersTarget">
          <tr>
            {this.state.target.map((goal) => {
              return <td>{goal}</td>;
            })}
          </tr>
        </table>
        <table id="NumbersTable">
          <tr>
            {this.state.numbers.map((number) => {
              return <td>{number}</td>;
            })}
          </tr>
        </table>
      </main>
    );
  }
}

export default NumbersGame;
