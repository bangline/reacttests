/** @jsx React.DOM */

var React = require('react');
var UserAvatar = require('./user_avatar.jsx');

module.exports = React.createClass({
  render: function() {
    var teamMemberNodes = this.props.data.map(function (teamMember) {
      return (
        <UserAvatar key={teamMember.name} user={teamMember} />
      );
    });
    return (
      <div className="team">
        {teamMemberNodes}
      </div>
    );
  }
});
