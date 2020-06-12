import React from 'react';
import NumbersRoundForm from './NumbersRoundForm';
import NumbersCountDownClock from './CountDownClock';
import NumbersRules from './NumbersRules';

class NumbersGame extends React.Component {
  state = {
    numbers: [],
    target: [],
    clockStart: false,
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

  resetNumbersGame = () => {
    //resets the numbers game
    this.setState({
      numbers: [],
      target: [],
    });
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

  numbersGoal = () => {
    let min = 300;
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
      <React.Fragment>
        <main>
          <tr>
            <button
              className="GameButton"
              onClick={this.randomOneToTen}
              disabled={this.state.numbers.length >= 6}
            >
              Small Number
            </button>
            <button
              className="GameButton"
              onClick={this.bigNumber}
              disabled={this.state.numbers.length >= 6}
            >
              Big Number
            </button>
            <button
              className="GameButton"
              onClick={this.numbersGoal}
              disabled={
                this.state.target.length >= 1 || this.state.numbers.length < 6
              }
            >
              Target Number
            </button>
          </tr>
          <tr>
            <button
              className="GameButton"
              onClick={this.startTheClock}
              disabled={this.state.target.length < 1}
            >
              Start The Clock
            </button>
            <button
              className="GameButton"
              onClick={this.stopTheClock}
              disabled={this.state.clockStart === false}
            >
              Hide The Clock
            </button>
            <button className="GameButton" onClick={this.resetNumbersGame}>
              Reset Numbers Game
            </button>
          </tr>
          {
            <NumbersRoundForm
              incrementPlayerScore={this.props.incrementPlayerScore}
              numbersGoal={this.state.target}
            />
          }
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
        <NumbersCountDownClock
          letters={this.state.numbers}
          target={this.state.target}
          clockStart={this.state.clockStart}
        />
        <NumbersRules />
      </React.Fragment>
    );
  }
}

export default NumbersGame;
