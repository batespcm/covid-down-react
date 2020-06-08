import React from 'react';

class NumbersRoundForm extends React.Component {
  state = {
    playerOneTotal: 0,
    playerTwoTotal: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { numbersGoal } = this.props;
    let playerOneTotal = this.state.playerOneTotal;
    let playerTwoTotal = this.state.playerTwoTotal;
    let min = numbersGoal - 5;
    let max = numbersGoal + 5;
    let playerOneScore;
    let playerTwoScore;
    if (
      playerOneTotal === playerTwoTotal &&
      numbersGoal - playerOneTotal === 0
    ) {
      playerOneScore = 10;
      playerTwoScore = 10;
    } else if (playerOneTotal < max && playerOneTotal >= min) {
      playerOneScore = 7;
      playerTwoScore = 0;
    }
    this.props.incrementPlayerScore(playerOneScore, playerTwoScore);
  };

  handleNumber = (event) => {
    const { name, value } = event.target;
    let strToNum = parseInt(value, 10);
    console.log(typeof strToNum);
    this.setState({ [name]: strToNum });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Player One Total</label>
        <input
          name="playerOneTotal"
          onChange={this.handleNumber}
          placeholder="P1 Answer"
        />
        <label>Player Two Total</label>
        <input
          name="playerTwoTotal"
          onChange={this.handleNumber}
          placeholder="P2 Answer"
        />
        <button> Submit Total</button>
        {/* label, input field, button */}
      </form>
    );
  }
}

export default NumbersRoundForm;
