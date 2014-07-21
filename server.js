var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.OPENSHIFT_NODEJS_PORT || 8088;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(port, ip, function() {
  console.log("Listening on " + port);
});
