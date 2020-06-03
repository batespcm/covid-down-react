import React from 'react';
// import * as api from '../utils/api';

class LettersScoreForm extends React.Component {
  state = {
    playerOneWord: '',
    playerTwoWord: '',
  };

  handleScoreDistribution = (event) => {
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

  addWordToState = (event) => {
    const { name, value } = event.target;
    // Here we will check if word(value) is a word and then add to state using OD api
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleScoreDistribution}>
        <label>Player One Word</label>
        <input
          name="playerOneWord"
          onChange={this.addWordToState}
          placeholder="P1 Word"
        />
        <label>Player Two Word</label>
        <input
          name="playerTwoWord"
          onChange={this.addWordToState}
          placeholder="P2 Word"
        />
        <button> Submit Words</button>
      </form>
    );
  }
}

export default LettersScoreForm;
