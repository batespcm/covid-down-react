import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          P1:
          {this.props.playerOne}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COVIDDOWN
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P2:{this.props.playerTwo}{' '}
        </h1>
        <button className="scoreButton" onClick={this.props.resetGame}>
          Reset Game
        </button>
      </React.Fragment>
    );
  }
}

export default Header;
