import React from 'react';

class ScoreCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: [0],
      playerTwo: [0],
    };
    this.baseState = this.state;
  }

  // how to create a function that will autopopulate how many players based on user input

  resetScore = () => {
    //rests the score count
    this.setState(this.baseState);
  };

  playerOneScore = () => {
    // some code required in here to take a form value and add that number to existing number playerOne[0]
    this.setState((currentState) => {
      return {
        playerOne: [...currentState.playerOne],
      };
    });
  };

  playerTwoScore = () => {
    // some code required in here to take a form value and add that number to existing number playerTwo[0]
    this.setState((currentState) => {
      return {
        playerTwo: [...currentState.playerTwo],
      };
    });
  };

  render() {
    return (
      <main>
        <h2>Player One</h2>
        <table id="ScoreTable">
          <tr>
            {this.state.playerOne.map((score) => {
              return <td>{score}</td>;
            })}
          </tr>
        </table>
        <h2>Player Two</h2>
        <table id="ScoreTable">
          <tr>
            {this.state.playerTwo.map((score) => {
              return <td>{score}</td>;
            })}
          </tr>
        </table>
        <button id="ScoreButton" onClick={this.resetScore}>
          Reset Score
        </button>
      </main>
    );
  }
}

export default ScoreCounter;
