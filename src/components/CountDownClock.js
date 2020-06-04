import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class CountDownClock extends Component {
  render() {
    return (
      <React.Fragment>
        <ReactPlayer
          className="countDownClock"
          url="https://www.youtube.com/watch?v=2JVwo3D72cc"
          playing="true"
        />
        <table id="LettersTable">
          <thead>
            <tr>
              {this.props.letters.map((letter) => {
                return <td>{letter}</td>;
              })}
            </tr>
          </thead>
        </table>
      </React.Fragment>
    );
  }
}

export default CountDownClock;
