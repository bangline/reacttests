/** @jsx React.DOM */

var React = require('react');
var Project = require('./project.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return { projects: [] };
  },
  componentDidMount: function() {
    this.loadProjects();
  },
  loadProjects: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({projects: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var projectNodes = this.state.projects.map(function (project) {
      return (
        <Project key={project.name} project={project} />
      );
    });
    return (
      <div className="projects">
        {projectNodes}
      </div>
    );
  }
});

