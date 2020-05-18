import React from 'react';

class NumbersRoundForm extends React.Component {
  state = {
    totalMadePlayerOne: 0,
    totalMadePlayerTwo: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Player One Total</label>
        <input />
        <label>Player Two Total</label>
        <input />
        <button> Submit Total</button>
        {/* label, input field, button */}
      </form>
    );
  }
}

export default NumbersRoundForm;
