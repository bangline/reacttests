/** @jsx React.DOM */

var React = require('react');
var Team = require('./team_list.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="project">
        <h3>{this.props.project.name}</h3>
        <Team data={this.props.project.team} />
      </div>
    );
  }
});
