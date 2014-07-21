var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Yo no fui!');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || 8080;
var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost';

app.listen(port, ip, function() {
  console.log("Listening on " + port);
});
