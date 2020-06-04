import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class CountDownClock extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=2JVwo3D72cc"
        playing="true"
      />
    );
  }
}

export default CountDownClock;
