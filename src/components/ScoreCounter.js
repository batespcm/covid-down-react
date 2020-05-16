import React from 'react';

class ScoreCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [0, 0],
    };
    this.baseState = this.state;
  }

  render() {
    return <main></main>;
  }
}

export default ScoreCounter;
