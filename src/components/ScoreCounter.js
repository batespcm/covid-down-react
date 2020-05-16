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

  resetScore = () => {
    this.setState(this.baseState);
  };

  playerOneScore = () => {
    this.setState((currentState) => {
      return {
        playerOne: [...currentState.playerOne],
      };
    });
  };

  playerTwoScore = () => {
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
