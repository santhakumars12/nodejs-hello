const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  response.send('vanakkam!!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(app.get('port'), function () {
  console.log(`Node app is running at localhost:${app.get('port')}`);
});
