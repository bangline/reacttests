/** @jsx React.DOM */

var React = require('react');
var Team = require('./team_list.jsx');
var _ = require('lodash');

var Project = React.createClass({
  getInitialState: function() {
    return { edit: false,
      name: this.props.project.name,
      team: this.props.project.team
    };
  },
  editProject: function() {
    this.setState({edit: true});
  },
  updateProjectName: function(event) {
    this.setState({name: event.target.value});
  },
  finishedEdit: function() {
    this.setState({edit: false});
    $.ajax({
      url: 'projects/' + this.props.key,
      dataType: 'json',
      type: 'PUT',
      data: { name: this.state.name, team: this.state.team },
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  removeTeamMember: function(member) {
    var team = _.reject(this.state.team, {name: member.name});
    this.setState({team: team});
  },
  render: function() {
    var header;
    if(this.state.edit) {
      return (
        <div className="editProject">
          <h3><input type="text" value={this.state.name} onChange={this.updateProjectName} /></h3>
          <a onClick={this.finishedEdit} className="done">Done</a>
          <Team data={this.state.team} editable={true} removeHandler={this.removeTeamMember} />
        </div>
      );
    } else {
      return (
        <div className="project">
          <h3>{this.state.name}</h3>
          <a onClick={this.editProject} className="edit">Edit</a>
          <Team data={this.state.team} editable={false} />
        </div>
      );
    }
  }
});

module.exports = Project;
