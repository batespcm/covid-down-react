import React, { Component } from 'react';
import { Link } from '@reach/router';

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
        <Link to="/">
          <button className="GameButton" onClick={this.props.resetGame}>
            Reset Game
          </button>
        </Link>
        <Link to="/numbersgame">
          <button className="GameButton">Numbers Game</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Header;
