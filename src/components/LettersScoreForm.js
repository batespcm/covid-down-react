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
    console.log(name, value);
    this.setState({ [name]: value });
    //  const wordlength = event.target.value.length;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Player One Word</label>
        <input
          name="playerOneWord"
          onChange={this.handleWord}
          placeholder="P1 Word"
        />
        <label>Player Two Word</label>
        <input
          name="playerTwoWord"
          onChange={this.handleWord}
          placeholder="P2 Word"
        />
        <button value="reset"> Submit Words</button>
      </form>
    );
  }
}

export default LettersScoreForm;
