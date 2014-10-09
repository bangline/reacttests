/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <img src={this.props.user.avatar_url} alt={this.props.user.name} />
    );
  }
});
