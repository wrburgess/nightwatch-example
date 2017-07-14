var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/submission", function(req, res) {
  var html = "<h1>Yay! It worked!</h1>";

  html += "<p>You submitted the form correctly.</p>";

  res.send(html);
});

app.listen(port);
