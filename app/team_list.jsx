/** @jsx React.DOM */

var React = require('react');
var UserAvatar = require('./user_avatar.jsx');

var TeamList = React.createClass({
  removeHandler: function(teamMember) {
    return this.props.removeHandler(teamMember);
  },
  addTeamMember: function(teamMember) {
    return this.props.addHandler(teamMember);
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
    var addMember;
    if (this.props.editable) {
      addMember = <AddTeamMember addHandler={this.addTeamMember} />
    }
    return (
      <div className="team">
        {addMember}
        {teamMemberNodes}
      </div>
    );
  }
});

var AddTeamMember = React.createClass({
  getInitialState: function() {
    return { teamMembers: [],
             beenClicked: false };
  },
  loadFullTeam: function() {
    $.ajax({
      url: 'team.json',
      dataType: 'json',
      success: function(data) {
        this.setState({teamMembers: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  addTeamMember: function() {
    this.setState({beenClicked: true});
    this.loadFullTeam()
  },
  memberSelected: function(member) {
    return this.props.addHandler(member);
  },
  render: function() {
    if (this.state.beenClicked) {
      var _this = this;
      var memberList = this.state.teamMembers.map(function(member) {
        return (
          <span>
            <UserAvatar key={member.name} user={member} />
            <a onClick={_this.memberSelected.bind(null, member)}>{member.name}</a>
          </span>
        );
      });
      return(
        <div className="teamSelect">
          {memberList}
        </div>
      );
    } else {
      return (
        <a onClick={this.addTeamMember}>Add Team Member</a>
      );
    }
  }
});

module.exports = TeamList;
