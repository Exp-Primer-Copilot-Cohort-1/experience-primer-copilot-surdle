// Create web server
// Run server
// Open browser
// Go to http://localhost:3000/
// Click on "Post a comment"
// Fill in the form and submit
// Check the response

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  fs.appendFile('comments.txt', comment + '\n', function(err) {
    if (err) {
      res.status(500).send('Error writing comment to disk');
    } else {
      res.send('Comment submitted');
    }
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});