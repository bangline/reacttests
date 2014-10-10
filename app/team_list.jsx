/** @jsx React.DOM */

var React = require('react');
var UserAvatar = require('./user_avatar.jsx');

module.exports = React.createClass({
  removeHandler: function(teamMember) {
    return this.props.removeHandler(teamMember);
  },
  render: function() {
    var _this = this;
    var teamMemberNodes = this.props.data.map(function (teamMember) {
      if(_this.props.editable) {
        return (
          <span key={teamMember.name}>
            <UserAvatar user={teamMember} />
            <a onClick={_this.removeHandler.bind(null, teamMember)}>Remove</a>
          </span>
        );
      } else {
        return (
          <UserAvatar key={teamMember.name} user={teamMember} />
        );
      }
    });
    return (
      <div className="team">
        {teamMemberNodes}
      </div>
    );
  }
});
