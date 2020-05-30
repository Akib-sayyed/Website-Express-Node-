const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.get('/', function (req, res) {
  res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', function (req, res) {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(3000, function () {
  console.log('Started');
});
