/** @jsx React.DOM */

var React = require('react');
window.React = React;
var TitleBar = require('./title_bar.jsx');
var ProjectList = require('./project_list.jsx');

React.renderComponent(
  <TitleBar updateInterval={500} />,
  document.getElementById('titleBar')
);

React.renderComponent(
  <ProjectList url="projects.json" />,
  document.getElementById('projectList')
);
