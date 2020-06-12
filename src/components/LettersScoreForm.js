import React from 'react';
// import * as api from '../utils/api';

class LettersScoreForm extends React.Component {
  state = {
    playerOneWord: '',
    playerTwoWord: '',
  };

  handleScoreDistribution = (event) => {
    event.preventDefault();
    let playerOneScore;
    let playerTwoScore;
    if (this.state.playerOneWord.length > this.state.playerTwoWord.length) {
      playerOneScore = this.state.playerOneWord.length;
      playerTwoScore = 0;
    } else if (
      this.state.playerOneWord.length < this.state.playerTwoWord.length
    ) {
      playerOneScore = 0;
      playerTwoScore = this.state.playerTwoWord.length;
    } else if (
      this.state.playerOneWord.length === this.state.playerTwoWord.length
    ) {
      playerOneScore = this.state.playerOneWord.length;
      playerTwoScore = this.state.playerTwoWord.length;
    }
    this.props.incrementPlayerScore(playerOneScore, playerTwoScore);
  };

  addWordToState = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // Here we will check if word(value) is a word and then add to state using OD api

  render() {
    return (
      <form onSubmit={this.handleScoreDistribution}>
        <label>
          <b>P1 Word</b>
        </label>
        <input
          name="playerOneWord"
          onChange={this.addWordToState}
          placeholder="P1 Word - 9 Letters Max"
          maxlength="9"
        />
        <label>
          <b>P2 Word</b>
        </label>
        <input
          name="playerTwoWord"
          onChange={this.addWordToState}
          placeholder="P2 Word - 9 Letters Max"
          maxlength="9"
        />
        <button className="GameButton"> Submit Words</button>
      </form>
    );
  }
}

export default LettersScoreForm;
