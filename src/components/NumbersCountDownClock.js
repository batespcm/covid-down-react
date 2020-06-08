import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class CountDownClock extends Component {
  render() {
    const { clockStart } = this.props;
    if (clockStart === false) return <ReactPlayer />;
    return (
      <React.Fragment>
        <ReactPlayer
          className="countDownClock"
          url="media/covid-down-clock.mp4"
          playing="true"
          width={250}
          height={360}
        />
        <table id="NumbersTarget">
          <tr>
            {this.props.target.map((goal) => {
              return <td>{goal}</td>;
            })}
          </tr>
        </table>
        <table id="NumbersTable">
          <tr>
            {this.props.numbers.map((number) => {
              return <td>{number}</td>;
            })}
          </tr>
        </table>
      </React.Fragment>
    );
  }
}

export default CountDownClock;
