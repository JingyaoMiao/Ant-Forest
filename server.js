const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/ping', function (req, res) {
  return res.send('ping');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); //serving build folder
});
app.listen(port);