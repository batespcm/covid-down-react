import React from 'react';

class NumbersRoundForm extends React.Component {
  state = {
    playerOneTotal: 0,
    playerTwoTotal: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // do i need component did mount?
    // this.state.numbersGoal(props); // does this get me the value
    // if target minus player total is > 1 && < 6 score + 7
    // if target minus player total === 0 score + 10
    // if p1 difference is < p2 difference, p1 score + score
    // if p2 difference is < p1 difference, p2 score + score
    // how do i get access to this.props.numbersGoal() to compare
  };

  handleNumber = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
