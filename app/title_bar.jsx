/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {currentTime: new Date()};
  },
  componentDidMount: function() {
    setInterval(this.getCurrentTime, this.props.updateInterval);
  },
  getCurrentTime: function() {
    this.setState({currentTime: new Date()});
  },
  render: function() {
    return (
      <h1>{this.state.currentTime.toTimeString()}</h1>
    );
  }
});
