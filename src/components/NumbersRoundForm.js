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
    // let min = numbersGoal - 5; // need to get a range going
    // let max = numbersGoal + 5; // need to get a range going
    let playerOneScore;
    let playerTwoScore;
    if (
      playerOneTotal === playerTwoTotal &&
      numbersGoal - playerOneTotal === 0
    ) {
      playerOneScore = 10;
      playerTwoScore = 10;
    } else if (playerOneTotal - numbersGoal === 0) {
      playerOneScore = 10;
      playerTwoScore = 0;
    } else if (playerTwoTotal - numbersGoal === 0) {
      playerOneScore = 0;
      playerTwoScore = 10;
    }
    this.props.incrementPlayerScore(playerOneScore, playerTwoScore);
  };

  handleNumber = (event) => {
    const { name, value } = event.target;
    let valueAsInt = parseInt(value, 10);
    this.setState({ [name]: valueAsInt });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>P1 Total</label>
        <input
          name="playerOneTotal"
          onChange={this.handleNumber}
          placeholder="P1 Answer"
          maxLength="3"
          type="number"
        />
        <label>P2 Total</label>
        <input
          name="playerTwoTotal"
          onChange={this.handleNumber}
          placeholder="P2 Answer"
          maxLength="3"
          type="number"
        />
        <button disabled={this.props.numbersGoal.length < 1}>
          {' '}
          Submit Total
        </button>
        {/* label, input field, button */}
      </form>
    );
  }
}

export default NumbersRoundForm;
