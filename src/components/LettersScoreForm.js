import React from 'react';

class LettersScoreForm extends React.Component {
  state = {
    playerOneWord: '',
    playerTwoWord: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let player;
    let score;
    if (this.state.playerOneWord.length > this.state.playerTwoWord.length) {
      player = 'playerOne';
      score = this.state.playerOneWord.length;
    } else if (
      this.state.playerOneWord.length < this.state.playerTwoWord.length
    ) {
      player = 'playerTwo';
      score = this.state.playerTwoWord.length;
    }
    this.props.incrementPlayerScore(player, score);
  };

  handleWord = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    //  const wordlength = event.target.value.length;
  };

  // handleWordPlayerTwo = (event) => {
  //   const { playerTwoWord, value } = event.target;
  //   this.setState({ [playerTwoWord]: value });
  // };

  // method which updates state with the input of the user  - onChange
  // onSubmit on the form - figure out which is the logest word and increase score in App.
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Player One Word</label>
        <input name="playerOneWord" onChange={this.handleWord} />
        <label>Player Two Word</label>
        <input name="playerTwoWord" onChange={this.handleWord} />
        <button> Submit Words</button>
        {/* label, input field, button */}
      </form>
    );
  }
}

export default LettersScoreForm;
