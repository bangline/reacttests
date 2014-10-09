var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var fullTeam = [
  {name: 'Leroy Jenkins', state: 'active', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
  {name: 'Testy McTesterson', state: 'active', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg'},
  {name: 'Rick Grimes', state: 'active', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg'},
];

var allProjects = [
  {name: 'SailFish', team: fullTeam},
  {name: 'Seahorse', team: [fullTeam[2]]},
  {name: 'Capasa', team: [fullTeam[0], fullTeam[1]]}
];

app.get('/projects.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(allProjects));
});

app.listen(3000);

console.log('Server started: http://localhost:3000/');
