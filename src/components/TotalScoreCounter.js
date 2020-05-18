import React from 'react';

class TotalScoreCounter extends React.Component {
  // how to create a function that will autopopulate how many players based on user input

  render() {
    return (
      <main>
        <h2>Player One</h2>
        <h3 id="ScoreTable">{this.props.playerOne}</h3>
        <h2>Player Two</h2>
        <h3 id="ScoreTable">{this.props.playerTwo}</h3>
        <button id="ScoreButton" onClick={this.props.resetScore}>
          Reset Score
        </button>
      </main>
    );
  }
}

export default TotalScoreCounter;
